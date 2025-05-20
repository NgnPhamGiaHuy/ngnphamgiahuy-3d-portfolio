import React from "react";

import type { Ability } from "../types";
import { ABILITIES } from "../constants";

interface FeatureCardProps {
    ability: Ability;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ ability }): React.ReactElement => {
    return (
        <div className={"p-8 flex flex-col gap-4 card-border rounded-xl"}>
            <div className={"size-14 flex flex-center rounded-full"}>
                <img src={ability.imagePath} alt={ability.title} />
            </div>
            <h3 className={"mt-2 text-2xl text-white font-semibold"}>{ability.title}</h3>
            <p className={"text-white-50 text-lg"}>{ability.desc}</p>
        </div>
    );
};

const Feature: React.FC = (): React.ReactElement => {
    return (
        <div className={"w-full padding-x-lg"}>
            <div className={"mx-auto grid-3-cols"}>
                { ABILITIES.map((ability, index) => (
                    <FeatureCard key={index} ability={ability} />
                )) }
            </div>
        </div>
    );
};

export default Feature;
