import React from "react";

import { SOCIAL_IMGS } from "../constants";

interface SocialImage {
    imagePath: string;
}

const Footer: React.FC = (): React.ReactElement => {
    return (
        <footer className={"footer"}>
            <div className={"footer-container"}>
                <div className={"flex flex-col justify-center"}>
                    <p>Terms & Conditions</p>
                </div>
                <div className={"socials"}>
                    { SOCIAL_IMGS.map((img: SocialImage, index: number) => (
                        <div key={index} className={"icon"}>
                            <img src={img.imagePath} alt="Social Icon" />
                        </div>
                    )) }
                </div>
                <div className={"flex flex-col justify-center"}>
                    <p className={"text-center md:text-end"}>
                        © { new Date().getFullYear() } NgnPhamGiaHuy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
