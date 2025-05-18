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
    { text: "Ideas", imagePath: "/images/ideas.svg" },
    { text: "Concepts", imagePath: "/images/concepts.svg" },
    { text: "Designs", imagePath: "/images/designs.svg" },
    { text: "Code", imagePath: "/images/code.svg" },
    { text: "Ideas", imagePath: "/images/ideas.svg" },
    { text: "Concepts", imagePath: "/images/concepts.svg" },
    { text: "Designs", imagePath: "/images/designs.svg" },
    { text: "Code", imagePath: "/images/code.svg" },
];

const COUNTER_ITEMS: CounterItem[] = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const LOGO_ICONS_LIST: LogoIcon[] = [
    {
        imagePath: "/images/logos/company-logo-1.png",
    },
    {
        imagePath: "/images/logos/company-logo-2.png",
    },
    {
        imagePath: "/images/logos/company-logo-3.png",
    },
    {
        imagePath: "/images/logos/company-logo-4.png",
    },
    {
        imagePath: "/images/logos/company-logo-5.png",
    },
    {
        imagePath: "/images/logos/company-logo-6.png",
    },
    {
        imagePath: "/images/logos/company-logo-7.png",
    },
    {
        imagePath: "/images/logos/company-logo-8.png",
    },
    {
        imagePath: "/images/logos/company-logo-9.png",
    },
    {
        imagePath: "/images/logos/company-logo-10.png",
    },
    {
        imagePath: "/images/logos/company-logo-11.png",
    },
];

const ABILITIES: Ability[] = [
    {
        imagePath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        imagePath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        imagePath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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

export { WORDS, ABILITIES, LOGO_ICONS_LIST, COUNTER_ITEMS, EXP_CARDS, EXP_LOGOS, TESTIMONIALS, SOCIAL_IMGS, TECH_STACK_ICONS, TECH_STACK_IMGS, NAV_LINKS };