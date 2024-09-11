import React from "@heroicons/react";
import Link from "next/link";
import { CodeBracketIcon,EyeIcon } from "@heroicons/react/24/outline";
const ProjectCard = ({ imgUrl, title, description,gitUrl,previewUrl }) => {
    console.log("data...", imgUrl, title, description);

    return (
        <div className='relative'>
            <div
                className='h-52 md:h-72 rounded-t-xl relative group'
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                  <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex justify-center items-center'>
        <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center">
            <CodeBracketIcon 
                className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white"
            />
        </Link>
        <Link href={previewUrl} className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center">
            <EyeIcon 
                className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white"
            />
        </Link>
    </div>
            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-[#ADB7BE]'>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
