import {assets} from '@/assets/assets'
import {workData} from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"
import React from 'react'

function Work({ isDarkMode }) {
  return (
    <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
     id='work' className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'text-white' : ''}`}>

        <motion.h4
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.3}}
         className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>

        <motion.h2 
        initial={{y:-20, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.3}}
        className='text-center text-5xl font-Ovo'>My Latest Work </motion.h2>
        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise
            in full-stack development. i am passionate about building user-friendly applications with modern
            technologies.
        </motion.p>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.9}}
        className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 '>
            {workData.map((project, index) => (
                <motion.div 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
                  key={index} 
                  className='aspect-square bg-no-repeat bg-cover bg-center border-1 border-gray-300 rounded-lg relative cursor-pointer group'
                  style={{backgroundImage: `url(${project.bgImage})`}}
                >
                  <a href={project.link}>
                    <div className={`${isDarkMode 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-[#e9e9f5]'} 
                      w-10/11 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                      py-1 px-5 flex items-center justify-between duration-500 group-hover:bottom-7`}
                    >
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {project.description}
                            </p>
                            <p className='text-xs mt-1 text-gray-400'>{project.date}</p>
                        </div>
                        <div className={`border rounded-full ${isDarkMode 
                          ? 'border-white shadow-[2px_2px_0_#fff] group-hover:bg-blue-400' 
                          : 'border-black shadow-[2px_2px_0_#000] group-hover:bg-lime-300'} 
                          w-9 aspect-square flex items-center justify-center transition`}
                        >
                            <Image 
                              src={assets.send_icon} 
                              alt='send icon' 
                              className={`w-5 ${isDarkMode ? 'brightness-0 invert' : ''}`} 
                            />
                        </div>
                    </div>
                    </a>
                </motion.div>
            ))}
        </motion.div>
        
        <motion.a 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:1.1}}
          href="" 
          className={`w-max flex items-center justify-center gap-2 
          ${isDarkMode 
            ? 'text-white border-gray-400 hover:bg-gray-800' 
            : 'text-gray-700 border-gray-700 hover:bg-[#e8f0fe]'} 
          border-[0.5px] rounded-full py-3 px-10 mx-auto my-10 duration-500`}
        >
            Show more
            <Image 
              src={isDarkMode && assets.right_arrow_bold_white 
                ? assets.right_arrow_bold_white 
                : assets.right_arrow_bold} 
              alt='Right arrow' 
              className={`w-4 ${isDarkMode && !assets.right_arrow_bold_white ? 'brightness-0 invert' : ''}`} 
            />
        </motion.a>
    </motion.div>
  )
}

export default Work