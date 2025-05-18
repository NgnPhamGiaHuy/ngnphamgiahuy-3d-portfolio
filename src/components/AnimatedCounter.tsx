import React from "react";
import CountUp from "react-countup";

import { COUNTER_ITEMS } from "../constants";

const AnimatedCounter = (): React.ReactElement => {
    return (
        <div id={"counter"} className={"xl:mt-0 mt-32 padding-x-lg"}>
            <div className={"mx-auto grid-4-cols"}>
                { COUNTER_ITEMS.map((item, index) => (
                    <div key={index} className={"p-10 flex flex-col justify-center bg-zinc-900 rounded-lg"}>
                        <div className={"mb-2 counter-number text-5xl text-white font-bold"}>
                            <CountUp suffix={item.suffix} end={item.value} />
                        </div>
                        <div className={"text-white-50 text-lg"}>
                            { item.label }
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default AnimatedCounter;
