import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import AnimationHeading from '../component/AnimationHeading';
import { GithubIcon } from '../component/icons';
import Image1 from '../assets/images/projects/portfolio.png'
const ProjectCard = ({ Data }) => {

    return (
        <div className='flex  flex-col relative my-5  rounded-[2rem] border-dark bg-light border-2 p-5 '>
            <div className='absolute bg-dark w-[101%] h-[101%] -z-10 rounded-[2rem]' />

            <div className='bg-light flex flex-col xxl:flex-row xl:flex-row  xl:gap-16 xxl:gap-16 items-center'>
                <div className='w-100'><a href=""><img src={Data.Image} className=' rounded-2xl' alt="" srcset="" /></a></div>
                <div className='flex flex-col gap-4 '>
                    <p className=' text-pink-600 text-xl font-semibold xl:text-2xl xxl:text-2xl'>{Data.Type}</p>
                    <a href="" className='font-bold text-dark  text-2xl xl:text-4xl xxl:text-4xl'>{Data.Name}</a>

                    <p className='font-sm text-md '>{Data.Summary}</p>
                    <div className='flex  justify-between'>
                        <a href={Data.VisitLink}  className='font-semibold text-dark text-lg'>Visit</a>
                        <a href={Data.GithupLiknk} className='font-semibold text-dark w-6'><GithubIcon /></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Project = () => {
    let data = [{
        Name: "Portfolio Web Site",
        Type: "Personal Project",
        Summary: "Portfolio Website is a personalized digital space showcasing professional accomplishments, skills, and creativity. It offers a dynamic platform for visitors to explore qualifications, projects, and insights firsthand.",
        VistLink: "https://minimal-nextjs-portfolio-website.vercel.app/projects",
        GithupLiknk: "https://github.com/krangadurai/protfolio",
        Image: Image1,
    }]
    return (
        <>
            <Navbar />
            <main className='min-h-screen p-8 lg:px-24 xl:px-32 xxl:px-32 '>
                <div className='flex flex-col mt-10 font-mont'>
                    <AnimationHeading text={`Imagination Trumps Knowledge!`} className='text-4xl font-bold  text-center lg:text-6xl xl:text-6xl xxl:text-8xl' />
                    {data.map((projectData) => (<ProjectCard Data={projectData} />))}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Project