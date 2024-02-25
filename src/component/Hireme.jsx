import React from 'react';
import { CircularText } from './icons';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Link } from 'react-router-dom';

const Hireme = () => {
    return (
        <div className="fixed left-8 bottom-4 flex items-center justify-center overflow-hidden w-40 sm:w-20 md:w-20 md:top-0 sm:top-0 md:absolute z-20 sm:absolute md:left-[80%]  sm:left-[67%] md:items-start sm:items-start">
            <motion.div className="full-dark animate-spin-slow"> 
                <CircularText />
            </motion.div>
            
            <div className="w-[80px] h-[80px]   sm:w-[40px] sm:h-[40px]  md:w-[40px] md:h-[40px]   text-sm bg-dark rounded-full flex justify-center  sm:mt-5 md:mt-5 text-light absolute text-center items-center">
                <Link className='text-sm sm:text-[10px]  md:text-[10px]' to='maito:rangadurai27@gmai.com'> Hire Me</Link>
            </div>
        </div>
    );
};

export default Hireme;
