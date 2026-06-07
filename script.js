/**
 * NYCU: Perspectives of a Semester
 * An interactive browser game (Visual Novel + Point-and-Click)
 * Inspired by Zadie Smith's "Swing Time"
 */

// Game data structure
const storyData = {
    // 1. Shared Intro for all characters
    intro: {
        bgClass: "bg-campus-sun",
        scenes: [
            {
                speaker: "Guangfu Campus — Hsinchu",
                text: "June is scorching hot on the Guangfu campus. The air feels heavy and oppressive; the sound of cicadas fills the background while people hurry across the campus, eager to spend as little time as possible under the blazing sun and to reach the air-conditioned buildings."
            },
            {
                speaker: "Guangfu Campus — Hsinchu",
                text: "On that day, the university is hosting a congress. All former students from the past ten years who are currently in Taiwan have been invited to gather and reconnect."
            }
        ]
    },

    // 2. Individual Character Stories
    characters: {
        french: {
            name: "The French Girl",
            portrait: "🇫🇷",
            role: "Artist & Singer",
            bgClass: "bg-french-glow",
            audioTrack: "french",
            scenes: [
                {
                    speaker: "The French Girl",
                    text: "My band was touring across Asia, and I had noticed the invitation to the event buried among my emails. I had started singing professionally seven years earlier, but my career had not exactly taken off at first; things had changed only recently when our band gained unexpected popularity after composing the soundtrack for a successful film. I was on tour with my group as a singer, and I was certainly not the kind of alumnus NYCU had in mind when organizing this congress. Still, I decided to attend the event."
                },
                {
                    speaker: "The French Girl",
                    text: "The conference I attended focused on the role of semiconductors in Taiwan and the world. It was a topic that this university had taught me a great deal about ten years ago. During my time there, I had taken a class exploring the complexity of global supply chains through geopolitics."
                },
                {
                    speaker: "Exploration",
                    type: "point_and_click",
                    text: "Search the room for objects that remind you of that crucial class visit ten years ago.",
                    items: [
                        {
                            id: "coconut",
                            x: "25%",
                            y: "55%",
                            icon: "🥥",
                            title: "The Coconut Beach (Philippines)",
                            analysis: "Memory:\n»One visit, in particular, left a lasting impression on me. It was a Monday, but a few days earlier, I had been lying on a beach in the Philippines with a friend, my feet in the sand, the sun warming my skin, and a coconut in my hand.«\n\nReflection:\nThis tropical ease contrasted sharply with what followed. Just days later, I was back in Taiwan, entering a very different reality. The abrupt shift from a carefree vacation in a tropical paradise to the highly industrialized Hsinchu highlighted my privileged position as a European. I could travel wherever I pleased, consume, and view the world as a playground."
                        },
                        {
                            id: "smartphone",
                            x: "70%",
                            y: "45%",
                            icon: "📱",
                            title: "Filipino Migrant Workers Agency",
                            analysis: "Memory:\n»And back at school, I visited an agency for Filipino migrant workers in Hsinchu with my teacher. They had left their country to work for major electronics and semiconductor companies. Many had not seen their families for several years and sent nearly everything they earned back home. They shared a single dormitory room for 12 people and had no privacy or intimacy. I remember how small I felt. They were sacrificing their lives for their families, while I had been lying on a beach in their country just days before. And being in Taiwan, we certainly did not have the same experience of the country.«\n\nReflection:\nThis highlighted the stark inequalities embedded in globalization mechanisms and the tiny components in our phones that circulate across all these countries. As a European who could afford the latest iPhone, I was part of that system, benefiting because I was born on the \"right\" side of the world."
                        }
                    ]
                },
                {
                    speaker: "The French Girl",
                    text: "The course was about the inequalities embedded in globalization mechanisms and about the tiny components in our phones that circulate across all these countries. And as a European who could afford the latest iPhone, I was part of that system. I was benefiting from it because I was born on the “right” side of the world."
                },
                {
                    speaker: "The French Girl",
                    type: "choice",
                    text: "How do you respond to your complicity in this global supply chain system?",
                    choices: [
                        {
                            text: "Channel the guilt: Use your art to critique corporate structures",
                            consequence: "I gripped the warm steel of my phone, accepting my complicity in this chain. I did not throw it away, but I promised to use my art to critique these exact structures. I refused to let corporate giants own my voice; I became an artist."
                        },
                        {
                            text: "Rebel completely: Maintain absolute distance from big tech companies",
                            consequence: "I placed the phone face down, unable to ignore the disparity. I knew I couldn't escape the digital grid, but I could actively refuse to work for or glorify these big companies. I chose the independent path of art to keep my hands clean."
                        }
                    ]
                },
                {
                    speaker: "The French Girl",
                    text: "But what could I do? I did not have an answer at the time, and I did not throw away my phone. I still have not done it; I can feel it in my pocket right now. So what did I learn? Well, I decided not to work for big companies, and I am an artist now."
                }
            ]
        },

        german: {
            name: "The German",
            portrait: "🇩🇪",
            role: "IT Entrepreneur",
            bgClass: "bg-german-glow",
            audioTrack: "german",
            scenes: [
                {
                    speaker: "The German",
                    text: "Ten years ago, I came to NYCU to study computer science. Today, I have my own companies running different businesses in Taiwan. I did not become what German society expected me to be: successful, secure, moving within the wealthy circles of Western Europe. Yet, returning to the Guangfu campus for this alumni congress feels less like a celebration and more like an audit of an unearned heritage. I walk through the air-conditioned halls of NYCU, carrying the invisible weight of a passport and a skin color that still open doors worldwide, doors I am no longer sure my generation has the strength to build ourselves."
                },
                {
                    speaker: "The German",
                    text: "I stand by the large glass facade of the auditorium, looking out into the shimmering, oppressive June heat. On stage, a panel discusses the shifting economic gravity from the West to Asia. Nearby, a delegation of recently arrived German exchange students is gathering. They look noticeably out of place, sluggish, carrying the physical weight of a culture back home that has grown comfortable and soft, their conversation lacking the sharp focus of the local students around them. They talk loudly, yet they seem disoriented in this hyper-modern, digital hub."
                },
                {
                    speaker: "The German",
                    text: "But as I watch them, my gaze locks onto one young man at the edge of their group. He isn't talking. He is staring out of the window, his eyes wide, a quiet expression of profound overwhelm and sudden clarity on his face. In his silent, intense gaze, I recognize myself exactly ten years ago. He is having the exact same realization I had: the shattering awareness that the Western bubble we came from is running on empty, and that the future is being built right here, by people who actually work for it. My eyes follow his gaze out the window, looking down at the university sports field."
                },
                {
                    speaker: "Exploration",
                    type: "point_and_click",
                    text: "Look down at the sports field and search the window sill for objects of focus.",
                    items: [
                        {
                            id: "running-track",
                            x: "50%",
                            y: "60%",
                            icon: "🏃",
                            title: "The NYCU Running Track at Night",
                            analysis: "Memory:\n»I remember the NYCU running track at night. It was never empty. Under the harsh floodlights, through the thick, heavy air, people were running. Students who had spent twelve hours in the labs, professors, local residents, they didn't just exercise; they strived. There was an absolute focus on performance, an unapologetic culture of merit and execution. I used to go there after the gym, drinking my creatine, watching them, maybe even admiring them.«\n\nReflection:\nWhile my home country back then was already settling into a comfortable, sluggish decadence, complaining about minor inconveniences while living off the accumulated wealth of past decades, Taiwan was a revelation of raw, disciplined energy. In Germany, we had become comfortable living like maggots in bacon, inheriting a massive economic empire we didn't create, losing our drive, hiding our stagnation behind moral grandstanding and pretending to be the world’s police. But here, nobody was pretending. People just put their heads down and worked. From the high-tech engineers to the night market vendors shouting into the neon-lit night, there was a shared conviction: your worth is defined by what you create, not by what your ancestors left behind."
                        },
                        {
                            id: "passport",
                            x: "30%",
                            y: "40%",
                            icon: "🛂",
                            title: "Inherited Shadows & Privilege",
                            analysis: "Memory:\n»Being the \"white, privileged man\" in Taiwan felt bizarre. I was treated like a beauty ideal and an economic powerhouse based on a legacy that was already crumbling from the inside. My country had lost its focus on digital innovation, its cheap energy, its security, and its work ethic. I felt like the heir to a dying kingdom, enjoying the residual respect of a world that hadn't fully realized we were running on empty.«\n\nReflection:\nTaiwan didn't make me feel superior; it forced me to look up. It made me realize that if the economic axis of the last century had been different, the global ideals of privilege would be completely reversed. I didn't want to be the maggot anymore. I wanted to build my own foundation. The intense drive of this island demanded more of me, setting a bar that I still fear I will never fully reach."
                        }
                    ]
                },
                {
                    speaker: "The German",
                    type: "choice",
                    text: "How do you respond to the intense focus on performance you observe on the running track?",
                    choices: [
                        {
                            text: "Embrace the strive: Join the track and run side-by-side with them",
                            consequence: "I walked down to the track, my lungs burning in the heavy, humid Hsinchu air, running side-by-side with them under the floodlights. I wanted to absorb that discipline, to breathe it in and prove I wasn't just a passive heir to a dying empire."
                        },
                        {
                            text: "Reflect from the sidelines: Drink your creatine and study their drive",
                            consequence: "I stayed on the concrete steps, drinking my creatine, watching their tireless movement. I didn't join. I just watched, absorbing the silent lesson that privilege means nothing without striving, letting it reshape my path."
                        }
                    ]
                },
                {
                    speaker: "The German",
                    text: "A sudden, rhythmic notification melody chimes from my phone, a soundtrack cue sent by my lead developer. The memory fades, and I am back in the air-conditioned hall of the congress. I look over at the young German student one last time. He is still staring out at the track, the illusion of his privilege visibly cracking."
                },
                {
                    speaker: "The German",
                    text: "I smile softly, step away from the glass, and walk back into the crowd. I am no longer a ghost of a fading West; I am exactly where I belong, creating something that matters."
                }
            ]
        },

        taiwanese: {
            name: "The Taiwanese",
            portrait: "🇹🇼",
            role: "Semiconductor Engineer",
            bgClass: "bg-taiwanese-glow",
            audioTrack: "taiwanese",
            scenes: [
                {
                    speaker: "The Taiwanese",
                    text: "Ten years ago, while my foreign friends went to night markets and traveled to tropical beaches, I spent my nights in the dust-free yellow light of the NYCU semiconductor labs. Today, I am a lead engineer at TSMC, managing the production of the 3nm chips that run the world's smartphones and military systems."
                },
                {
                    speaker: "The Taiwanese",
                    text: "I attend this congress not to reminisce, but because TSMC is funding a new research building. Looking at the international alumni laughing, I feel a massive distance. They came here to 'experience' Taiwan, while we live here to sustain it. Our labor is the invisible shield of this island – the Silicon Shield."
                },
                {
                    speaker: "Exploration",
                    type: "point_and_click",
                    text: "Examine the symbols of technological duty and personal sacrifice.",
                    items: [
                        {
                            id: "bunny-suit",
                            x: "45%",
                            y: "45%",
                            icon: "🧑‍🚀",
                            title: "The Cleanroom Suit (Bunny Suit)",
                            analysis: "Memory:\n»I remember the feeling of suffocating inside the white cleanroom suit for 12 hours straight. No water, no phone, no identity. We were just cogs in a multi-billion dollar machine, building the future for users in the West who don't know Hsinchu exists.«\n\nReflection:\nTaiwan's semiconductor dominance relies on the extreme collective sacrifice of our generation. While Western students could sit in cafes and discuss the moral philosophy of supply chains, we had to secure the physical output. Our work is not a hobby; it is a matter of national survival."
                        },
                        {
                            id: "oolong-tea",
                            x: "65%",
                            y: "65%",
                            icon: "🍵",
                            title: "Oolong Tea & Sleep Deprivation",
                            analysis: "Memory:\n»My father told me: 'Work hard, and the world will respect Taiwan.' So I drank cold oolong tea at 3 AM to finish the lithography test, while my German roommate slept soundly after a night of beer.«\n\nReflection:\nThe asymmetry is clear: the weight on our shoulders is colossal. We cannot afford comfort. The wealth and freedom that our Western friends inherit, we must earn from scratch every single day."
                        }
                    ]
                },
                {
                    speaker: "The Taiwanese",
                    type: "choice",
                    text: "Under the immense pressure of the Silicon Shield, how do you sustain yourself?",
                    choices: [
                        {
                            text: "Push forward: Double down on the collective duty",
                            consequence: "I drank another cup of cold tea and pushed back into the cleanroom. This was my contribution to our national survival. If we falter, the island falters. Our sweat is the real shield of Hsinchu."
                        },
                        {
                            text: "Seek boundaries: Step out of the yellow light to breathe",
                            consequence: "I stepped outside the lab for a brief ten minutes, looking up at the dark Hsinchu hills. I needed to remind myself that I am a human being with a soul, not just a cleanroom component in the supply chain."
                        }
                    ]
                },
                {
                    speaker: "The Taiwanese",
                    text: "A foreign voice calls my name. It is the French girl, waving at me. Ten years have passed, and our paths couldn't be more different. She escaped to the arts; I remained in the machine. I take a deep breath, adjust my badge, and walk towards her."
                }
            ]
        },

        south_american: {
            name: "The South American",
            portrait: "🇦🇷",
            role: "Cultural Diplomat",
            bgClass: "bg-southamerican-glow",
            audioTrack: "south_american",
            scenes: [
                {
                    speaker: "The South American",
                    text: "Ten years ago, I left Buenos Aires for an exchange program in Hsinchu. It was a cultural shock. I was loud, emotional, and disorganized in a world that ran on microchips and absolute order. Today, I work as a cultural attaché, building bridges between South America and East Asia."
                },
                {
                    speaker: "The South American",
                    text: "Walking the Guangfu campus, I realize how much Hsinchu has reshaped my concept of time and work. In Argentina, we lived in the shadow of historical crises, learning to survive the present. Here, I learned to build for a future that is already planned years in advance."
                },
                {
                    speaker: "Exploration",
                    type: "point_and_click",
                    text: "Find the pieces of your identity scattered between two hemispheres.",
                    items: [
                        {
                            id: "polaroid",
                            x: "55%",
                            y: "50%",
                            icon: "📸",
                            title: "The Old Polaroid Photo",
                            analysis: "Memory:\n»A photo of the four of us at the Miaoli night market, laughing, holding bubble tea and stinky tofu. We looked so young, convinced that our friendship would easily bridge the continents.«\n\nReflection:\nThis photo shows a lightheartedness that we all lost. Back then we were just students; today we represent our respective homelands and their geopolitical realities. Time shaped us, but also drew us apart."
                        },
                        {
                            id: "mate-cup",
                            x: "35%",
                            y: "60%",
                            icon: "🧉",
                            title: "The Mate Cup",
                            analysis: "Memory:\n»I used to brew Mate in the NYCU library. The security guard would stare at me like I was doing something illegal. It was my only anchor to the southern hemisphere.«\n\nReflection:\nDisplacement forces you to distill your culture. In Taiwan, I truly became \"South American\". People appreciated my warmth and spontaneity, but I always remained the exotic outsider, filling the emotional voids of Hsinchu's technology-driven rush."
                        }
                    ]
                },
                {
                    speaker: "The South American",
                    type: "choice",
                    text: "Where does your identity anchor after ten years between two worlds?",
                    choices: [
                        {
                            text: "Anchor in East Asia: Adopt the future-driven rhythm of Hsinchu",
                            consequence: "I grew to love Hsinchu's forward-looking pace. It gave me structure. I anchor myself here now, building bridges, finding my own rhythm in the silicon empire."
                        },
                        {
                            text: "Anchor in the South: Preserve your warm, spontaneous identity",
                            consequence: "No matter how much NYCU shaped me, my primary pulse remains south of the equator. I carry that warmth as my shield, refusing to be entirely optimized by the machine."
                        }
                    ]
                },
                {
                    speaker: "The South American",
                    text: "I spot the German entrepreneur looking out the window, looking serious as always. Nearby, the Taiwanese engineer and the French singer are talking. The circle is closing. Ten years later, we are back where the journey started."
                }
            ]
        }
    },

    // 3. The Shared Finale
    finale: {
        bgClass: "bg-finale-glow",
        audioTrack: "finale",
        scenes: [
            {
                speaker: "The Reunion — A Bar in Hsinchu",
                text: "Later that evening. The noise of the congress has faded. The four of them sit in a small, dark bar in a side alley near East Gate in Hsinchu. On the table are cold Taiwan Beer, Oolong tea, and empanadas brought by the South American."
            },
            {
                speaker: "The French Girl",
                text: "It feels so strange being back. When I look at the university now, all I see are the structures of globalization. It feels like the innocence we had ten years ago was just an illusion."
            },
            {
                speaker: "The German",
                text: "Maybe. But innocence doesn't build anything. Taiwan taught me that the West is living in a dream. If you want a future, you have to work for it, just like the people running on that track every single night."
            },
            {
                speaker: "The Taiwanese",
                text: "You both talk about Taiwan like it's a concept. For me, it's my daily life. The chips we design are not just 'globalization' or 'energy' – they are the only reason we are still a free country. Our work is our survival. But it is exhausting."
            },
            {
                speaker: "The South American",
                text: "Maybe that's the point. We all experienced the same hot summer here, but we carried different burdens. The French girl carried the guilt of consumption, the German the fear of decay, the Taiwanese the weight of survival, and I... I carried the distance of the south."
            },
            {
                speaker: "The Reunion — A Bar in Hsinchu",
                type: "choice",
                text: "As you look at your friends and reflect on the semester, what is the ultimate truth of your shared time at NYCU?",
                choices: [
                    {
                        text: "Acknowledge the Geopolitical Rift: We have grown too far apart",
                        consequence: "We must accept that we have grown apart. Our backgrounds and national privileges have solidified into separate worlds. Hsinchu was just a brief pause in a system that ultimately divides us. A bittersweet silence settles. The glasses clink, but the division is clear. We are citizens of different realities now, bound by memory but parted by fate."
                    },
                    {
                        text: "Embrace the Shared Rhythm: Our bond transcends the divisions",
                        consequence: "Despite the distances and privileges, Hsinchu gave us a common beat. We might live in different hemispheres, but the drive and friendship we forged will always keep us synchronized. A warm energy fills the small bar. The clink of our glasses echoes into the night. We realize that our friendship is its own shield against the isolating currents of the world."
                    }
                ]
            },
            {
                speaker: "The Reunion — A Bar in Hsinchu",
                text: "They raise their glasses. The clink of glass blends with the sound of cicadas outside the door, just like ten years ago. The rhythms of their lives were different, but for a brief moment, they dance to the same beat."
            },
            {
                speaker: "The End",
                text: "Thank you for playing! This project highlights how different socio-economic backgrounds and identities shape the experience of the exact same place — in the spirit of Zadie Smith's Swing Time."
            }
        ]
    }
};

// Game variables
let gameState = "start"; // start, intro, select, char_story, finale
let selectedChar = null;
let currentSceneIndex = 0;
let completedChars = new Set();
let foundItems = new Set();
let isAudioMuted = true; // Browser autoplay restriction safety
let typewriterTimeout = null;

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

const audioToggle = document.getElementById("audio-toggle");
const audioIcon = document.getElementById("audio-icon");
const bgMusic = document.getElementById("bg-music");

// Register event listeners
startBtn.addEventListener("click", () => transitionTo("intro"));
toSelectBtn.addEventListener("click", () => transitionTo("select"));
nextBtn.addEventListener("click", advanceScene);
backToSelectBtn.addEventListener("click", () => {
    playTrack("menu");
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
        
        // Auto-play the correct track based on the state
        if (gameState === "char_story" && selectedChar) {
            playTrack(storyData.characters[selectedChar].audioTrack);
        } else if (gameState === "finale") {
            playTrack(storyData.finale.audioTrack);
        } else {
            playTrack("menu");
        }
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
        playTrack("menu");
    } 
    else if (state === "select") {
        selectScreen.classList.add("active");
        playTrack("menu");
        updateSelectionScreen();
    } 
    else if (state === "char_story") {
        gameScreen.classList.add("active");
        currentSceneIndex = 0;
        foundItems.clear();
        backToSelectBtn.classList.remove("hidden");
        
        const charData = storyData.characters[selectedChar];
        playTrack(charData.audioTrack);
        loadScene();
    } 
    else if (state === "finale") {
        gameScreen.classList.add("active");
        currentSceneIndex = 0;
        backToSelectBtn.classList.add("hidden"); // No going back in the finale
        
        playTrack(storyData.finale.audioTrack);
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
        const badge = card.querySelector(".status-badge");
        
        if (completedChars.has(charKey)) {
            card.classList.add("completed");
            badge.textContent = "Completed ✓";
        } else {
            card.classList.remove("completed");
            badge.textContent = "Ready";
        }
    });

    // Unlock finale if all 4 are completed
    if (completedChars.size === 4) {
        startFinaleBtn.classList.remove("hidden");
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
        scene = storyData.finale.scenes[currentSceneIndex];
        title = "The Finale";
        bgClass = storyData.finale.bgClass;
    }

    gameBg.className = "";
    gameBg.classList.add(bgClass);

    clickableLayer.innerHTML = "";
    clickableLayer.style.pointerEvents = "none";
    
    // Hide choice box
    choiceContainer.innerHTML = "";
    choiceContainer.classList.add("hidden");
    dialogueText.classList.remove("hidden");

    if (scene.type === "point_and_click") {
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
    nextBtn.style.display = "inline-block";
}

// Advance scene
function advanceScene() {
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
            playTrack("menu");
            transitionTo("select");
        }
    } 
    else if (gameState === "finale") {
        maxScenes = storyData.finale.scenes.length;
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
    
    const charData = storyData.characters[selectedChar];
    const scene = charData.scenes[currentSceneIndex];
    
    if (foundItems.size === scene.items.length) {
        dialogueText.textContent = "Excellent! You have analyzed all the key symbols of this memory. Click 'Next' to continue.";
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
