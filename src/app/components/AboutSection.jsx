"use client";
import React, { startTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [{
title:"Skills",
id:"skills",
content:(
  <ul className="list-disc pl-2">
    <li>Node.js</li>
    <li>Express</li>
    <li>React.js</li>
    <li>javascript</li>
    <li>
      Next.js
    </li>
    <li>MongoDb</li>
  </ul>
)
},
{title:"Education",
  id:"education",
  content:(
    <ul  className="list-disc pl-2">
      <li>Fullstack</li>
      <li>Univercity of sistect</li>
    </ul>
  )
},



]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useState();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 px-6 xl:gap-20 bg-[#121212]">
  <div className="relative flex justify-center">
    <Image
      width={500}
      height={500}
      src="/images/about2.jpg"
      alt="About me image"
      className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
    <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
    <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
      I am a full-stack developer skilled in React, Redux, Next.js, MongoDB, Node.js, and JavaScript. I create dynamic, responsive web applications with a focus on performance and user experience. My passion lies in developing both frontend and backend solutions that drive innovation and efficiency.
    </p>
    <div className="flex flex-row mt-8 space-x-4">
      <TabButton
        selectTab={() => handleTabChange("skills")}
        active={tab === "skills"}
      >
        Skills
      </TabButton>
      <TabButton
        selectTab={() => handleTabChange("education")}
        active={tab === "education"}
      >
        Education
      </TabButton>
      <TabButton
        selectTab={() => handleTabChange("experience")}
        active={tab === "experience"}
      >
        Experience
      </TabButton>
    </div>
    <div className="mt-10">
      {TAB_DATA.find((t) => t.id === tab)?.content}
    </div>
  </div>
</div>

    </section>
  );
};

export default AboutSection;
