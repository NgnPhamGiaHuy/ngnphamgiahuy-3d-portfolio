import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader.tsx";
import GlowCard from "../components/HeroModels/GlowCard.tsx";
import { EXP_CARDS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = (): React.ReactElement => {
    useGSAP(() => {
        gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: "left left",
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                },
            });
        });

        gsap.to(".timeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                onUpdate: (self) => {
                    gsap.to(".timeline", {
                        scaleY: 1 - self.progress,
                    });
                },
            },
        });
        gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
            gsap.from(text, {
                opacity: 0,
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: text,
                    start: "top 60%",
                },
            });
        }, "<");
    }, []);

    return (
        <section id={"experience"} className={"md:mt-40 mt-20 xl:px-0 flex-center section-padding"}>
            <div className={"w-full h-full md:px-20 px-5"}>
                <TitleHeader title={"Professional Work Experience"} sub={"My Career Overview"} />
                <div className={"mt-32 relative"}>
                    <div className={"xl:space-y-32 space-y-10 relative z-50"}>
                        { EXP_CARDS.map((card, index) => (
                            <div key={index} className={"exp-card-wrapper"}>
                                <div className={"xl:w-1/3"}>
                                    <GlowCard review={card.review} index={index}>
                                        <div>
                                            <img src={card.imagePath} alt={card.title} />
                                        </div>
                                    </GlowCard>
                                </div>
                                <div className={"xl:w-2/3"}>
                                    <div className={"flex items-start"}>
                                        <div className={"timeline-wrapper"}>
                                            <div className={"timeline"} />
                                            <div className={"w-1 h-full gradient-line"} />
                                        </div>
                                        <div className={"expText flex xl:gap-20 md:gap-10 gap-5 relative z-20"}>
                                            <div className={"timeline-logo"}>
                                                <img src={card.logoPath} alt={"logo"} />
                                            </div>
                                            <div>
                                                <h2 className={"text-3xl font-semibold"}>{card.title}</h2>
                                                <p className={"my-5 text-white-50"}>🗓️&nbsp;{card.date}</p>
                                                <p className={"text-[#839cb5] italic"}>Responsibilities</p>
                                                <ul className={"ms-5 mt-5 flex flex-col text-white-50 list-disc gap-5"}>
                                                    { card.responsibilities.map((item, index) => (
                                                        <li key={index} className={"text-lg"}>
                                                            {item}
                                                        </li>
                                                    )) }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
