import React from "react";

import { TESTIMONIALS } from "../constants";
import type { Testimonial } from "../types";
import TitleHeader from "../components/TitleHeader.tsx";
import GlowCard from "../components/HeroModels/GlowCard.tsx";

const Testimonials: React.FC = (): React.ReactElement => {
    return (
        <section id={"testimonials"} className={"section-padding flex-center"}>
            <div className={"w-full h-full md:px-10 px-5"}>
                <TitleHeader title={"What People Say About Me"} sub={"Client Feedback Highlights"} />
                <div className={"mt-16 lg:columns-3 md:columns-2 columns-1"}>
                    { TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
                        <GlowCard key={index} review={testimonial.review} index={index}>
                            <div className={"flex items-center gap-3"}>
                                <div>
                                    <img src={testimonial.imagePath} alt={testimonial.name} />
                                </div>
                                <div>
                                    <p className={"font-bold"}>{testimonial.name}</p>
                                    <p className={"text-text-subtle-surface"}>{testimonial.mentions}</p>
                                </div>
                            </div>
                        </GlowCard>
                    )) }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
