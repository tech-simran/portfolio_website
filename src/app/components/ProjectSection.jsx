"use client"
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
const PROJECTS_DATA = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my skills, projects, and experience. Built with React and styled-components.",
      image: "/images/projects/portfolio.png",
      tags: ["Nextjs", "Web Development", "CSS"],
      gitUrl:"/",
      previewUrl:"/"
    },
    {
      id: 2,
      title: "E-commerce Store",
      description: "A full-featured e-commerce web application with a shopping cart, product filters, and payment integration. Developed using Node.js and MongoDB.",
      image: "/images/projects/e-com.png",
      tags: ["Reactjs","Node.js", "MongoDB", "Full Stack"],
        gitUrl:"/",
      previewUrl:"/"
    },
    {
        id: 3,
        title: "Blog Platform",
        description: "A blog platform that allows users to create, edit, and delete posts. Includes features like user authentication and rich text editor.",
        image: "/images/projects/blog.jpg",
        tags: ["Nextjs", "Express", "MongoDB"],
          gitUrl:"/",
      previewUrl:"/"
      },
    // {
    //   id: 4,
    //   title: "Weather App",
    //   description: "A weather forecasting app that provides real-time weather updates based on user's location. Integrated with OpenWeather API.",
    //   image: "/images/projects/portfolio.png",
    //   tags: ["API", "JavaScript", "Mobile"]
    // },
    // {
    //   id: 5,
    //   title: "Task Management App",
    //   description: "A task management app with features like to-do lists, task prioritization, and deadlines. Built with React and Firebase.",
    //   image: "task-management-app.png",
    //   tags: ["React", "Firebase", "Productivity"]
    // },
  
  ];
  
const ProjectSection = () => {
  const [tag,setTag] = useState("All")
  const handleTagChange = (newTag)=>{
    setTag(newTag)
  }
    return (
       <>
       <h2 className='text-center text-4xl mb-5 mt-4 font-bold text-white '>My Projects</h2>
       <div className='text-white flex flex-row justify-center items-center gap-2 py-2'>
     <ProjectTag  onClick={handleTagChange}
     name="All"
     isSelected={tag === 'All'}
     />
        <ProjectTag  onClick={handleTagChange}
     name="Web"
     isSelected={tag === 'Web'}
     />
        <ProjectTag  onClick={handleTagChange}
     name="Mobile"
     isSelected={tag === 'Mobile'}
     />
       </div>
       <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {
            PROJECTS_DATA.map((project) =>(
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                tags={project.tags} 
                gitUrl={project.gitUrl }
                previewUrl ={project.previewUrl}
                />
            ))
        }
       </div>
       </>
    );
}

export default ProjectSection;
