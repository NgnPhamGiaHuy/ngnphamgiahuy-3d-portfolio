import React from "react";
import CountUp from "react-countup";

import { COUNTER_ITEMS } from "../constants";

const AnimatedCounter: React.FC = (): React.ReactElement => {
    return (
        <div id={"counter"} className={"xl:mt-0 mt-32 padding-x-lg"}>
            <div className={"mx-auto grid-4-cols"}>
                { COUNTER_ITEMS.map((item, index) => (
                    <div key={index} className={"p-10 flex flex-col justify-center bg-surface rounded-lg"}>
                        <div className={"mb-2 counter-number text-5xl text-text-surface font-bold"}>
                            <CountUp suffix={item.suffix} end={item.value} />
                        </div>
                        <div className={"text-text-subtle-surface text-lg"}>
                            { item.label }
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default AnimatedCounter;
