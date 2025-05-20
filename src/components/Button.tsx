import React from "react";

import type { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ id, text, className }): React.ReactElement => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
        e.preventDefault();

        const target = document.getElementById(id);

        if (target && id === "counter") {
            const offset = window.innerHeight * 0.15;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top,
                behavior: "smooth"
            })
        }
    }

    return (
        <a onClick={handleClick} className={`${className ?? ''} cta-wrapper`}>
            <div className={"cta-button group"}>
                <div className={"bg-circle"} />
                <p className={"text"}>{ text }</p>
                <div className={"arrow-wrapper"}>
                    <img src={"/images/arrow-down.svg"} alt={"arrow"} />
                </div>
            </div>
        </a>
    );
};

export default Button;
