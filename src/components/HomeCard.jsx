import React from "react";

export const HomeCard = ({ link, imgClass, icon, title, text}) => {
    return (
        <a href={link} className=" flex flex-col w-5/12 m-4 px-4 py-8 text-inherit rounded-3xl border-2 justify-between border-white hover:border-pink-600 hover:no-underline hover:text-pink-600 hover:bg-zinc-900">
            
            { title ? 
            <>
            <div className=" flex gap-8 items-center">
                <img className={imgClass} src={icon} />
                <h3 className=" mb-0 flex items-center justify-center">{title}</h3>
            </div>
            </> 
            :
            <>
            <div className=" flex justify-center items-center">
                <img className={imgClass} src={icon} />
            </div>    
            </> 
            }
            <span className="text-white text-center">{text}</span>
        </a>
    );
};