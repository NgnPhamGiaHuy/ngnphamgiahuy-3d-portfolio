import React from "react";

import Hero from "./sections/Hero.tsx";
import Showcase from "./sections/Showcase.tsx";
import NavBar from "./components/NavBar.tsx";
import Logo from "./sections/Logo.tsx";
import Feature from "./sections/Feature.tsx";
import Experience from "./sections/Experience.tsx";
import TechStack from "./sections/TechStack.tsx";
import Testimonials from "./sections/Testimonials.tsx";
import Contact from "./sections/Contact.tsx";
import Footer from "./sections/Footer.tsx";

const App: React.FC = (): React.ReactElement => {
    return (
        <>
            <NavBar />
            <Hero />
            <Showcase />
            <Logo />
            <Feature />
            <Experience />
            <TechStack />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
