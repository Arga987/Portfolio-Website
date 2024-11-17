"use client"

import React, {useRef} from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Application',
        description: 'E-commerce app using Next.js 13, Sanity, and Stripe. Features include a user-friendly interface, a functional shopping cart (add, update, remove items), and product sorting options.',
        image: '/images/projects/Pic-1.png',
        gitUrl: "https://github.com/Arga987/E-commerce",
        previewUrl: "https://e-commerce-bice-mu-57.vercel.app/",
    },
    {
        id: 2,
        title: 'Blog Applicaiton',
        description: 'This will allow users to write their own stories and the data is stored in a database. The backend language used for this is node.js,express and mongoDB and the frontend being used is React',
        image: '/images/projects/Pic-2.png',
        gitUrl: "https://github.com/Arga987/Blog_App_Using_MERN",
        previewUrl: "https://github.com/Arga987/Blog_App_Using_MERN",
    },
    {
        id: 3,
        title: 'Podcast-Summary-Applicaiton',
        description: 'This project aims to automate the process of summarizing podcasts. making it convenient for users to quickly grasp the key points of lengthy audio content.',
        image: '/images/projects/Pic-3.png',
        gitUrl: "https://github.com/Arga987/Podcast-Summary-Applicaiton",
        previewUrl: "https://github.com/Arga987/Podcast-Summary-Applicaiton",
    },
    {
        id: 4,
        title: 'Movie Hub',
        description: 'This project allows users to search for any movies they want and it handles the process asynchronously',
        image: '/images/projects/Pic-4.png',
        gitUrl: "https://github.com/Arga987/MovieHub_with_React",
        previewUrl: "https://github.com/Arga987/MovieHub_with_React",
    }
]

const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y:0 , opacity: 1}
}

const ProjectsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
  return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">{projectsData.map((project, index) => 
        (
            <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }} >
                <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>
            </motion.li>
        ))}</ul>
        
    </section>
    
  )
}

export default ProjectsSection