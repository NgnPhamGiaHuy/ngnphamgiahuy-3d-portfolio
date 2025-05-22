import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { DEFAULT_PROJECTS } from "../constants";

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: string;
    title: string;
    description?: string;
    imagePath: string;
    bgColor?: string;
}

interface ShowcaseProps {
    projects?: Project[];
}

const Showcase: React.FC<ShowcaseProps> = ({ projects = DEFAULT_PROJECTS }): React.ReactElement => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const projectRefs = projects.map(() => useRef<HTMLDivElement>(null));

    useGSAP(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 },
        );

        projectRefs.forEach((ref, index) => {
            if (!ref.current) return;

            gsap.fromTo(
                ref.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top bottom-=100"
                    }
                },
            );
        });
    }, []);

    return (
        <div id={"work"} ref={sectionRef} className={"app-showcase"}>
            <div className={"w-full"}>
                <div className={"showcase-layout"}>
                    <div className={"first-project-wrapper"} ref={projectRefs[0]}>
                        <div className={"image-wrapper"}>
                            <img src={projects[0].imagePath} alt={projects[0].id} />
                        </div>
                        <div className={"text-content"}>
                            <h2>{ projects[0].title }</h2>
                            <p className={"md:text-xl text-text text-justify"}>
                                { projects[0].description }
                            </p>
                        </div>
                    </div>
                    <div className={"project-list-wrapper overflow-hidden"}>
                        { projects.slice(1).map((project, index) => (
                            <div key={project.id} className={"project"} ref={projectRefs[index + 1]}>
                                <div className={`image-wrapper ${project.bgColor ? project.bgColor : ''}`}>
                                    <img src={project.imagePath} alt={project.id} />
                                </div>
                                <h2>{ project.title }</h2>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;
