import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.png"; 
import Link from "next/link";
import { Space_Mono } from "next/font/google";

const Navbar = () => {
    return (
            <nav className="w-full shadow-navbarShadow h-20 lgth-{12vh} sticky top-0 z-50 bg-bodyColor px-4">
                <div className="max-w-container h-full mx-auto py-1 font-bodyFont flex items-center justify-between">
                    <Image 
                        src={Logo}
                        alt="logo"
                        className="w-32"
                    />
                    <div>
                    </div>
                    <div className="hidden mdxl:inline-flex gap-7">
                        <ul className="flex text-{13px} gap-7">
                            <Link href="#home"
                            className="flex items-center gap-1 font-medium text-textDark
                            hover:text-textGreen curson-pointer duration-300 nav-link">
                            <li>Home</li>
                            </Link>
                            <Link href="#about"
                            className="flex items-center gap-1 font-medium text-textDark
                            hover:text-textGreen curson-pointer duration-300 nav-link">
                                <span>01.</span> About
                            </Link>
                            <Link href="#experience"
                            className="flex items-center gap-1 font-medium text-textDark
                            hover:text-textGreen curson-pointer duration-300 nav-link">
                                <span>02.</span> Experience
                            </Link>
                            <Link href="#projects"
                            className="flex items-center gap-1 font-medium text-textDark
                            hover:text-textGreen curson-pointer duration-300 nav-link">
                                <span>03.</span> Projects
                            </Link>
                            <Link href="#contact"
                            className="flex items-center gap-1 font-medium text-textDark
                            hover:text-textGreen curson-pointer duration-300 nav-link">
                                <span>04.</span> Contact
                            </Link>
                        </ul>
                        <a href="/assets/resume.pdf" target="_blank">
                        <button className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 ">
                            Resume
                        </button>
                        </a>
                    </div>
                    {/* Mobile Menu */}
                {/* Mobile Menu */}
                <div className="w-6 h-5 flex flex-col justify-between items-center mdxl:hidden 
                cursor-pointer text-textGreen overflow-hidden group">    
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform 
                    group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform 
                    group-hover:translate-x-0 translate-x-2 transition-all ease-in-out duration-300"></span>
                    <span className="w-full h-[2px] bg-textGreen inline-flex transform 
                    group-hover:translate-x-3 translate-x-1 transition-all ease-in-out duration-300"></span>
                </div>                
            </div>
        </nav>
    );
};

export default Navbar;