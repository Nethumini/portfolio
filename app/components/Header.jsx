import {assets} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({isDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl pt-10 text-center mx-auto h-screen flex flex-col items-center justify-center'>
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type:'spring', stiffness:100}}>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32 mb-4' />
        </motion.div>
         <motion.h3 
           initial={{y: -20, opacity:0}}
           whileInView={{y:0, opacity:1}}
           transition={{duration:0.6, delay:0.3}}
         className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
            Hi! I'm Tharinda Pathirana
            <Image src={assets.hand_icon} alt='' className='w-6' />
         </motion.h3>
         <motion.h1 
         initial={{y: -30, opacity:0}}
         whileInView={{y: 0, opacity:1}}
         transition={{duration:0.8, delay:0.5}}
         className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Software Engineer Undergraduate Student
         </motion.h1>

         <motion.p
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.6, delay:0.7}}
         className='max-w-2xl mx-auto font-Ovo'>
         Passionate full-stack developer and 3rd-year Software Engineering student 
         at NSBM Green University. Skilled in React, Node.js, MongoDB, and modern web 
         development, dedicated to building scalable and user-friendly applications.          
         </motion.p>

         <motion.div 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:0.6, delay:0.8}}
         className='flex items-center gap-4 '>
         <a target='_blank' href='https://github.com/Nethumini' className='text-blue-500 hover:underline'>Github</a>
         <p> | </p>
         <a target='_blank' href='https://www.linkedin.com/in/tharinda-pathirana-374092255/' 
         className='text-blue-500 hover:underline'>LinkedIn</a>
         </motion.div>

         <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

            <motion.a 
            initial={{y: 30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6, delay:1}}
            href='#contact' className='px-10 py-3 border border-white rounded-full bg-black/80 hover:bg-black
            text-white flex items-center gap-2'>
                Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></motion.a>

            <motion.a
            initial={{y: 30, opacity:0}}
            whileInView={{y:0, opacity:1.2}}
            transition={{duration:0.6, delay:1}}
            href='/sample-resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'> 
                My resume<Image src={isDarkMode ? assets.download_icon_dark : assets.download_icon} alt='' className='w-4' /></motion.a>
         </div>
    </div>
  )
}

export default Header
