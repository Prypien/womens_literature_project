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
            name: "The Fox",
            portrait: "🇫🇷",
            role: "Artist & Singer",
            bgClass: "bg-french-glow",
            audioTrack: "french",
            scenes: [
                {
                    speaker: "The Fox",
                    text: "My band was touring across Asia, and I had noticed the invitation to the event buried among my emails. I had started singing professionally seven years earlier, but my career had not exactly taken off at first ; things had changed only recently when our band gained unexpected popularity after composing the soundtrack for a successful film. I was on tour with my group as a singer, and I was certainly not the kind of alumnus NYCU had in mind when organizing this congress. Still, I decided to attend the event."
                },
                {
                    speaker: "The Fox",
                    text: "The conference I attended focused on the role of semiconductors in Taiwan and the world. It was a topic that this university had taught me a great deal about ten years ago. During my time there, I had taken a class exploring the complexity of global supply chains through geopolitics. One visit with this class, in particular, left a lasting impression on me. It was a Monday, but just a few days earlier, I had spent the weekend in the Philippines."
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
                            image: "pictures/french_coconut.jpg",
                            title: "The Coconut Beach",
                            analysis: "Memory:\n»I had been lying on a beach, my feet in the sand, the sun warming my skin, and a coconut in my hand.«\n\nReflection:\nAnd back at school, I visited an agency for Filipino migrant workers in Hsinchu with my teacher. They had left their country to work for major electronics and semiconductor companies. Many had not seen their families for several years and sent nearly everything they earned back home. They shared a single dormitory room for 12 people and had no privacy or intimacy. I remember how small I felt. They were sacrificing their lives for their families, while I had been lying on a beach in their country just days before. And being in Taiwan, we certainly did not have the same experience of the country."
                        },
                        {
                            id: "smartphone",
                            x: "70%",
                            y: "45%",
                            icon: "📱",
                            title: "The Smartphone",
                            analysis: "Memory:\n»The course was about the inequalities embedded in globalization mechanisms and about the tiny components in our phones that circulate across all these countries.«\n\nReflection:\nAnd as a European who could afford the latest iPhone, I was part of that system. I was benefiting from it because I was born on the “right” side of the world."
                        }
                    ]
                },
                {
                    speaker: "The Fox",
                    text: "But what could I do? I did not have an answer at the time, and I did not throw away my phone. I still have not done it ; I can feel it in my pocket right now. So what did I learn? Well, I decided not to work for big companies, and I am an artist now."
                }
            ]
        },

        german: {
            name: "The Wolf",
            portrait: "🇩🇪",
            role: "IT Entrepreneur",
            bgClass: "bg-german-glow",
            audioTrack: "german",
            scenes: [
                {
                    speaker: "The Wolf",
                    text: "Ten years ago, I came to NYCU to study computer science. Today, I have my own companies running different businesses in Taiwan. I did not become what German society expected me to be: successful, secure, moving within the wealthy circles of Western Europe. Yet, returning to the Guangfu campus for this alumni congress feels less like a celebration and more like an audit of an unearned heritage. I walk through the air-conditioned halls of NYCU, carrying the invisible weight of a passport and a skin color that still open doors worldwide, doors I am no longer sure my generation has the strength to build ourselves."
                },
                {
                    speaker: "The Wolf",
                    text: "I stand by the large glass facade of the auditorium, looking out into the shimmering, oppressive June heat. On stage, a panel discusses the shifting economic gravity from the West to Asia. Nearby, a delegation of recently arrived German exchange students is gathering. They look noticeably out of place, sluggish, carrying the physical weight of a culture back home that has grown comfortable and soft, their conversation lacking the sharp focus of the local students around them. They talk loudly, yet they seem disoriented in this hyper-modern, digital hub."
                },
                {
                    speaker: "The Wolf",
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
                    speaker: "The Wolf",
                    text: "A sudden, rhythmic notification melody chimes from my phone, a soundtrack cue sent by my lead developer. The memory fades, and I am back in the air-conditioned hall of the congress. I look over at the young German student one last time. He is still staring out at the track, the illusion of his privilege visibly cracking."
                },
                {
                    speaker: "The Wolf",
                    text: "I smile softly, step away from the glass, and walk back into the crowd. I am no longer a ghost of a fading West; I am exactly where I belong, creating something that matters."
                }
            ]
        },

        taiwanese: {
            name: "The Bear",
            portrait: "🇹🇼",
            role: "Semiconductor Engineer",
            bgClass: "bg-taiwanese-glow",
            audioTrack: "taiwanese",
            scenes: [
                {
                    speaker: "The Bear",
                    text: "I stayed in Hsinchu after graduation, taking a path not much different from that of my peers. Since stepping into NYCU, my future seemed to be set. Like everyone else, I worked for a master's degree and applied for a decent job in the Hsinchu Science Park. It was the most ordinary path an EE major could take. And though I was not a fan of conferences, since many of my acquaintances were attending, I decided I should go as well, given how close it was to campus."
                },
                {
                    speaker: "The Bear",
                    text: "The conference was about the role of semiconductors in Taiwan and the world, which had everything to do my job—or rather, my life ever since starting college. The topic was so entirely predictable it was almost boring. It’s not that I hate my job, but I couldn’t help but wonder how things might have been different."
                },
                {
                    speaker: "Exploration",
                    type: "point_and_click",
                    text: "Search the room for objects that recall your hidden interests and the choices you made.",
                    items: [
                        {
                            id: "teachers-book",
                            x: "40%",
                            y: "55%",
                            icon: "📖",
                            title: "Teacher's Book",
                            analysis: "Memory:\n»I thought of my writing teacher and that book of hers she handed me, long ago. I wonder how it would have felt to be her, changing paths from engineering to literature in college. When reading that book, I could smell the bitter yet floral taste of the tea she wrote, as if she had carved down the aroma with her pencil, and it made me sober.«\n\nReflection:\nI couldn’t help but think back to my choices. What if I had chosen what I was most interested in? She had already chosen what she would, when she was in my place. If she were at this conference now, she would have enjoyed listening to stories from different walks of life. If I had made a different choice back then, maybe I would have, too."
                        },
                        {
                            id: "pencil",
                            x: "60%",
                            y: "45%",
                            icon: "✏️",
                            title: "The Drafting Pencil",
                            analysis: "Memory:\n»My pencil stays only as a pencil. Back in school, I wrote down equations. I wrote schematics. I drew art, but then erased them. But what if I hadn’t? What if I had been braver, what if I hadn't gone with the flow, what if I had ignored the fact that I had no talent and went after what I loved?«\n\nReflection:\nThough there’s always that pencil sketching out dreams in my head, dreams that I always claim never existed. I let that pencil cross them out again and again, but what’s there will always be there. Sometimes I wonder if it’s really worth it, living this way."
                        }
                    ]
                },
                {
                    speaker: "The Bear",
                    text: "But here I am. My thoughts are always in vain, and I’m never brave enough for change. Maybe I get paid more now. Maybe people look up to me more. It’s busy, but it’s not a bad life. Though there’s always that pencil sketching out dreams in my head, dreams that I always claim never existed. I let that pencil cross them out again and again, but what’s there will always be there."
                },
                {
                    speaker: "The Bear",
                    text: "Sometimes I wonder if it’s really worth it, living this way. However, as of now, I’m still here. My life as an engineer will continue for the time being."
                }
            ]
        },

        south_american: {
            name: "The Cheetah",
            portrait: "🇵🇾",
            role: "Civil Engineer",
            bgClass: "bg-southamerican-glow",
            audioTrack: "south_american",
            scenes: [
                {
                    speaker: "The Cheetah",
                    text: "I had not planned to attend the congress. Ten years had passed since I graduated from NYCU, and life had taken me far away from Taiwan. After finishing my studies, I returned to Paraguay and founded my own civil engineering company. At first, it was just a small office with a few employees and a handful of local projects. But over the years, the company grew. We designed roads, bridges, water infrastructure, and housing developments across the country. Recently, I began exploring opportunities abroad, and Taiwan was the first place that came to mind. So when I received the invitation to the alumni congress, I decided it was time to return."
                },
                {
                    speaker: "The Cheetah",
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
                    speaker: "The Cheetah",
                    text: "As my company expanded, I started working with international partners. I realized that infrastructure projects are no longer purely local. The materials, technologies, and expertise often come from different countries. Globalization is not only about products moving across borders; it is also about ideas and people doing the same. My years in Taiwan showed me that collaboration across cultures creates stronger solutions than any country could achieve alone."
                },
                {
                    speaker: "The Cheetah",
                    text: "That is why I returned. Not only to reconnect with old friends, but also because I want to establish a branch of my company in Taiwan. Ten years ago, I arrived here as a foreign student searching for opportunities. Today, I have come back hoping to create them."
                },
                {
                    speaker: "The Cheetah",
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
            // Index 0: Congress Keynote Presentation
            {
                speaker: "National Auditorium — NYCU",
                text: "The keynote presentation is underway. The slides display maps of global chip manufacturing, showing Taiwan at the center of the silicon shield. The four of them sit scattered in the audience, lost in their own thoughts..."
            },
            // Index 1: French Girl Inner Monologue (Now The Fox)
            {
                speaker: "The Fox (Inner Monologue)",
                text: "I look at the neat blue lines of the supply chain maps. They look so clean, so abstract. But under those lines are the Filipino workers in Hsinchu's dorms, sharing a single room of 12 people. We talk about high-tech sovereignty, but we hide the human cost behind corporate branding..."
            },
            // Index 2: German Inner Monologue (Now The Wolf)
            {
                speaker: "The Wolf (Inner Monologue)",
                text: "The speaker talks about the shift of economic power. My eyes wander to the local students taking meticulous notes. They want to build, to create. Back home, my peers spend their days complaining about comfort. Here, the future is written by those who actually run the track at night. I am glad I stayed..."
            },
            // Index 3: Taiwanese Inner Monologue (Now The Bear)
            {
                speaker: "The Bear (Inner Monologue)",
                text: "Predictable. The silicon shield, the EE master's degrees, the Hsinchu Science Park... it is my entire life. The topic is so entirely predictable it is almost boring. I think of my literature teacher's book. What if I had been braver? What if I had chased what I loved? I drew art but erased it all to write schematics. Sometimes I feel like a cog in a machine whose survival depends on my burnout..."
            },
            // Index 4: Paraguayan Inner Monologue (Now The Cheetah)
            {
                speaker: "The Cheetah (Inner Monologue)",
                text: "Looking at the engineering project blueprints, I see structures. But NYCU taught me that the hardest structures to build are human connections. Tereré cup by tereré cup, we bridged our differences ten years ago. Now we represent different worlds. Can we still build a bridge tonight?"
            },
            // Index 5: Transition to the Bar
            {
                speaker: "The Reunion — A Bar in Hsinchu",
                text: "Later that evening. The noise of the congress has faded. The four of them sit in a small, dark bar in a side alley near East Gate in Hsinchu. On the table are cold Taiwan Beer, Oolong tea, and empanadas brought by the Cheetah."
            },
            // Index 6: Bar Reunion Intro
            {
                speaker: "The Reunion",
                text: "Ten years have passed. The class and economic differences are obvious. The air is thick with unresolved questions. You decide to address them directly by asking a question."
            },
            // Index 7: Choice: Whom to Ask?
            {
                speaker: "The Reunion",
                type: "choice",
                text: "Who do you want to ask a question to?",
                choices: [
                    {
                        text: "Ask The Cheetah about his return to Taiwan and infrastructure projects.",
                        consequence: "You turn to the Cheetah to ask about his engineering company.",
                        targetSceneIndex: 8
                    },
                    {
                        text: "Ask The Fox about her world tour and critique of capitalism.",
                        consequence: "You turn to the Fox to ask about her songs and social critiques.",
                        targetSceneIndex: 13
                    },
                    {
                        text: "Ask The Wolf about his IT business and Hsinchu's work ethic.",
                        consequence: "You turn to the Wolf to ask about his startup and drive.",
                        targetSceneIndex: 18
                    },
                    {
                        text: "Ask The Bear about her exhaustion and life under the silicon shield.",
                        consequence: "You turn to the Bear to ask about her work and sketches.",
                        targetSceneIndex: 23
                    }
                ]
            },
            // ==================== BRANCH 1: THE CHEETAH ====================
            // Index 8: Cheetah Question
            {
                speaker: "You",
                text: "You ask the Cheetah: 'Your company builds bridges and infrastructure. Do you think that the human connections we built as classmates ten years ago can still bridge our different worlds today?'"
            },
            // Index 9: Cheetah Response
            {
                speaker: "The Cheetah",
                text: "He smiles warmly, raising his glass. 'I believe they can. Look at us—we are from completely different continents, yet we are here. The connections are real. Remember our chaotic scooter trips?'"
            },
            // Index 10: Fox Chimes In
            {
                speaker: "The Fox",
                text: "She shakes her head. 'It's a nice thought, Cheetah. But even our nostalgia is a privilege. Your bridges are built in a system of massive inequality. The Wolf's tech empire runs on exploitation of migrant workers. We are not just classmates anymore; we represent different sides of a global system.'"
            },
            // Index 11: Wolf Chimes In
            {
                speaker: "The Wolf",
                text: "He scoffs. 'And your art tours run on that same tech, Fox. This constant moralizing is exhausting. Cheetah is actually building structures, not just writing songs about them.'"
            },
            // Index 12: Choice: Cheetah's 4 Answers
            {
                speaker: "The Climax of the Discussion",
                type: "choice",
                text: "The debate about Cheetah's connections and infrastructure is heating up. How do you respond?",
                choices: [
                    {
                        text: "De-escalate: 'Let's honor Cheetah's perspective. We all carried different weights, but we shared a genuine connection that can rise above global systems.'",
                        consequence: "You speak words of peace and call for mutual respect.",
                        points: 2,
                        targetSceneIndex: 28
                    },
                    {
                        text: "Neutral: 'Both sides have a point. We are part of the system, but we can still choose how we relate to each other as individuals.'",
                        consequence: "You offer a balanced perspective on individual vs system responsibility.",
                        points: 1,
                        targetSceneIndex: 29
                    },
                    {
                        text: "Strained: 'The Wolf is right about practicality, but the Fox is right about the cost. We cannot ignore how much our paths have diverged.'",
                        consequence: "You acknowledge the gap between their different realities.",
                        points: 0,
                        targetSceneIndex: 30
                    },
                    {
                        text: "Escalate: 'It is hypocrisy to talk about bridges when your company benefits from the unequal geopolitical status quo.'",
                        consequence: "You point out the structural inequality of Cheetah's business.",
                        points: -1,
                        targetSceneIndex: 31
                    }
                ]
            },
            // ==================== BRANCH 2: THE FOX ====================
            // Index 13: Fox Question
            {
                speaker: "You",
                text: "You ask the Fox: 'You sing about human rights and critique high-tech capitalism. How do you cope with the feeling of being complicit in the very system you criticize?'"
            },
            // Index 14: Fox Response
            {
                speaker: "The Fox",
                text: "She sighs, looking down. 'It's a heavy weight. I know my phone and my tours rely on these supply chains. I write songs to process that guilt and make sure the human cost isn't forgotten. It's my way of resisting.'"
            },
            // Index 15: Wolf Chimes In
            {
                speaker: "The Wolf",
                text: "He smiles cynically. 'Resisting? You consume the benefits and ease your conscience with art. Your moral guilt is a luxury paid for by the people who actually work. It's a savior complex.'"
            },
            // Index 16: Bear Chimes In
            {
                speaker: "The Bear",
                text: "She looks up quietly. 'You talk about my life as a debate. For me, the cleanroom pressure is not an artistic critique. It is daily survival. We don't have the luxury of Western guilt.'"
            },
            // Index 17: Choice: Fox's 4 Answers
            {
                speaker: "The Climax of the Discussion",
                type: "choice",
                text: "The debate about the Fox's complicity and Western guilt is heating up. How do you respond?",
                choices: [
                    {
                        text: "De-escalate: 'It's not about guilt, but about caring. The Fox's empathy is genuine, and the Bear's reality is heavy. Let's support each other instead of pointing fingers.'",
                        consequence: "You validate both Fox's empathy and Bear's struggle.",
                        points: 2,
                        targetSceneIndex: 28
                    },
                    {
                        text: "Neutral: 'It is a complex paradox. We are all complicit to some degree, and acknowledging it is the first step toward understanding.'",
                        consequence: "You offer a reflective view on the shared paradox of modern life.",
                        points: 1,
                        targetSceneIndex: 29
                    },
                    {
                        text: "Strained: 'The Wolf has a point about practicality, but the Bear's struggle shows that artistic critiques are often disconnected from real survival.'",
                        consequence: "You highlight the divide between artistic theory and daily survival.",
                        points: 0,
                        targetSceneIndex: 30
                    },
                    {
                        text: "Escalate: 'The Fox's critique is just performative activism. It does nothing to change the hard reality of the workers she sings about.'",
                        consequence: "You directly accuse the Fox of empty performance.",
                        points: -1,
                        targetSceneIndex: 31
                    }
                ]
            },
            // ==================== BRANCH 3: THE WOLF ====================
            // Index 18: Wolf Question
            {
                speaker: "You",
                text: "You ask the Wolf: 'You praise Hsinchu's relentless work ethic and startup culture. Do you feel a sense of responsibility to the community that welcomed you, or is it just about profit?'"
            },
            // Index 19: Wolf Response
            {
                speaker: "The Wolf",
                text: "He sits up straight. 'I stayed because I wanted to build, not just inherit comfort. My business creates value and jobs. That is my responsibility. Hard work is the only shield this island has.'"
            },
            // Index 20: Fox Chimes In
            {
                speaker: "The Fox",
                text: "'You call it a shield, Wolf, but you're not the one standing in the cleanroom,' Fox retorts. 'You've commodified their survival drive to feed your startup. It's exploitation repackaged as merit.'"
            },
            // Index 21: Cheetah Chimes In
            {
                speaker: "The Cheetah",
                text: "He raises a hand. 'Let's be fair. Building a company is hard. I built mine from scratch in Paraguay. But we must also remember where we came from and the privileges we had.'"
            },
            // Index 22: Choice: Wolf's 4 Answers
            {
                speaker: "The Climax of the Discussion",
                type: "choice",
                text: "The debate about the Wolf's business and Hsinchu's work ethic is heating up. How do you respond?",
                choices: [
                    {
                        text: "De-escalate: 'Creating value and hard work are respectable, just like Cheetah's effort. Let's appreciate that we all tried to build something in our own ways.'",
                        consequence: "You highlight the value of both their hard work and entrepreneurial efforts.",
                        points: 2,
                        targetSceneIndex: 28
                    },
                    {
                        text: "Neutral: 'It is a double-edged sword. Entrepreneurship drives progress, but we must stay mindful of the human cost.'",
                        consequence: "You weigh progress against the human cost of startup culture.",
                        points: 1,
                        targetSceneIndex: 29
                    },
                    {
                        text: "Strained: 'The Fox is right that the system is harsh, but without business builders like the Wolf, there would be no resources to debate about.'",
                        consequence: "You choose practicality over moral critiques.",
                        points: 0,
                        targetSceneIndex: 30
                    },
                    {
                        text: "Escalate: 'The Wolf's success is built on a toxic grind that exploits local burnout while keeping his own exit options open.'",
                        consequence: "You critique the Wolf's privilege and his startup model.",
                        points: -1,
                        targetSceneIndex: 31
                    }
                ]
            },
            // ==================== BRANCH 4: THE BEAR ====================
            // Index 23: Bear Question
            {
                speaker: "You",
                text: "You ask the Bear: 'You carry a massive burden for your family and country in the semiconductor industry. I remember the sketches you used to draw. Are you still chasing your art dreams?'"
            },
            // Index 24: Bear Response
            {
                speaker: "The Bear",
                text: "She smiles faintly, eyes softening. 'Only in the margins of my notebooks. The silicon shield is what keeps my home safe, so I work. It is exhausting, but it is my duty.'"
            },
            // Index 25: Fox Chimes In
            {
                speaker: "The Fox",
                text: "'It shouldn't be your duty to burn out for global supply chains,' Fox says gently. 'You shouldn't have to erase your dreams to write schematics. The pressure is too high.'"
            },
            // Index 26: Wolf Chimes In
            {
                speaker: "The Wolf",
                text: "He shakes his head. 'That's naive, Fox. Without the semiconductor industry, Taiwan wouldn't have its silicon shield. Her work is vital. It's about survival, not just personal dreams.'"
            },
            // Index 27: Choice: Bear's 4 Answers
            {
                speaker: "The Climax of the Discussion",
                type: "choice",
                text: "The debate about the Bear's dreams, duty, and the silicon shield is heating up. How do you respond?",
                choices: [
                    {
                        text: "De-escalate: 'The Bear's dedication is heroic, but her dreams still matter. Let's raise a glass to her sketches and to finding balance amidst the heavy pressure.'",
                        consequence: "You honor her dedication and toast to her artistic dreams.",
                        points: 2,
                        targetSceneIndex: 28
                    },
                    {
                        text: "Neutral: 'It is a heavy reality. Balancing national security, family duty, and personal dreams is a lifelong struggle.'",
                        consequence: "You recognize the immense difficulty of her path.",
                        points: 1,
                        targetSceneIndex: 29
                    },
                    {
                        text: "Strained: 'The Wolf is correct about the harsh geopolitical reality, even if it means personal dreams must be put on hold.'",
                        consequence: "You agree that geopolitical survival must come before personal aspirations.",
                        points: 0,
                        targetSceneIndex: 30
                    },
                    {
                        text: "Escalate: 'The system is forcing her to burn out for corporate profits under the guise of duty, and it's tragic that she accepts it.'",
                        consequence: "You critique the societal system and the Bear's acceptance of it.",
                        points: -1,
                        targetSceneIndex: 31
                    }
                ]
            },
            // ==================== ENDINGS ====================
            // Index 28: Ending D: The Shared Rhythm
            {
                speaker: "Ending: The Shared Rhythm",
                text: "Your words bring a warm, unifying calm to the table. The tension dissolves into a soft, shared laugh. You all raise your glasses. 'We carry unequal weights,' Cheetah says, 'but ten years ago we shared the same tracks and same dreams.' You promise to support each other, honoring your bond above all.",
                nextSceneIndex: 32
            },
            // Index 29: Ending C: Pragmatic Acceptance
            {
                speaker: "Ending: Pragmatic Acceptance",
                text: "Your neutral, balanced stance brings a mature calm to the table. 'We live in different worlds now,' Fox says, 'but we can still respect each other's paths.' You pay the bill together. There is no fake nostalgia, but a realistic, respectful acceptance of who you all have become.",
                nextSceneIndex: 32
            },
            // Index 30: Ending B: Uneasy Truce
            {
                speaker: "Ending: Uneasy Truce",
                text: "Your response cools the conversation, but the warmth does not return. You finish your drinks in polite, strained silence. You pay the bill separately. Handshakes are brief and professional. You part realizing that you have grown too far apart to ever be close friends again.",
                nextSceneIndex: 32
            },
            // Index 31: Ending A: The Burning Bridge
            {
                speaker: "Ending: The Burning Bridge",
                text: "Your provocative stance pushes the argument over the edge. 'You understand nothing!' Fox shouts, while the Bear stands up, eyes filled with tears. The bill is paid in tense, angry silence. No handshakes, no goodbyes. The group walks away in separate directions. The bridge is completely burnt.",
                nextSceneIndex: 32
            },
            // Index 32: End Screen
            {
                speaker: "The End",
                text: "Thank you for playing the revised Finale! Your final choices determined the outcome: {score} points.<br><br>This visual novel explores how differing socioeconomic realities, national security pressures, and privileges shape our lives — even for those who once shared the same university halls."
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
        finaleScore = 0; // Reset score
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
        if (currentSceneIndex === 32) {
            scene = {
                ...scene,
                text: scene.text.replace("{score}", finaleScore)
            };
        }
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
    
    if (opt.points !== undefined) {
        finaleScore = opt.points;
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
