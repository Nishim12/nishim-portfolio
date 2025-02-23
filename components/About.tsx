import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const skills = {
    "Programming Languages": ["Python", "JavaScript/TypeScript", "Java", "C", "C++", "Bash"],
    "Web Development": ["React", "Django", "HTML", "SCSS", "MySQL"],
    "AI/ML": ["OpenCV", "NumPy", "Scikit-Learn", "Matplotlib"],
    "DevOps & Automation": ["Docker", "GitHub Actions", "Jenkins", "AWS", "Selenium", "YAML"]
};

const About = () => {
    return (
        <section id="about" className="max-w-contentContainer mx-auto py-10 lgl:py-32 flex flex-col gap-8">
            <SectionTitle title="About Me" titleNo="01."/>
            
            <div className="flex flex-col lgl:flex-row gap-16">
                {/* About Text */}
                <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 max-w-[450px]">
                    <p>
                        I am a highly motivated Computer Engineering student at the University of British Columbia (GPA: 4.0/4.33), passionate about **software engineering, automation, and AI**. 
                        Currently, I work as a **Software Development Engineer Co-op at Microchip**, streamlining third-party library integration for NASA’s SoC Linux OS and automating deployments with Jenkins.
                    </p>
                    <p>
                        Previously, as a **Full-Stack Web Developer at The Ubyssey**, I led the development of a CMS, improved website performance by **20%**, and implemented automated testing using **Selenium and Docker**. I enjoy building scalable solutions and optimizing system performance.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="w-full lgl:w-1/3">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="mb-4">
                            <h3 className="text-lg font-semibold text-textGreen">{category}</h3>
                            <ul className="grid grid-cols-2 gap-2 text-sm">
                                {items.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2">
                                        <AiFillThunderbolt className="text-textGreen" /> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
