import React from "react";

import { LOGO_ICONS_LIST } from "../constants";
import type { LogoIcon as LogoIconType } from "../types";

interface LogoIconProps {
    icon: LogoIconType;
}

const LogoIcon: React.FC<LogoIconProps> = ({ icon }): React.ReactElement => {
    return (
        <div className={"flex-none flex-center marquee-item"}>
            <img src={icon.imagePath} alt={icon.name} />
        </div>
    )
}

const Logo: React.FC = (): React.ReactElement => {
    return (
        <div className={"md:my-20 my-10 relative"}>
            <div className={"gradient-edge"}></div>
            <div className={"gradient-edge"}></div>
            <div className={"marquee h-52"}>
                <div className={"marquee-box md:gap-12 gap-5"}>
                    { LOGO_ICONS_LIST.map((icon, index) => (
                        <LogoIcon key={index} icon={icon} />
                    )) }
                    { LOGO_ICONS_LIST.map((icon, index) => (
                        <LogoIcon key={index} icon={icon} />
                    )) }
                </div>
            </div>
        </div>
    );
};

export default Logo;
