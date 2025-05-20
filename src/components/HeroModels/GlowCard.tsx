import React, { useRef } from "react";

interface GlowCardProps {
    index: number;
    review: string;
    children: React.ReactNode;
}

const GlowCard: React.FC<GlowCardProps> = ({ review, index, children }): React.ReactElement => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRefs.current[index];

        if (!card) return;

        const rect: DOMRect = card.getBoundingClientRect();
        const mouseX: number = e.clientX - rect.left - rect.width / 2;
        const mouseY: number = e.clientY - rect.top - rect.height / 2;

        let angle: number = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

        angle = (angle + 360) % 360;

        card.style.setProperty("--start", `${angle + 60}`);
    }

    return (
        <div
            ref={(el) => {
                cardRefs.current[index] = el;
            }}
            onMouseMove={handleMouseMove(index)}
            className={"mb-5 p-10 card card-border timeline-card rounded-xl break-inside-avoid-column"}
        >
            <div className={"glow"} />
            <div className={"mb-5 flex items-center gap-1"}>
                { Array.from({ length: 5 }, (_, i) => (
                    <img src={"/images/star.png"} key={i} alt={"star"} className={"size-5"} />
                )) }
            </div>
            <div className={"mb-5"}>
                <p className={"text-lg text-white-50"}>{ review }</p>
            </div>
            { children }
        </div>
    );
};

export default GlowCard;
