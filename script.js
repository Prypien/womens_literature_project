/**
 * NYCU: Perspectives of a Semester
 * An interactive browser game (Visual Novel + Point-and-Click)
 * Inspired by Zadie Smith's "Swing Time"
 */

// Game data structure
let storyData = {};
let askedFinaleChars = new Set(); // Tracks characters questioned in the bar reunion

// Fetch game story script dynamically from JSON
fetch("./story.json")
    .then(res => res.json())
    .then(data => {
        storyData = data;
    })
    .catch(err => console.error("Error loading story script JSON:", err));

// Game variables
let gameState = "start"; // start, intro, select, char_story, finale
let selectedChar = null;
let currentSceneIndex = 0;
let completedChars = new Set();
let foundItems = new Set();
let isAudioMuted = true; // Browser autoplay restriction safety
let typewriterTimeout = null;
let consequenceRedirectIndex = null; // Branching finale helper
let finaleScore = 0; // Tracks the de-escalation points (2, 1, 0, -1) chosen in the Finale

// Audio Playlist (plays continuously, next track loads when current track ends)
const playlist = [
    "womens_literature.mp3",
    "womens_literature_2.mp3"
];
let currentTrackIndex = 0;

// DOM elements
const startScreen = document.getElementById("start-screen");
const introScreen = document.getElementById("intro-screen");
const selectScreen = document.getElementById("character-select-screen");
const gameScreen = document.getElementById("game-screen");

const startBtn = document.getElementById("start-btn");
const toSelectBtn = document.getElementById("to-select-btn");
const startFinaleBtn = document.getElementById("start-finale-btn");

const gameBg = document.getElementById("game-background");
const clickableLayer = document.getElementById("clickable-layer");
const dialogueBox = document.getElementById("dialogue-box");
const speakerName = document.getElementById("speaker-name");
const dialogueText = document.getElementById("dialogue-text");
const choiceContainer = document.getElementById("choice-container");
const nextBtn = document.getElementById("next-btn");
const backToSelectBtn = document.getElementById("back-to-select");

const inspectionOverlay = document.getElementById("inspection-overlay");
const inspectionTitle = document.getElementById("inspection-title");
const inspectionMemoryText = document.getElementById("inspection-memory-text");
const inspectionReflectionText = document.getElementById("inspection-reflection-text");
const closeInspectionBtn = document.getElementById("close-inspection-btn");
const inspectionCols = document.getElementById("inspection-cols");
const inspectionImgBox = document.getElementById("inspection-img-box");
const inspectionImg = document.getElementById("inspection-img");

const audioToggle = document.getElementById("audio-toggle");
const audioIcon = document.getElementById("audio-icon");
const bgMusic = document.getElementById("bg-music");

// Register event listeners
startBtn.addEventListener("click", () => transitionTo("intro"));
toSelectBtn.addEventListener("click", () => transitionTo("select"));
nextBtn.addEventListener("click", advanceScene);
backToSelectBtn.addEventListener("click", () => {
    playTrack();
    transitionTo("select");
});
closeInspectionBtn.addEventListener("click", closeInspection);
audioToggle.addEventListener("click", toggleAudio);

// Automatically play next song in playlist when current ends
bgMusic.addEventListener("ended", () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    bgMusic.src = playlist[currentTrackIndex];
    bgMusic.load();
    if (!isAudioMuted) {
        bgMusic.play().catch(e => console.log("Playlist play error:", e));
    }
});

// Character card clicks
document.querySelectorAll(".char-card").forEach(card => {
    card.addEventListener("click", () => {
        const charKey = card.dataset.char;
        if (!completedChars.has(charKey)) {
            selectCharacter(charKey);
        }
    });
});

startFinaleBtn.addEventListener("click", () => transitionTo("finale"));

// Audio controller (plays from playlist without resetting current song)
function playTrack() {
    const src = playlist[currentTrackIndex];
    if (bgMusic.getAttribute("src") !== src) {
        bgMusic.src = src;
        bgMusic.load();
    }
    
    if (!isAudioMuted && bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Audio play blocked by browser:", e));
    }
}

function toggleAudio() {
    isAudioMuted = !isAudioMuted;
    
    if (isAudioMuted) {
        bgMusic.pause();
        audioIcon.textContent = "🔇";
        audioToggle.classList.remove("playing");
        audioToggle.innerHTML = '<span id="audio-icon">🔇</span> Music Off';
    } else {
        audioIcon.textContent = "🔊";
        audioToggle.classList.add("playing");
        audioToggle.innerHTML = '<span id="audio-icon">🔊</span> Music On';
        playTrack();
    }
}

// Transition screens
function transitionTo(state) {
    gameState = state;
    
    startScreen.classList.remove("active");
    introScreen.classList.remove("active");
    selectScreen.classList.remove("active");
    gameScreen.classList.remove("active");

    if (state === "intro") {
        introScreen.classList.add("active");
        playTrack();
    } 
    else if (state === "select") {
        selectScreen.classList.add("active");
        playTrack();
        updateSelectionScreen();
    } 
    else if (state === "char_story") {
        gameScreen.classList.add("active");
        currentSceneIndex = 0;
        foundItems.clear();
        backToSelectBtn.classList.remove("hidden");
        playTrack();
        loadScene();
    } 
    else if (state === "finale") {
        gameScreen.classList.add("active");
        currentSceneIndex = 0;
        askedFinaleChars.clear(); // Clear the questioned characters track
        finaleScore = 0; // Reset score
        foundItems.clear(); // Reset item inspection track for the finale
        backToSelectBtn.classList.add("hidden"); // No going back in the finale
        playTrack();
        loadScene();
    }
}

// Select character
function selectCharacter(charKey) {
    selectedChar = charKey;
    transitionTo("char_story");
}

// Update character selection card UI
function updateSelectionScreen() {
    document.querySelectorAll(".char-card").forEach(card => {
        const charKey = card.dataset.char;
        let badge = card.querySelector(".status-badge");
        
        if (completedChars.has(charKey)) {
            card.classList.add("completed");
            if (!badge) {
                badge = document.createElement("span");
                badge.className = "status-badge";
                card.appendChild(badge);
            }
            badge.textContent = "Completed ✓";
        } else {
            card.classList.remove("completed");
            if (badge) {
                badge.remove();
            }
        }
    });
    
    // Unlock finale if all 4 are completed
    if (completedChars.size === 4) {
        startFinaleBtn.classList.remove("hidden");
    } else {
        startFinaleBtn.classList.add("hidden");
    }
}

// Render scene
function loadScene() {
    let scene;
    let title;
    let bgClass;

    if (gameState === "intro") {
        scene = storyData.intro.scenes[currentSceneIndex];
        title = "Introduction";
        bgClass = storyData.intro.bgClass;
    } 
    else if (gameState === "char_story") {
        const charData = storyData.characters[selectedChar];
        scene = charData.scenes[currentSceneIndex];
        title = `${charData.name} (${charData.role})`;
        bgClass = charData.bgClass;
    } 
    else if (gameState === "finale") {
        if (currentSceneIndex === 10 && askedFinaleChars.size === 4) {
            currentSceneIndex = 31;
        }
        scene = storyData.finale.scenes[currentSceneIndex];
        if (currentSceneIndex === 36) {
            scene = {
                ...scene,
                text: scene.text.replace("{score}", finaleScore)
            };
        }
        title = "The Finale";
        bgClass = storyData.finale.bgClass;
    }

    if (scene && scene.bgClass) {
        bgClass = scene.bgClass;
    }

    gameBg.className = "";
    gameBg.classList.add(bgClass);

    clickableLayer.innerHTML = "";
    clickableLayer.style.pointerEvents = "none";
    
    // Hide choice box
    choiceContainer.innerHTML = "";
    choiceContainer.classList.add("hidden");
    dialogueText.classList.remove("hidden");

    // Reset speaker styles
    speakerName.classList.remove("speaker-you");
    dialogueBox.classList.remove("speaker-you");

    if (scene.speaker === "You") {
        speakerName.classList.add("speaker-you");
        dialogueBox.classList.add("speaker-you");
    }

    if (scene.type === "point_and_click") {
        foundItems.clear(); // Clear found items list for the new scene
        nextBtn.style.display = "none";
        speakerName.textContent = scene.speaker;
        typeWriterEffect(dialogueText, scene.text);

        clickableLayer.style.pointerEvents = "auto";
        scene.items.forEach(item => {
            const itemEl = document.createElement("div");
            itemEl.className = "clickable-item";
            itemEl.style.left = item.x;
            itemEl.style.top = item.y;
            itemEl.textContent = item.icon;
            itemEl.dataset.id = item.id;
            
            if (foundItems.has(item.id)) {
                itemEl.style.opacity = "0.4";
                itemEl.style.pointerEvents = "none";
                itemEl.style.animation = "none";
            } else {
                itemEl.addEventListener("click", () => inspectItem(item));
            }
            
            clickableLayer.appendChild(itemEl);
        });
    } 
    else if (scene.type === "choice") {
        nextBtn.style.display = "none";
        speakerName.textContent = scene.speaker || title;
        typeWriterEffect(dialogueText, scene.text);
        
        // Render choice buttons
        choiceContainer.innerHTML = "";
        scene.choices.forEach(opt => {
            if (currentSceneIndex === 10 && opt.char && askedFinaleChars.has(opt.char)) {
                return; // Skip already questioned characters
            }
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.textContent = opt.text;
            btn.addEventListener("click", () => makeChoice(opt));
            choiceContainer.appendChild(btn);
        });
        choiceContainer.classList.remove("hidden");
    } 
    else {
        nextBtn.style.display = "inline-block";
        nextBtn.textContent = "Next ▶";
        speakerName.textContent = scene.speaker || title;
        typeWriterEffect(dialogueText, scene.text);
    }
}

// Make a multiple-choice selection
function makeChoice(opt) {
    choiceContainer.classList.add("hidden");
    typeWriterEffect(dialogueText, opt.consequence);
    
    if (opt.points !== undefined) {
        finaleScore += opt.points;
    }
    
    if (opt.char !== undefined) {
        askedFinaleChars.add(opt.char);
    }
    
    if (opt.targetSceneIndex !== undefined) {
        consequenceRedirectIndex = opt.targetSceneIndex;
    } else {
        consequenceRedirectIndex = null;
    }
    
    nextBtn.style.display = "inline-block";
}

// Advance scene
function advanceScene() {
    // Check if we have a consequence redirect queued up from a choice
    if (consequenceRedirectIndex !== null) {
        currentSceneIndex = consequenceRedirectIndex;
        consequenceRedirectIndex = null;
        loadScene();
        return;
    }

    let maxScenes = 0;

    if (gameState === "intro") {
        maxScenes = storyData.intro.scenes.length;
        currentSceneIndex++;
        if (currentSceneIndex < maxScenes) {
            loadScene();
        } else {
            transitionTo("select");
        }
    } 
    else if (gameState === "char_story") {
        const charData = storyData.characters[selectedChar];
        maxScenes = charData.scenes.length;
        currentSceneIndex++;
        
        if (currentSceneIndex < maxScenes) {
            loadScene();
        } else {
            completedChars.add(selectedChar);
            transitionTo("select");
        }
    } 
    else if (gameState === "finale") {
        const currentChapter = storyData.finale;
        const scene = currentChapter.scenes[currentSceneIndex];
        
        // Dynamic ending routing at the end of the bar discussion (scene index 31)
        if (currentSceneIndex === 31) {
            if (finaleScore >= 6) {
                currentSceneIndex = 32; // Ending D: The Shared Rhythm
            } else if (finaleScore >= 3 && finaleScore < 6) {
                currentSceneIndex = 33; // Ending C: Pragmatic Acceptance
            } else if (finaleScore >= 0 && finaleScore < 3) {
                currentSceneIndex = 34; // Ending B: Uneasy Truce
            } else {
                currentSceneIndex = 35; // Ending A: The Burning Bridge
            }
            loadScene();
            return;
        }

        // Check if this scene forces a jump to another index (e.g. skipping alternate endings)
        if (scene.nextSceneIndex !== undefined) {
            currentSceneIndex = scene.nextSceneIndex;
            loadScene();
            return;
        }

        maxScenes = currentChapter.scenes.length;
        currentSceneIndex++;
        
        if (currentSceneIndex < maxScenes) {
            loadScene();
        } else {
            showEndScreen();
        }
    }
}

// Item clicked
function inspectItem(item) {
    inspectionTitle.textContent = item.title;
    
    let memoryText = "";
    let reflectionText = "";
    
    if (item.analysis.includes("\n\nReflection:\n")) {
        const parts = item.analysis.split("\n\nReflection:\n");
        memoryText = parts[0].replace(/^Memory:\n/, "");
        reflectionText = parts[1];
    } else {
        memoryText = item.analysis.replace(/^Memory:\n/, "");
        reflectionText = "";
    }
    
    inspectionMemoryText.textContent = memoryText;
    inspectionReflectionText.textContent = reflectionText;
    
    // Dynamic image loading
    if (item.image) {
        inspectionImg.src = item.image;
        inspectionImgBox.classList.remove("hidden");
        inspectionCols.classList.add("has-image");
    } else {
        inspectionImg.src = "";
        inspectionImgBox.classList.add("hidden");
        inspectionCols.classList.remove("has-image");
    }
    
    inspectionOverlay.classList.remove("hidden");
    
    foundItems.add(item.id);
    
    const el = clickableLayer.querySelector(`[data-id="${item.id}"]`);
    if (el) {
        el.style.opacity = "0.4";
        el.style.pointerEvents = "none";
        el.style.animation = "none";
    }
}

// Close item inspection
function closeInspection() {
    inspectionOverlay.classList.add("hidden");
    
    let scene;
    if (gameState === "finale") {
        scene = storyData.finale.scenes[currentSceneIndex];
    } else {
        const charData = storyData.characters[selectedChar];
        scene = charData.scenes[currentSceneIndex];
    }
    
    const allFound = scene.items.every(item => foundItems.has(item.id));
    if (allFound) {
        if (gameState === "finale") {
            dialogueText.textContent = "You are ready to enter. Click 'Next' to join the table.";
        } else {
            dialogueText.textContent = "Excellent! You have analyzed all the key symbols of this memory. Click 'Next' to continue.";
        }
        nextBtn.style.display = "inline-block";
    }
}

// Show end screen
function showEndScreen() {
    gameBg.className = "bg-game-over";
    clickableLayer.innerHTML = "";
    speakerName.textContent = "THE END";
    dialogueText.innerHTML = "<strong>Congratulations!</strong> You have played through all perspectives and the shared finale.<br><br>This project creatively demonstrates how different socio-economic backgrounds and identities shape the experience of the exact same place — in the spirit of Zadie Smith's <em>Swing Time</em>. You have built a solid literary and technical foundation.";
    
    nextBtn.textContent = "Play Again ↺";
    nextBtn.addEventListener("click", () => {
        location.reload();
    });
}

// Typewriter effect
function typeWriterEffect(element, text) {
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
        typewriterTimeout = null;
    }

    element.innerHTML = "";
    let i = 0;
    
    if (text.includes("<") || text.length < 15) {
        element.innerHTML = text;
        return;
    }

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typewriterTimeout = setTimeout(type, 8); // Fast typing speed
        } else {
            typewriterTimeout = null;
        }
    }
    type();
}
