"use client"
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>JavaScript</li>
                <li>React</li>
                <li>Express</li>
                <li>SQL</li>
                <li>Node.js</li>
                <li>Mongo DB</li>
                <li>Java</li>
            </ul>
        )  
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Cambridge Institute of Technology, Bangalore</li>
                <li>New Horizon Pre University, Bangalore</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner</li>
                <li>Infosys AI Foundation</li>
            </ul>
        )
    }
]


const About = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => { 
            setTab(id)
        })
    }
  return (
    <section id="about" className="text-white">
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} alt='About me Image' />
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a dedicated Full Stack Developer with a passion for transforming innovative ideas into captivating digital experiences. With a strong foundation in HTML, CSS, JavaScript, and Java, and hands-on experience with React.js and Node.js, I excel in building responsive, user-centered interfaces. My collaborative spirit, paired with excellent communication skills, enables me to thrive within dynamic teams, consistently delivering impactful results.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active = {tab === 'skills'}>{" "}Skills{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active = {tab === 'education'}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active = {tab === 'certifications'}>{" "}Certifications{" "}</TabButton>
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>  
    </section>
  )
}

export default About