import React from 'react'
import Navbar from '../component/Navbar';
import profilepic from '../assets/images/profile/developer-pic-2.jpg'
import AnimationHeading from '../component/AnimationHeading';
import Skills from '../component/Skills';
import Experience from '../component/Experience';
import Education from '../component/Education';
import Footer from '../component/Footer';
const Paragraph = ({ text, className = '' }) => {
    return (
        <p className={` py-3 font-medium  ${className}`}>{text}</p>
    )
}

const About = () => {
    return (
        <div>
            <Navbar />
            <main className=' font-mont min-h-screen px-32 sm:px-5 md:px-10  '>
                <div className='text-center'>
                    <AnimationHeading className='text-8xl font-bold w-full capitalize !leading-tight sm:text-xl  dark:text-light py-10   md:text-6xl' text='Passion Fuels Purpose!' />
                </div>
                <div className="grid w-full xl:grid-cols-8 xxl:grid-cols-8 gap-16 sm:gap-4 md:gap-8">
                    <div className='col-span-3 flex flex-col items-start justify-start order-2  sm:text-center md:text-center'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/7 sm:w-full sm:mb-0 md:w-full'>Biography</h2>
                        <Paragraph text={` Hi, I'm Rangadurai, I am a dedicated Full-Stack JavaScript Developer and MERN Stack Specialist hailing from the vibrant city of Palani, Tamil Nadu, India. With a profound passion for crafting innovative digital solutions, I bring nearly 2 years of dynamic experience to the realm of web development.`} />
                        <Paragraph text={`My expertise lies in the comprehensive MERN stack - harnessing the power of MongoDB, Express.js, React.js, and Node.js to build modern, responsive web applications. From backend prowess with Node.js to frontend finesse with React.js, I am well-versed in every facet of the MERN ecosystem. `} />
                        <Paragraph text={`In my most recent role as a Software Developer at Kazh.com, I spearheaded Node.js and React.js-based development projects. Here, I seamlessly integrated the Binance API, facilitating real-time access to cryptocurrency market data and empowering users with seamless trading experiences. My knack for innovation was further showcased through the implementation of WebSocket functionality, enabling dynamic, bidirectional communication channels within the application.`} />
                        <Paragraph  text={`Prior to Kazh.com, I served as a Software Engineer at BIZTECHNOSYS, where I specialized in customizing and optimizing Vtiger CRM. Proficient in PHP development, database management, and API utilization, I elevated Vtiger functionality, streamlined processes, and ensured optimal CRM performance.`}/>
                    </div>
                    <div className='mx-auto relative flex col-span-3 h-max rounded-2xl border-2 border-solid border-sky-500  bg-light p-8 order-1 xl:order-2 xxl:order-2'>
                        <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-sky-500 dark:bg-light  "></div>
                        <img src={profilepic} className={' rounded-md'} alt="hero pic" />
                    </div>

                    <div className=' col-span-3 xl:col-span-2 xxl:col-span-2  flex  flex-col items-end justify-between w-full order-3 gap-4 '>
                        <div className='flex flex-col items-end justify-center  sm:items-center sm:justify-center sm:w-full md:w-full  md:items-center  md:justify-center lg:w-full lg:items-center  lg:justify-center'>
                            <span className='flex justify-end text-7xl font-bold '>4+</span>
                            <h1 className='font-bold text-dark/75 text-xl2'>Satisfied Clients</h1>
                        </div >
                        <div className='flex flex-col items-end justify-center  sm:items-center sm:justify-center sm:w-full md:w-full  md:items-center md:justify-center lg:w-full lg:items-center  lg:justify-center'>
                            <span className='flex justify-end text-7xl font-bold '>4+</span>
                            <h1 className='font-bold text-dark/75 text-xl2'>Projects Completed</h1>
                        </div>
                        <div className='flex flex-col items-end justify-center  sm:items-center sm:justify-center sm:w-full    md:w-full  md:items-center md:justify-center lg:w-full lg:items-center  lg:justify-center'>
                            <span className='flex justify-end text-7xl font-bold  '>2+</span>
                            <h1 className='font-bold text-dark/75 text-xl2'>Years Of Experience</h1>
                        </div>
                    </div>
                </div>
               
                <Skills />

                <Experience />
                <Education/>
                
            </main >
            <Footer />
        </div >
    )
}

export default About