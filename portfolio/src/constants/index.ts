import type { NavLink, WordItem, CounterItem, LogoIcon, Ability, TechStackImg, TechStackIcon, ExpCard, ExpLogo, Testimonial, SocialLink } from "../types";

const NAV_LINKS: NavLink[] = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const WORDS: WordItem[] = [
    { text: "Interfaces", imagePath: "/images/interfaces.svg" },
    { text: "Backends", imagePath: "/images/backends.svg" },
    { text: "Pipelines", imagePath: "/images/pipelines.svg" },
    { text: "Prompts", imagePath: "/images/prompts.svg" },
    { text: "Dashboards", imagePath: "/images/dashboards.svg" },
    { text: "Scrapers", imagePath: "/images/scrapers.svg" },
    { text: "Systems", imagePath: "/images/systems.svg" },
    { text: "Automation", imagePath: "/images/automation.svg" },
];

const COUNTER_ITEMS: CounterItem[] = [
    { value: 1, suffix: "+", label: "Years of Experience" },
    { value: 3, suffix: "+", label: "Personal Projects" },
    { value: 2, suffix: "", label: "Internships" },
    { value: 100, suffix: "%", label: "Commitment to Learning" },
];

const LOGO_ICONS_LIST: LogoIcon[] = [
    {
        imagePath: "/images/logos/company-logo-1.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-2.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-3.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-4.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-5.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-6.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-7.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-8.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-9.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-10.png",
        name: "lorem",
    },
    {
        imagePath: "/images/logos/company-logo-11.png",
        name: "lorem",
    },
];

const ABILITIES: Ability[] = [
    {
        imagePath: "/images/frontend-dev.png",
        title: "Pixel-Perfect Development",
        desc: "Skilled in translating Figma prototypes into responsive UIs using HTML, CSS, React, and Tailwind CSS—ensuring every detail matches the design.",
    },
    {
        imagePath: "/images/api-integration.png",
        title: "Robust Backend Integration",
        desc: "Experienced with Node.js, Express, and MongoDB to build scalable APIs and integrate real-time features like messaging, notifications, and media streaming.",
    },
    {
        imagePath: "/images/data-ai.png",
        title: "Data & AI Savvy",
        desc: "From building scrapers and pipelines to crafting effective prompts, I leverage Python, async tools, and AI foundations to deliver intelligent automation.",
    },
];

const TECH_STACK_IMGS: TechStackImg[] = [
    {
        name: "React Developer",
        imagePath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imagePath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imagePath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imagePath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imagePath: "/images/logos/git.svg",
    },
];

const TECH_STACK_ICONS: TechStackIcon[] = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const EXP_CARDS: ExpCard[] = [
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imagePath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore.",
            "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
    },
    {
        review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imagePath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer",
        date: "June 2020 - December 2023",
        responsibilities: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore.",
            "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
    },
    {
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        imagePath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "React Native Developer",
        date: "March 2019 - May 2020",
        responsibilities: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Sed do eiusmod tempor incididunt ut labore et dolore.",
            "Ut enim ad minim veniam, quis nostrud exercitation.",
        ],
    },
];

const EXP_LOGOS: ExpLogo[] = [
    {
        name: "logo1",
        imagePath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imagePath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imagePath: "/images/logo3.png",
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imagePath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imagePath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        imagePath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        imagePath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        imagePath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
        imagePath: "/images/client6.png",
    },
];

const SOCIAL_IMGS: SocialLink[] = [
    {
        name: "insta",
        url: "https://www.instagram.com/",
        imagePath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imagePath: "/images/fb.png",
    },
    {
        name: "x",
        url: "https://www.x.com/",
        imagePath: "/images/x.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/",
        imagePath: "/images/linkedin.png",
    },
];

const DEFAULT_PROJECTS = [
    {
        id: "recial",
        title: "Recial",
        description: "Recial is a social network for environmental collaboration, built with a scalable backend using Express.js and Mongoose. It features a real-time feed with ReactJS, Redux, and SWR for instant content updates. I implemented secure authentication via NextAuth and JWT, and integrated Firebase for video upload and streaming. Real-time messaging and notifications were enabled using WebSockets and Node.js.",
        imagePath: "/images/project1.png",
    },
    {
        id: "storysells",
        title: "Storysells",
        description: "An e-commerce web app for books, featuring an optimized MongoDB query structure for fast search results and a mobile-responsive UI. Developed the shopping cart and user flow with React, styled it with vanilla CSS and Tailwind, and built backend logic with Node.js and Express.",
        imagePath: "/images/project2.png",
        bgColor: "bg-accent/50",
    },
    {
        id: "media-crawler",
        title: "Media Crawler",
        description: "A Python-based asynchronous web scraper designed to extract images, audio, and video content. Implemented a depth-based filtering system, session-based cache with auto-cleanup, and a REST API using Flask that supports media search, metadata viewing, and direct downloads.",
        imagePath: "/images/project3.png",
        bgColor: "bg-warning-dark/50",
    },
];

export { WORDS, ABILITIES, LOGO_ICONS_LIST, COUNTER_ITEMS, EXP_CARDS, EXP_LOGOS, TESTIMONIALS, SOCIAL_IMGS, TECH_STACK_ICONS, TECH_STACK_IMGS, NAV_LINKS, DEFAULT_PROJECTS };