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
  images?: {
    src: string;
    alt: string;
    description?: string;
  }[];
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
  slug: "movea-mobility",
  title: "Movea – Autonomous Mobility Concept",
  subtitle: "Service design & UX concept for autonomous transport in Munich",
  short:
    "Service design project exploring autonomous mobility and public transport through user research, interviews, and prototyping.",

  description:
    "Movea is a service design project exploring how autonomous mobility systems can be integrated with public transport in Munich. The goal was to design a seamless and user-centered mobility experience that combines autonomous rides with existing public transport. The process was grounded in qualitative user research, including interviews and cultural probes to understand mobility habits, expectations, and concerns. Key insights highlighted the importance of trust, transparency, flexibility, and clear system understanding when interacting with autonomous transport. Based on these findings, a holistic service concept was developed, mapping the full user journey – from planning a trip to completing it. The solution includes an app interface that allows users to choose between autonomous direct rides and connections with public transport, while maintaining clarity and control throughout the experience. The interface focuses on intuitive route planning, real-time availability of autonomous vehicles, and a clear overview of different mobility options. The project demonstrates how future mobility systems can be designed as integrated, accessible services rather than isolated technologies.",

  tags: ["Service Design", "UX", "User Research", "Prototyping", "Mobility"],

  role: "Research, Concept & UX Design",

  tech: ["Figma"],
    links: [
    {
      label: "View Prototype",
      href: "https://www.figma.com/proto/xJ9j2bdGrtS0R3yCMgTsWo/Movea?page-id=0%3A1&node-id=13-170&p=f&viewport=115%2C297%2C0.1&t=7YyvV3OPqCeiwWJV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=13%3A165&show-proto-sidebar=1"
    }
  ],
  images: [
    {
      src: "/movea.png",
      alt: "Movea mobility app prototype",
      description: "Route planning interface with real-time availability of autonomous vehicles."
    },
    {
      src: "/movea2.png",
      alt: "Autonomous transport overview"
    }
  ],
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
  slug: "moosburg-website",
  title: "Moosburg Website Prototype",
  subtitle: "UX/UI concept for a modern city website",
  short:
    "UX/UI prototype for a citizen portal focused on transparent case management and intuitive user guidance.",
  description:
    "This project focused on developing a website prototype for the city of Moosburg, based on a real-world problem: inefficient and non-transparent communication between citizens and the city administration. The process was grounded in qualitative user research. Through interviews with potential users, key needs, expectations, and pain points in dealing with municipal services were identified. Transparency, ease of use, and clear status tracking emerged as central requirements. These insights informed the development of a holistic UX/UI concept covering the entire interaction flow – from submitting a request to tracking its progress, including map and data views. Particular attention was given to information architecture, intuitive navigation, and a clear, accessible interface. The project demonstrates how user research can directly shape digital services, resulting in more user-centered, transparent, and effective solutions.",
  tags: ["UX/UI","Figma","User Research", "Prototyping", "Web Design"],
  role: "Concept & Design",
  tech: ["Figma"],
  links: [
    {
      label: "View Prototype",
      href: "https://www.figma.com/proto/2jTmmi7xILB4wAKKTm0mYC/Prototyp_Moosburg?page-id=0%3A1&node-id=1-3&p=f&viewport=-419%2C412%2C0.1&t=6DXSMtV7Xils7Mzh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3"
    }
  ],
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
    "This project involved developing a notes web application with database connection, authentication, and basic user management. In addition to implementing core features such as creating, saving, and organizing notes, I focused on designing a clear and intuitive user interface that supports simple and efficient interaction. A key aspect of the project was the intentional integration of vulnerabilities, allowing students to analyze and exploit each other's applications in virtual environments. This provided hands-on insights into common security flaws and their real-world impact. Alongside the technical implementation, I worked on structuring the application and interaction flows to ensure usability and clarity, even in more complex scenarios like authentication and data handling.The project combines web development, security concepts, and user-centered design, highlighting the importance of building applications that are not only functional and secure, but also understandable and easy to use.",
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