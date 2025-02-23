import React from "react";
import Image from "next/image";

const Banner = () => {
    return (
        <section 
            id="home"
            className="max-w-contentContainer mx-auto py-8 mdl:py-8 flex flex-col-reverse mdl:flex-row items-center gap-8 mdl:gap-20">
            {/* Text Content */}
            <div className="flex flex-col gap-3 lgl:gap-6 mdl:w-2/3">
                <h3 className="text-base font-montserrat tracking-wide text-textGreen">
                    Hi, my name is
                </h3>
                <h1 className="text-3xl lgl:text-4xl font-montserrat font-semibold flex flex-col">
                    Nishim Singhi. 
                    <span className="text-textDark mt-1 lgl:mt-3">
                        I am a software Engineer
                    </span>
                </h1>
                <p className="text-sm text-textDark font-medium">
                    I'm a Software Development Engineer intern at Microchip and a Full-Stack Web Developer at Ubyssey Publications. I am always eager to take on new challenges and collaborate on impactful projects.
                </p>
            </div>

            {/* Image Container */}
            <div className="w-full h-full relative group">
                <div className="relative w-48 h-48 mdl:w-64 mdl:h-64 mx-auto border-2 border-textGreen rounded-full transition-transform duration-300 hover:scale-105 active:scale-95 active:border-textDark">
                    <Image
                        src="/images/my_photo.jpg"  
                        alt="Nishim Singhi"
                        fill
                        priority
                        className="rounded-full object-cover transform transition-transform duration-300"
                    />
                </div>
            </div>
        </section> 
    );
}

export default Banner;