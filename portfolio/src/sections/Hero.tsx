import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { WORDS } from "../constants";
import Button from "../components/Button.tsx";
import AnimatedCounter from "../components/AnimatedCounter.tsx";
import HeroExperience from "../components/HeroModels/HeroExperience.tsx";

const Hero: React.FC = (): React.ReactElement => {
    useGSAP(() => {
        gsap.fromTo(".hero-text h1 span", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power2.inOut",
        })
    });

    return (
        <section id={"hero"} className={"relative overflow-hidden"}>
            <div className={"top-0 left-0 absolute z-10"}>
                <img src={"/images/bg.png"} alt={"background"} />
            </div>
            <div className={"hero-layout"}>
                <header className={"md:w-full w-screen md:px-44 px-5 flex flex-col justify-center"}>
                    <div className={"flex flex-col gap-7"}>
                        <div className={"hero-text"}>
                            <h1>
                                <span>
                                    Shaping
                                </span>
                                <div className={"slide"}>
                                    <span className={"wrapper"}>
                                        { WORDS.map((word, index) => (
                                            <span key={index} className={"pb-2 flex items-center md:gap-3 gap-1"}>
                                                <img src={word.imagePath} alt={word.text} className={"xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-xl bg-surface"} />
                                                <span>{ word.text }</span>
                                            </span>
                                        )) }
                                    </span>
                                </div>
                                <br />
                                <span>
                                    into Real World
                                </span>
                                <br />
                                <span>
                                    that Deliver Results
                                </span>
                            </h1>
                        </div>
                        <p className={"md:text-xl text-text pointer-events-none relative z-10"}>Hi, I'm NgnPhamGiaHuy, a fresher full-stack developer</p>
                        <Button id={"counter"} text={"See my Work"} className={"md:w-80 w-60 md:h-16 h-12"} />
                    </div>
                </header>
                <figure>
                    <div className={"hero-3d-layout"}>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    );
};

export default Hero;
