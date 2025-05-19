import React, { useEffect, useState } from "react";

import { NAV_LINKS } from "../constants";

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const isScrolled: boolean = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className={"inner"}>
                <a href={"hero"} className={"logo"}>
                    NgnPhamGiaHuy
                </a>
                <nav className={"desktop"}>
                    <ul>
                        {NAV_LINKS.map((item, index) => (
                            <li key={index} className={"group"}>
                                <a href={item.link}>
                                    <span>{ item.name }</span>
                                    <span className={"underline"}></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href={"#contact"} className={"contact-btn group"}>
                    <div className={"inner"}>
                        <span>
                            Contact Me
                        </span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
