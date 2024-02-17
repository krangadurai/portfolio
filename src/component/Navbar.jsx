import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo'; //  Assuming Logo component exists and imports properly
import { TwitterIcon, GithubIcon, LinkedInIcon } from './icons';
import { motion } from 'framer-motion';



const Navbar = () => {
    const location = useLocation();
    console.log(location)
    const pageLinks = [
        { name: "Home", link: '/', className: 'mr-4' },
        { name: "About", link: '/about', className: 'mx-4' },
        { name: "Project", link: '/project', className: 'ml-4' },
    ];
    const socialLinks = [
        { name: "X", logo: <TwitterIcon className={'mr-3 w-6 '} />, link: "twitter" },
        { name: "Github", logo: <GithubIcon  className={'mr-3 w-6 '}/>, link: "https://github.com/krangadurai" },
        { name: "LinkedIn", logo: <LinkedInIcon  className={'mr-3 w-6 '} />, link: "https://www.linkedin.com/in/rangadurai/" }
      ];

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <nav>
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

            </nav>



            <nav className='flex justify-center items-center'>
                {socialLinks.map((socialLink, index) => (
                    <motion.a key={index} whileHover={{y:-2}} whileTap={{scale:0.9}} href={socialLink.link} target='_blank' className='mr-4'>
                       {socialLink.logo}
                    </motion.a>
                ))}
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

        </header>
    );
}

export default Navbar;
