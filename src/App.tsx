import React from "react";

import Hero from "./sections/Hero.tsx";
import Showcase from "./sections/Showcase.tsx";
import NavBar from "./components/NavBar.tsx";
import Logo from "./sections/Logo.tsx";
import Feature from "./sections/Feature.tsx";
import Experience from "./sections/Experience.tsx";

const App: React.FC = (): React.ReactElement => {
    return (
        <>
            <NavBar />
            <Hero />
            <Showcase />
            <Logo />
            <Feature />
            <Experience />
        </>
    );
};

export default App;
