import React from "react";

const RightSide = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-end gap-6
        text-textLight">
            <a href="mailto:nishimsinghi@gmail.com">
                <p className="text-sm rotate-90 w-80 tracking-wide text-textDark hover:text-textGreen duration-300">
                    nishimsinghi@gmail.com
                </p>
            </a>  
            <div className="w-[2px] h-32 bg-textDark inline-flex"></div>  
        </div>
    );
}

export default RightSide;