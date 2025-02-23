import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { FaKaggle } from "react-icons/fa";
import { 
    FaLinkedin,
    FaTwitter,
    FaInstagram,
 } from "react-icons/fa";

const LeftSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-4 
        text-textLight">
            <div className="flex flex-col gap-4">
                <a href="https://github.com/Nishim12" target="_blank">
                    <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
                    items-center justify-center hover:bg-textGreen cursor-pointer
                    hover:translate-y-2 transition-all duration-300">
                        <TbBrandGithub />
                    </span>
                </a>
            </div>
            <div className="flex flex-col gap-4">
                <a href="https://www.linkedin.com/in/nishim-singhi-bb38481b0/" target="_blank">
                    <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
                    items-center justify-center hover:bg-textGreen cursor-pointer
                    hover:translate-y-2 transition-all duration-300">
                        <FaLinkedin />
                    </span>
                </a>
            </div>
            <div className="flex flex-col gap-4">
                <a href="https://www.kaggle.com/nishimsinghi" target="_blank">
                    <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
                    items-center justify-center hover:bg-textGreen cursor-pointer
                    hover:translate-y-2 transition-all duration-300">
                        <FaKaggle />
                    </span>
                </a>
            </div>
            <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/nishim_singhi/" target="_blank">
                    <span className="w-10 h-10 text-x1 bg-hoverColor rounded-full inline-flex
                    items-center justify-center hover:bg-textGreen cursor-pointer
                    hover:translate-y-2 transition-all duration-300">
                        <FaInstagram />
                    </span>
                </a>
            </div>
            <div className="w-[2px] h-32 bg-textDark"></div>
        </div>
    );
}

export default LeftSide;