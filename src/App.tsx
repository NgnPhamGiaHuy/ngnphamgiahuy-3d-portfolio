import React from "react";

import Hero from "./sections/Hero.tsx";
import Showcase from "./sections/Showcase.tsx";

const App = (): React.ReactElement => {
    return (
        <>
            <Hero />
            <Showcase />
        </>
    );
};

export default App;
