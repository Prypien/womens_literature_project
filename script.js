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

    // 2. Individual Character Stories (Now fully linear)
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
                    text: "I stayed in Hsinchu after graduation, taking a path not much different from that of my peers. Since stepping into NYCU, my future seemed to be set. Like everyone else, I worked for a master's degree and applied for a decent job in the Hsinchu Science Park. It was the most ordinary path an EE major could take. And though I was not a fan of conferences, since many of my acquaintances were attending, I decided I should attend as well, given how close it was to school."
                },
                {
                    speaker: "The Taiwanese",
                    text: "The conference was about the role of semiconductors in Taiwan and the world, which had everything to do with my job—or rather, my life ever since starting college. I had left school for a few years, yet it feels like nothing has really changed. I thought back to my days after freshman year, writing lab reports until late at night and grinding for exams; my past and future blurred together."
                },
                {
                    speaker: "Exploration",
                    type: "point_and_click",
                    text: "Look at the desk and search for items representing your academic and professional path.",
                    items: [
                        {
                            id: "lab-report",
                            x: "35%",
                            y: "55%",
                            icon: "📊",
                            title: "Lab Reports & Grinding",
                            analysis: "Memory:\n»I thought back to my days after freshman year, writing lab reports until late at night and grinding for exams; my past and future blurred together.«\n\nReflection:\nSince starting college, my future seemed predetermined. I worked for a master's degree and applied for a job in the Hsinchu Science Park, the most ordinary path for an EE major. The academic grind became the template for my professional life, blurring my past and my future into a single, continuous loop of work."
                        },
                        {
                            id: "schedule-book",
                            x: "65%",
                            y: "45%",
                            icon: "📅",
                            title: "Surviving the Present",
                            analysis: "Memory:\n»I stopped taking classes purely out of interest after my freshman year, as it took too much time away from my study schedule. I started caring less and less about the world and more about surviving the present and planning for a more laid-back future. I remember scolding a friend for never getting enough sleep, but I never actually imagined I would end up in the same position.«\n\nReflection:\nThe carefree days of freshman year quickly vanished under the weight of the study schedule. I had to let go of intellectual curiosity just to survive the competitiveness. I remember scolding a friend for never getting enough sleep, only to end up in the exact same position, sacrificing sleep and curiosity for a secured future."
                        }
                    ]
                },
                {
                    speaker: "The Taiwanese",
                    text: "At first, the change was hard to bear. A decade ago, I was a freshman at college, and my life was the most carefree. Even though the change was well expected, it was still hard to adjust. But as time went on, I got used to the lifestyle. And for the sake of my future, I hung on. It’s hard to stop when everyone around you is striving for better. There didn’t seem to be another choice, and I chose this for myself."
                },
                {
                    speaker: "The Taiwanese",
                    text: "And so, here I am. Almost everything is the same. The same competitiveness, the same busy life, except I get paid more now. Not that I have much time to enjoy it, though. Sometimes I wonder if it’s really worth it, living this way, but as of now, I’m still here. My life as an engineer will continue for the time being."
                }
            ]
        },

        south_american: {
            name: "The Paraguayan",
            portrait: "🇵🇾",
            role: "Civil Engineer",
            bgClass: "bg-southamerican-glow",
            audioTrack: "south_american",
            scenes: [
                {
                    speaker: "The Paraguayan",
                    text: "I had not planned to attend the congress. Ten years had passed since I graduated from NYCU, and life had taken me far away from Taiwan. After finishing my studies, I returned to Paraguay and founded my own civil engineering company. At first, it was just a small office with a few employees and a handful of local projects. But over the years, the company grew. We designed roads, bridges, water infrastructure, and housing developments across the country. Recently, I began exploring opportunities abroad, and Taiwan was the first place that came to mind. So when I received the invitation to the alumni congress, I decided it was time to return."
                },
                {
                    speaker: "The Paraguayan",
                    text: "As I walked through the exhibition hall, I noticed a booth displaying engineering projects completed by alumni around the world. Among the models stood a small bridge. It was nothing extraordinary, yet it reminded me of a miniature bridge I had built during one of my classes at NYCU."
                },
                {
                    speaker: "Exploration",
                    type: "point_and_click",
                    text: "Search the exhibition area for symbols that represent your journey from student projects to global engineering.",
                    items: [
                        {
                            id: "mate-cup",
                            x: "35%",
                            y: "60%",
                            icon: "🧉",
                            title: "Tereré",
                            analysis: "Memory:\n»I spent most of my time worrying about exams, reports, and whether my Chinese was good enough to communicate with everyone around me. I often felt like an outsider, usually the only Paraguayan in the room. One afternoon, after a particularly stressful week, I sat outside with a group of classmates. I brought a bag of Paraguayan yerba mate and introduced them to tereré. Most of them had never heard of it. They laughed at the strange metal straw and asked countless questions about my country.«\n\nReflection:\nFor the first time, I realized that being different was not a weakness. The things that made me feel isolated were the same things that made me interesting to others. This tereré reminds me of the day I stopped seeing myself as a foreigner and started seeing myself as a bridge between cultures."
                        },
                        {
                            id: "bridge-blueprint",
                            x: "60%",
                            y: "50%",
                            icon: "🌉",
                            title: "Bridge Blueprint",
                            analysis: "Memory:\n»During my engineering classes at NYCU, I spent hours designing structures, learning to build foundations and run calculations. We built miniature models, testing load capacities and stress points, wondering if these math formulas would ever carry real-world weight.«\n\nReflection:\nThis blueprint represents more than engineering. It reminds me that the most important structures I built were the connections between Paraguay and Taiwan, connections that eventually inspired me to expand my company across the world. Roads and bridges are important, but they are ultimately designed to connect communities. In a way, that idea began during those conversations over tereré."
                        }
                    ]
                },
                {
                    speaker: "The Paraguayan",
                    text: "As my company expanded, I started working with international partners. I realized that infrastructure projects are no longer purely local. The materials, technologies, and expertise often come from different countries. Globalization is not only about products moving across borders; it is also about ideas and people doing the same. My years in Taiwan showed me that collaboration across cultures creates stronger solutions than any country could achieve alone."
                },
                {
                    speaker: "The Paraguayan",
                    text: "That is why I returned. Not only to reconnect with old friends, but also because I want to establish a branch of my company in Taiwan. Ten years ago, I arrived here as a foreign student searching for opportunities. Today, I have come back hoping to create them."
                },
                {
                    speaker: "The Paraguayan",
                    text: "As I left the exhibition area, I spotted a refreshment table. Among the drinks was a large pitcher of iced tea. For a second, I smiled, imagining how much better it would taste mixed with tereré. Then someone called my name from across the room, and I turned around to see an old classmate waving at me."
                }
            ]
        }
    },

    // 3. The Shared Branching Finale
    finale: {
        bgClass: "bg-finale-glow",
        audioTrack: "finale",
        scenes: [
            // Index 0
            {
                speaker: "The Reunion — A Bar in Hsinchu",
                text: "Later that evening. The noise of the congress has faded. The four of them sit in a small, dark bar in a side alley near East Gate in Hsinchu. On the table are cold Taiwan Beer, Oolong tea, and empanadas brought by the Paraguayan."
            },
            // Index 1
            {
                speaker: "The French Girl",
                text: "It feels so strange being back. When I look at the university now, all I see are the structures of globalization. It feels like the innocence we had ten years ago was just an illusion."
            },
            // Index 2
            {
                speaker: "The German",
                text: "Maybe. But innocence doesn't build anything. Taiwan taught me that the West is living in a dream. If you want a future, you have to work for it, just like the people running on that track every single night."
            },
            // Index 3
            {
                speaker: "The Taiwanese",
                text: "You both talk about Taiwan like it's a concept. For me, it's my daily life. The chips we design are not just 'globalization' or 'energy' – they are the only reason we are still a free country. Our work is our survival. But it is exhausting."
            },
            // Index 4 (CHOICE 1)
            {
                speaker: "The Paraguayan",
                type: "choice",
                text: "We all experienced the same hot summer here, but we carried different burdens. The French girl carried the guilt of consumption, the German the fear of decay, the Taiwanese the weight of survival, and I... the distance of Paraguay. How do you respond to the growing tension?",
                choices: [
                    {
                        text: "Critique Western Privilege: Challenge the European projection on Taiwan",
                        consequence: "I looked at the French girl and the German. We spent our semester consuming the island's energy, projecting our hopes and fears onto it. We treated it like our playground, ignoring the physical labor keeping it afloat.",
                        targetSceneIndex: 5
                    },
                    {
                        text: "Defend the Local Sacrifice: Highlight the real human cost of technology",
                        consequence: "I supported the Taiwanese engineer. Her exhaustion is the price of our global connectivity. The West demands progress but remains blind to the cleanrooms and sleepless labs that build it.",
                        targetSceneIndex: 9
                    },
                    {
                        text: "Defuse the Tension: Recall the night market nostalgia",
                        consequence: "I tried to break the heavy silence. I reminded them of our shared youth. We were just students once, sharing bubble tea and stinky tofu in the scorching heat, unaware of the structures dividing us.",
                        targetSceneIndex: 13
                    }
                ]
            },

            // ==========================================
            // BRANCH 1: Western Privilege (Indices 5-8)
            // ==========================================
            // Index 5
            {
                speaker: "The French Girl",
                text: "I know I benefit from the system. I sing about peace, but I bought the phone built by underpaid workers. But at least I don't pretend it's a pure meritocracy like you do, German guy! You act like the hustle makes the exploitation moral."
            },
            // Index 6
            {
                speaker: "The German",
                text: "It IS raw execution! The developers and engineers here work because they want to build something. Your moral guilt is just the luxury of a decaying European welfare state that has forgotten how to innovate and now hides behind grandstanding!"
            },
            // Index 7
            {
                speaker: "The Taiwanese",
                text: "You call my exhaustion 'meritocracy'? It is structural pressure! If I don't work, my family has no security, and our tech shield crumbles. Don't romanticize my long hours just to feed your IT business theories. It's not a choice for me!"
            },
            // Index 8 (CHOICE 1.1)
            {
                speaker: "The Paraguayan",
                type: "choice",
                text: "The clash is out in the open, exposing the deep socioeconomic divide between your lifestyles. How do you direct this heated debate?",
                choices: [
                    {
                        text: "Escalate the rift: Acknowledge that your differences are irreconcilable",
                        consequence: "I realized we couldn't bridge this. Our national identities and privileges had solidified over the decade. We are no longer friends; we are players on opposite sides of a global system.",
                        targetSceneIndex: 17
                    },
                    {
                        text: "Bridge the gap: Try to find mutual understanding despite the privilege",
                        consequence: "I asked them to stop arguing. We cannot erase our differences, but we can acknowledge them and listen. We owe it to the semester that shaped us to try to understand each other's burdens.",
                        targetSceneIndex: 18
                    }
                ]
            },

            // ==========================================
            // BRANCH 2: Local Sacrifice (Indices 9-12)
            // ==========================================
            // Index 9
            {
                speaker: "The Taiwanese",
                text: "None of you understand the stress. The fighter jets are flying closer every month, and the West just demands more production. I spend my life in a cleanroom suit so you can stream your music and run your digital companies!"
            },
            // Index 10
            {
                speaker: "The Paraguayan",
                text: "It is true. The West treats Hsinchu like a technology gas station. They don't care about the safety or the people here, as long as the shipping containers of chips keep arriving on schedule."
            },
            // Index 11
            {
                speaker: "The German",
                text: "I respect that work ethic – that's why I stayed and built my business here! I pay local taxes, I hire local engineers. I didn't run back to the safety of Germany. I am participating in this drive, not just consuming it!"
            },
            // Index 12 (CHOICE 2.1)
            {
                speaker: "The French Girl",
                text: "She looks at the table, her voice trembling. The divide between creator and consumer is clear. How do you resolve this confrontation?",
                choices: [
                    {
                        text: "Confront the exploitation: Validate the Taiwanese engineer's anger",
                        consequence: "I spoke up for the Taiwanese. We must stop pretending this technology boom is a shared victory. It is built on asymmetric sacrifice. We are enjoying the fruits of a machine she is locked inside.",
                        targetSceneIndex: 17
                    },
                    {
                        text: "Stress mutual dependence: Argue that your paths are interconnected",
                        consequence: "I argued that our paths, though unequal, are bound together. The German's business, the French girl's art, and the Taiwanese engineer's chips are all parts of the same global network. We need to support each other.",
                        targetSceneIndex: 18
                    }
                ]
            },

            // ==========================================
            // BRANCH 3: Nostalgia / Defusing (Indices 13-16)
            // ==========================================
            // Index 13
            {
                speaker: "The Paraguayan",
                text: "Guys, remember the stinky tofu at Miaoli? Or the chaotic scooter rides into the mountains? We weren't debating supply chains back then. We were just four classmates sitting on a night market curb."
            },
            // Index 14
            {
                speaker: "The French Girl",
                text: "Yes, but we were young and ignorant. We didn't see the Cleanroom suits or the migrant worker dorms. Our innocence was just blindness. Our friendship was easy because we didn't ask hard questions."
            },
            // Index 15
            {
                speaker: "The Taiwanese",
                text: "I saw it. I knew my father was working three jobs while you guys were planning beach trips to the Philippines. I kept quiet because I wanted to feel normal, just for a semester. I wanted to pretend I was free like you."
            },
            // Index 16 (CHOICE 3.1)
            {
                speaker: "The German",
                text: "He looks down, the silence heavy with the realization of our past ignorance. How do you address this hidden history?",
                choices: [
                    {
                        text: "Acknowledge the class division: Accept that the illusion has shattered",
                        consequence: "I admitted that our past friendship was built on an illusion. The class differences we ignored back then have now fully defined our adult lives. The innocence is gone, and we cannot go back.",
                        targetSceneIndex: 17
                    },
                    {
                        text: "Apologize and rebuild: Forge a new friendship based on honesty",
                        consequence: "I apologized for our past blindness. But I argued that our connection doesn't have to end. Now that we see the truth, we can build a real friendship, one that acknowledges our different realities.",
                        targetSceneIndex: 18
                    }
                ]
            },

            // ==========================================
            // OUTCOME ENDINGS (Indices 17-19)
            // ==========================================
            // Index 17: Geopolitical Rift Ending
            {
                speaker: "The Reunion — A Bar in Hsinchu",
                text: "We finish our beers in tense silence. The cicadas outside sound like a countdown. We pay the bill separately, shaking hands with a polite, professional distance. The semester is a ghost, and we are strangers now, divided by the global machinery of our time.",
                nextSceneIndex: 19
            },
            // Index 18: Shared Rhythm Ending
            {
                speaker: "The Reunion — A Bar in Hsinchu",
                text: "We clink our glasses. The tension dissolves into a quiet, mutual respect. We are different, yes, and we carry unequal burdens. But for one hot semester, we shared the same rhythm. We promise to keep in touch and support each other.",
                nextSceneIndex: 19
            },
            // Index 19: End Screen
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
let consequenceRedirectIndex = null; // Branching finale helper

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
