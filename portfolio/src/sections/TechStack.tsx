import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader.tsx";
import TechIcon from "../components/Models/TechLogos/TechIcon.tsx";
import { TECH_STACK_ICONS, TECH_STACK_IMGS } from "../constants";

const TechStack: React.FC = (): React.ReactElement => {
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id={"skills"} className={"flex-center section-padding"}>
            <div className={"w-full h-full md:px-10 px-5"}>
                <TitleHeader title={"My Preferred Tech Stack"} sub={"The Skills I Bring to the Table"} />
                <div className={"tech-grid"}>
                    { TECH_STACK_ICONS.map((icon, index) => (
                        <div key={index} className={"card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"}>
                            <div className="tech-card-animated-bg" />
                            <div className={"tech-card-content"}>
                                <div className={"tech-icon-wrapper"}>
                                    <TechIcon model={icon} />
                                </div>
                                <div className={"w-full padding-x"}>
                                    <p>{ icon.name }</p>
                                </div>
                            </div>
                        </div>
                    )) }
                    { TECH_STACK_IMGS.map((img, index) => (
                        <div key={index} className={"card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"}>
                            <div className="tech-card-animated-bg" />
                            <div className={"tech-card-content"}>
                                <div className={"tech-icon-wrapper"}>
                                    <img src={img.imagePath} alt={img.name} />
                                </div>
                                <div className={"w-full padding-x"}>
                                    <p>{ img.name }</p>
                                </div>
                            </div>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    );
};

export default TechStack;
