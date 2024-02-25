import React from 'react';
import { motion } from 'framer-motion'
import { split } from 'postcss/lib/list';

const AnimationHeading = ({ text, className = '' }) => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <motion.h1 className={className} variants={container}
            initial="hidden"
            animate="visible">
            {text.split(" ").map((word, index) => (
                <motion.span key={index + '_' + word} className=" font-mont inline-block " variants={item} >{word}&nbsp; </motion.span>
            ))}
        </motion.h1>
    )
}

export default AnimationHeading