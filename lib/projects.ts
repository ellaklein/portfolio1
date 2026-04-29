export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  short: string;
  description: string;
  tags: string[];
  role?: string;
  tech?: string[];
  highlights?: string[];
  links?: { label: string; href: string }[];
  codeImage?: {
    src: string;
    alt: string;
    description?: string;
  };
};

export const projects: Project[] = [
  {
  slug: "oma-astra",
  title: "Oma Astra – Astrological Chatbot",
  subtitle: "Interactive chatbot focused on UX and personality",
  short:
    "Character-driven chatbot focused on dialogue design and user interaction.",
  description:
    "OmaAstra was developed in the first semester as a creative coding project with the goal of building a chatbot that goes beyond functionality by having a clear personality. The focus was on designing a consistent character (‘astrology grandma’) with a warm, humorous and empathetic tone.\n\nThe project emphasized dialogue structure, response logic and iterative prompt design. Besides technical aspects, user experience played a key role: how systems communicate, how conversations feel and how trust is created. The project combines technical thinking with storytelling and design decisions, serving as an introduction to interactive conversational systems.",
  tags: ["Chatbot", "UX", "UI", "Python", "Creative Coding"],
  role: "Concept, UX, Implementation",
  tech: ["Python"],
    codeImage: {
      src: "/oma-astra-code.png",
      alt: "Code snippet from OmaAstra – compatibility logic",
      description:
        "This snippet shows the compatibility logic where zodiac signs are mapped to elements and evaluated for harmony.",
    },
  },
  {
  slug: "hangman-webapp",
  title: "Hangman Webapp",
  subtitle: "Web game with Express, TypeScript & REST API",
  short:
    "Server-side web game with REST API, managing game state and structured architecture.",
  description:
    "The Hangman web app is a browser-based game with server-side logic and REST endpoints. In addition to implementing the technical architecture, a strong focus was placed on user interaction and interface clarity.\n\nThe application processes user input, validates it on the server, and returns structured responses via REST endpoints. Particular attention was given to how users understand the game state, receive feedback, and interact with the system. The project combines backend development with thoughtful interface design and user experience considerations.",
  tags: ["TypeScript", "Express", "REST", "Web"],
  role: "Fullstack Prototype",
  tech: ["TypeScript", "Express", "REST"],
    codeImage: {
      src: "/hangmanexpress.png",
      alt: "Screenshot of the Hangman web application",
      description:
        "Screenshot of the Hangman game interface showing the current game state and input logic.",
    },
  },
    {
  slug: "deadmans-hand",
  title: "Deadman’s Hand Poker Game",
  subtitle: "Interactive 3D game with Three.js",
  short:
    "Interactive 3D poker game with camera controls, animations, and an atmospheric focus.",
  description:
    "Deadman’s Hand was created as a group project with the aim of developing an interactive poker game in a 3D environment. The main focus was not only on the visual scene, but also on how users navigate and experience the interface.\n\nUsing Three.js, a complex 3D scene was built, combining multiple objects, lighting, and spatial composition. A key aspect was the design of camera control and interaction: users can zoom, rotate, and explore the environment intuitively. The project combines technical 3D development with interaction design, emphasizing usability, perspective, and immersive user experience.",
  tags: ["Three.js", "JavaScript", "3D", "Interaction Design"],
  role: "Creative Coding / 3D (Group project)",
  tech: ["Three.js", "JavaScript"],
  codeImage: {
    src: "/deadmanshand.png",
    alt: "Screenshot of Deadman’s Hand – 3D Poker",
    description:
      "Screenshot of the 3D game scene.",
  },
},
    {
  slug: "reifenmuell-typografie",
  title: "Typographic Art Collection",
  subtitle: "Typography & visual concept on the theme of waste",
  short:
    "Typographic series on waste focusing on tires and their aesthetic structures.",
  description:
    "In the Typography module (first semester), the task was to focus individually on a form of waste and develop a conceptual typographic work from it. I deliberately chose tire waste, as I was fascinated by the strong grooves, patterns, and structures of car tires.\n\nIn a series of ten works, I abstracted and interpreted these characteristic forms typographically. The goal was to translate the supposed ugliness of waste into an aesthetic visual language and simultaneously raise awareness of the environmental issue. The works were exhibited and demonstrate the connection between typography, concept, and visual design.",
  tags: ["Typography", "Concept", "Graphic Design", "Exhibition"],
  role: "Concept & Design",
  codeImage: {
    src: "/typo.jpg",
    alt: "Typographic work on the theme of tire waste",
    description:
        "Photo of part of my series on waste, shown during an exhibition at Munich University of Applied Sciences.",
    },
  },
  {
  slug: "se-grundlagen",
  title: "Software Engineering – Fundamentals & Module Project",
  subtitle: "OOP, Git workflow & teamwork",
  short:
    "Multiple practice projects and a module assignment focused on structured software development.",
  description:
    "The Software Engineering module covered fundamental concepts of software development through practical implementation. This included several small practice projects and a larger module project, each focusing on clean code, clear structure, and teamwork.\n\nProjects included an MP3 player with state-based logic and other applications such as Clothing Mate and a Uno game. The emphasis was on modeling classes appropriately, defining states clearly, and separating responsibilities in code.\n\nA key part of the work was learning to use Git: working with branches, merge requests, and a prescribed workflow to simulate realistic collaborative development. Most projects were implemented in Python and helped develop a basic understanding of software architecture, version control, and team collaboration.",
  tags: ["Python", "OOP", "Git", "Software Engineering"],
  role: "Development",
  tech: ["Python", "Git"],
  codeImage: {
    src: "/softwareeng.png",
    alt: "Code excerpt from the UNO game (main.py)",
    description:
      "The excerpt shows the entry point (main.py) of a Uno game with import of game and player classes, creation of the game instance, and the main game loop (playing rounds, checking for game end)."
  }
},
{
  slug: "moosburg-website",
  title: "Moosburg Website Prototype",
  subtitle: "UX/UI concept for a modern city website",
  short:
    "UX/UI prototype for a citizen portal focused on transparent case management and intuitive user guidance.",
  description:
    "This project involved developing a website prototype for the city of Moosburg, based on a real-world problem: cumbersome and non-transparent communication between citizens and city administration.\n\nThe foundation was qualitative interviews with potential users to identify needs, expectations, and challenges in dealing with municipal requests. Transparency, ease of use, and traceability of requests emerged as key requirements.\n\nBased on these findings, a holistic UX/UI concept was created to cover the entire process: from submitting a request to status tracking, as well as map and statistics views. Special focus was placed on clear information structure, intuitive navigation, and an understandable, accessible interface.\n\nThe project combines user research, conceptual thinking, and visual design, demonstrating how digital citizen services can be made more user-centered, transparent, and efficient.",
  tags: ["UX/UI","Figma","User Research", "Prototyping", "Web Design"],
  role: "Concept & Design",
  tech: ["Figma"],
  codeImage: {
    src: "/Moosburg.png",
    alt: "Website prototype for Moosburg",
    description:
      "Key screens of the user-centered website prototype for submitting and tracking citizen requests.",
  },
},
{
  slug: "notiz-webapp-security",
  title: "Notes Web App – Security Project",
  subtitle: "Web application with database, authentication, and intentionally built-in vulnerabilities",
  short:
    "Web app with database integration, login system, and deliberately integrated security flaws for analysis and practical attack simulation.",
  description:
    "This project involved developing a notes web application with database connection, login authentication, and basic user management. In addition to classic features like creating, saving, and managing notes, the main focus was on practical web security.\n\nA special aspect of the project was the intentional integration of vulnerabilities, allowing students to attack and analyze each other's applications in virtual machines. This enabled typical security flaws to be understood and exploited in practice, not just theory.\n\nThe project combined web development with security concepts, providing a better understanding of how attacks on web applications work, what risks arise from insecure implementations, and why security must be considered from the outset.",
  tags: ["Security", "Web", "Database", "Authentication", "VM"],
  role: "Concept & Implementation",
  tech: ["JavaScript", "Node.js", "Database"],
  codeImage: {
    src: "/scratchpadd.png",
    alt: "Screenshot of the Notes Web App",
    description:
      "The image shows the dashboard of the notes web application Scratchpad with activated dev demos highlighting intentionally integrated security vulnerabilities for testing and analysis.",
  },
  
},
{
  slug: "informationsdesign-diagramme",
  title: "Information Design – Interactive Data Visualization",
  subtitle: "Web application for analyzing personal photo data",
  short:
    "Interactive web app with charts for analyzing personal photo data by time, location, and usage.",
  description:
    "As part of the Information Design module, I developed a web application to analyze and visualize my personal photo data from 2025.\n\nThe project was based on my own photos, whose metadata—such as timestamps, GPS data, and color values—were evaluated. Several charts were created to provide different perspectives on the year, including time trends, geographic distributions, and visual patterns.\n\nSome of the visualizations are interactive, inviting users to explore the data themselves. The app is built as a scroll-based page, with content appearing step by step to create a visual narrative of the year.\n\nThe application is complemented by a monthly slideshow of selected images, making the data tangible and personal.\n\nThe project combines data, design, and interaction, showing how personal information can be translated into a clear and narrative form.",
  tags: ["Information Design", "Data Visualization", "Svelte", "JavaScript"],
  role: "Concept & Implementation",
  tech: ["Svelte", "JavaScript"],
  codeImage: {
    src: "/infodesign.png",
    alt: "Interactive charts of the web application",
    description:
      "Monthly slideshow at the end of the application; the map view with a selected location is visible at the top, and the footer at the bottom.",
  },
},
];