import React from "react";

import Hero from "./sections/Hero.tsx";
import Showcase from "./sections/Showcase.tsx";
import NavBar from "./components/NavBar.tsx";

const App = (): React.ReactElement => {
    return (
        <>
            <NavBar />
            <Hero />
            <Showcase />
        </>
    );
};

export default App;
