import React, { useRef, } from 'react'
import AnimationHeading from './AnimationHeading'
import { motion, useScroll, useSpring } from "framer-motion"

const EducationDetails = ({ Name, college, year, place, summary }) => {
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
            <h1 className='font-bold text-2xl my-0.5'>{Name} <span className='text-pink-600'>@{college}</span></h1>
            <h4 className='font-semibod text-dark/75 mb-0.5 font-xl'>{year} | {place}</h4>
            <p className='font-medium '>{summary}</p>

        </div>
    )
}


const Education = () => {
    const EducationRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: EducationRef, offset: ["start end", "center center"] });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 10,
        damping: 10,
        restDelta: 0.001
      });
    
      let data = [
        {
            "Name": "bachelor chemistry",
            "college": "APAC College",
            "years": "Jul 2016 - Feb 2019",
            "place": "Palani, Tamil Nadu, India · Remote",
            "summary":"Completed Bachelor of Chemistry at APAC College, specializing in analytical skills, laboratory techniques, and research. Proficient in organic, inorganic, and physical chemistry applications."
        }
        
    ];
    
    return (

        <div className='flex flex-col justify-center relative  mb-32'>
            <AnimationHeading text={'Education'} className='text-8xl font-bold text-center sm:text-2xl md:text-4xl lg:text-6xl'  />
            <motion.div className="w-[2px] bg-pink-600  absolute left-[calc(3vw+20px)] h-[80%] origin-top top-[20vh]" style={{ scaleY }} />
            <div  ref={EducationRef} className={`flex text-left justify-start flex-col ml-20 sm:ml-10 max-w-[75%] self-center sm:max-w-[80%]:  mt-8`}>
                {data.map((Education, index) => (
                    <EducationDetails key={index} Name={Education.Name} college={Education.college} place={Education.place} year={Education.years} summary={Education.summary} EducationRef={EducationRef} />
                ))}
            </div>
        </div>

    );
};

export default Education;