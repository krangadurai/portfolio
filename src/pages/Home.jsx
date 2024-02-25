import React from 'react'
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import DevloperPic from '../assets/images/profile/developer-pic.png';
import Hireme from '../component/Hireme';
import { Link } from 'react-router-dom';
import { LinkArrow } from '../component/icons';
import AnimationHeading from '../component/AnimationHeading';

const Home = () => {
    return (
        <>
            <Navbar />
            <main className=' font-mont flex flex-col px-32 lg:px-0 md:px-10 sm:px-2 min-h-screen'>
                <div className="flex w-full  flex-row lg:flex-col md:flex-col sm:flex-col  items-center sm:py-4 py-8">
                    <img src={DevloperPic} alt="RA" className='w-1/2 sm:w-full md:w-full' />
                    <div className='w-1/2 md:w-full sm:w-full'>
                        <AnimationHeading text={'Transforming Ideas into Reality'} className='text-dark  font-bold text-6xl text-left lg:text-center xl:text-4xl lg:text-3xl md:text-center md:text-3xl sm:text-xl sm:text-center' />
                        <p className=' font-10sm  lg:text-center md:text-center sm:text-center'>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                            Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                        <div className="flex py-6 items-center lg:justify-center md:justify-center sm:flex-col">
                            <Link to={'/dummy.pdf'} className='bg-dark text-light flex  border-transparent border-2 rounded-md p-2.5 font-bold px-6 text-base hover:bg-light hover:text-dark hover:border-dark' >Resume <LinkArrow className={'w-6 ml-1'} /> </Link>
                            <a className='text-dark ml-6 sm:ml-0 sm:mt-4 self-center underline font-semibold underline-offset-4  ' href="mailto:rangadurai27@gmail.com">Contacts</a>
                        </div>
                    </div>
                </div>
            </main>
            <Hireme />
            <Footer />
        </>
    )
}

export default Home