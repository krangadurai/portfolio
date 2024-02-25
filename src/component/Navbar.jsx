import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo'; //  Assuming Logo component exists and imports properly
import { TwitterIcon, GithubIcon, LinkedInIcon } from './icons';
import { motion } from 'framer-motion';



const Navbar = () => {
    const location = useLocation();
    const pageLinks = [
        { name: "Home", link: '/', className: 'mr-4 sm:mr-0 md:mr-0  sm:mx-0 ' },
        { name: "About", link: '/about', className: 'mx-4 sm:mx-0 md:mx-0 sm:mx-0 ' },
        { name: "Project", link: '/project', className: 'ml-4 sm:ml-0 md:ml-0 sm: sm:mx-0 ' },
    ];
    const socialLinks = [
        { name: "X", logo: <TwitterIcon className={'mr-3 w-6 '} />, link: "twitter" },
        { name: "Github", logo: <GithubIcon className={'mr-3 w-6  bg-light rounded-full dark:bg-dark text-dark '} />, link: "https://github.com/krangadurai" },
        { name: "LinkedIn", logo: <LinkedInIcon className={'w-6 m-1 '} />, link: "https://www.linkedin.com/in/rangadurai/" }
    ];

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <header className='w-full px-32 py-8 font-medium font-mont flex items-center justify-between lg:px-20 sm:px-5 md:px-10   '>
            <button className='flex-col self-start  justify-center items-center hidden md:flex sm:flex' onClick={toggle}>
                <motion.span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out rounded-sm h-0.5 w-6  ${isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}`}></motion.span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out rounded-sm h-0.5 w-6 my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <motion.span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out rounded-sm h-0.5 w-6  ${isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}`}></motion.span>
            </button>
            <nav className='flex md:hidden sm:hidden'>
                {pageLinks.map((pageLink, index) => (
                    <Link key={index} to={pageLink.link} className={`${pageLink.className} relative group`} >
                        {pageLink.name}
                        <span className={`h-[1px] inline-block ${location.pathname === pageLink.link ? 'w-full' : 'w-0'} bg-dark absolute left-0 -bottom-0.5
                                   group-hover:w-full transition-[width] ease duration-300 
                                  `}>
                            &nbsp;
                        </span>
                    </Link>
                ))}
            </nav>
            <nav className='flex justify-center items-center md:hidden sm:hidden'>
                {socialLinks.map((socialLink, index) => (
                    <motion.a key={index} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href={socialLink.link} target='_blank' className='mr-4'>
                        {socialLink.logo}
                    </motion.a>
                ))}
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

            <div id="" className={`absolute  backdrop-blur-md min-w-[70vw] sm:min-w-[90vw]  flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg  py-32 dark:text-dark text-light ${isOpen ? 'flex':'hidden'}`}>
                <nav className='flex items-center justify-center flex-col text-center'>
                    {pageLinks.map((pageLink, index) => (
                        <Link key={index} to={pageLink.link} className={`${pageLink.className} relative group`} >
                            {pageLink.name}
                            <span className={`h-[1px] inline-block ${location.pathname === pageLink.link ? 'w-full' : 'w-0'} bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>
                                &nbsp;
                            </span>
                        </Link>
                    ))}
                </nav>
                <nav className='flex justify-center items-center mt-5 '>
                    {socialLinks.map((socialLink, index) => (
                        <motion.a key={index} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} href={socialLink.link} target='_blank' className='mr-4'>
                            {socialLink.logo}
                        </motion.a>
                    ))}
                </nav>
            </div>


        </header>
    );
}

export default Navbar;
