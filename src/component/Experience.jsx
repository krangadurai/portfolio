import React, { useRef, } from 'react'
import AnimationHeading from './AnimationHeading'
import { motion, useScroll, useSpring } from "framer-motion"

const ExperienceDetails = ({ company, role, year, place, summary }) => {
    const edref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: edref,
        offset: ["center end", "center center"]
    });


    return (

        <div ref={edref} className='py-4'>
            <figure className=" absolute  left-[3vw]">
                <svg width="40" height="40" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="fill-pink-600"
                        style={{opacity:scrollYProgress }}
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="30"
                        pathLength="1"
                        className="stroke-pink-600 stroke-2 "
                        style={{ pathLength: scrollYProgress}}
                    />
                </svg>
            </figure>
            <h1 className='font-bold text-2xl my-0.5'>{role} <span className='text-pink-600'>@{company}</span></h1>
            <h4 className='font-semibod text-dark/75 mb-0.5 font-xl'>{year} | {place}</h4>
            <p className='font-medium '>{summary}</p>

        </div>
    )
}


const Experience = () => {
    const experienceRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: experienceRef, offset: ["start end", "center center"] });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 10,
        damping: 10,
        restDelta: 0.001
      });
    
    let data = [
        {
            "role": "Software Developer",
            "company": "Kazh.com",
            "years": "Jul 2023 - Feb 2024",
            "place": "Chennai, Tamil Nadu, India · Remote",
            "summary": "Led Node.js and React.js development for scalable backend and user-friendly frontend interfaces. Integrated Binance API for real-time market data access and trading features. Implemented WebSocket functionality for live updates, enhancing user experiences."
        },
        {
            "role": "Software Engineer",
            "company": "BIZTECHNOSYS",
            "years": "Jun 2022 - Mar 2023",
            "place": "Bengaluru, Karnataka, India · Hybrid",
            "summary": "Excelled as a PHP Software Engineer at BIZTECHNOSYS, optimizing Vtiger CRM performance. Expertise in PHP development, database management, and API utilization. Tailored Vtiger solutions for enhanced business operations."
        },
        {
            "role": "DSA Learner",
            "company": "AccioJob",
            "years": "Dec 2021 - Jul 2022",
            "place": "Gurugram, Haryana, India · Remote",
            "summary": "Unlock job task efficiency with Java Data Structures and Algorithms. Master problem-solving, algorithm design, and data structure implementation. Optimize performance, excel in coding interviews, and drive software development. Enhance technical communication. Leverage Java's strengths for streamlined success in diverse professional domains."
        }
    ];

    return (

        <div className='flex flex-col justify-center relative mb-32 '>
            <AnimationHeading text={'Experience'} className='text-8xl font-bold text-center sm:text-2xl md:text-4xl lg:text-6xl' />
            <motion.div className="w-[2px] bg-pink-600  absolute left-[calc(3vw+20px)] h-[80%] origin-top top-[20vh]" style={{ scaleY }} />
            <div  ref={experienceRef} className={`flex text-left justify-start flex-col ml-20 sm:ml-10 max-w-[75%] self-center sm:max-w-[80%]:  mt-8  `}>
                {data.map((experience, index) => (
                    <ExperienceDetails key={index} company={experience.company} role={experience.role} place={experience.place} year={experience.years} summary={experience.summary} experienceRef={experienceRef} />
                ))}
            </div>
        </div>

    );
};

export default Experience;