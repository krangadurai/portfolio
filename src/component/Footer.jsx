import React from 'react';

const Footer = () => {
  return (
    <div className='flex border-t-4 border-b-gray-950 py-8 px-32 flex-row md:flex-col md:px-10 sm:flex-col  sm:px-0 '>
      <span className='w-1/3 text-left md:text-center md:w-full sm:text-center sm:w-full'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <span className='w-1/3 text-center md:text-center md:w-full sm:text-center sm:w-full'>Developed by Me</span>
      <span className='w-1/3 text-end md:text-center md:w-full sm:text-center sm:w-full'> Credit to<a href="https://minimal-nextjs-portfolio-website.vercel.app/" className=" bottom-0 right-0 text-gray-500 text-sm px-2 py-1" target="_blank" rel="noopener noreferrer"><span className='text-pink-500'>♡ CodeBucks  </span> </a> for the design inspiration.</span>
    </div>
  );
};

export default Footer;
