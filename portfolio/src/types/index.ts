// React specific types
import type { ReactNode } from "react";

export interface ReactComponentProps {
    children?: ReactNode;
}

// Navigation link type
export interface NavLink {
    name: string;
    link: string;
}

// Word item type for the hero section
export interface WordItem {
    text: string;
    imagePath: string;
}

// Counter item type
export interface CounterItem {
    value: number;
    suffix: string;
    label: string;
}

// Logo icon type
export interface LogoIcon {
    name: string;
    imagePath: string;
}

// Ability item type
export interface Ability {
    imagePath: string;
    title: string;
    desc: string;
}

// Tech stack image type
export interface TechStackImg {
    name: string;
    imagePath: string;
}

// Tech stack icon type with 3D model properties
export interface TechStackIcon {
    name: string;
    modelPath: string;
    scale: number;
    rotation: [number, number, number]; // Tuple for x, y, z rotation
}

// Experience card type
export interface ExpCard {
    review: string;
    imagePath: string;
    logoPath: string;
    title: string;
    date: string;
    responsibilities: string[];
}

// Experience logo type
export interface ExpLogo {
    name: string;
    imagePath: string;
}

// Testimonial type
export interface Testimonial {
    name: string;
    mentions: string;
    review: string;
    imagePath: string;
}

// Social media link type
export interface SocialLink {
    name: string;
    url: string;
    imagePath: string;
}

// Particle type for animation
export interface Particle {
    position: [number, number, number];
    speed: number;
}

// Button props type
export interface ButtonProps {
    id: string;
    text: string;
    className: string;
}