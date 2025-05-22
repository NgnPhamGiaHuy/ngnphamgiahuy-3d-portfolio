import React from "react";

interface TitleHeaderProps {
    title: string;
    sub: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, sub }): React.ReactElement => {
    return (
        <div className={"flex flex-col items-center gap-5"}>
            <div className={"hero-badge"}>
                <p>{ sub }</p>
            </div>
            <div className={"md:text-5xl text-3xl text-center font-semibold"}>
                { title }
            </div>
        </div>
    );
};

export default TitleHeader;
