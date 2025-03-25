import {assets} from '@/assets/assets'
import {infoList} from '@/assets/assets'
import {toolsData} from '@/assets/assets'
import Image from 'next/image';
import { motion } from "motion/react"
import React from 'react'

const About = ({ isDarkMode }) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-0 scroll-mt-20'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      >
      <motion.h4 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1, delay:0.3}}
      className='text-center mb-2 pt-5 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2 
      initial={{opacity:0, y:-20}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1, delay:0.5}}
      className='text-center text-5xl font-Ovo'>About me</motion.h2>

      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
       className='flex w-full flex-col lg:flex-row items-center gap-10 my-10'>
        <motion.div 
        initial={{opacity:0, scale:0.9}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:0.5, delay:0.6}}
        className='w-64 sm:w-80 pb-20 rounded-3xl max-w-none'> 
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.8}}
        className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>I am an experianced Fullstack developer with over a decade 
            of professional expertise in the field. throughout my career, i have had the privilege of colloborating
             with prestigious organizations, contributin to their success and growth.</p>

            <motion.ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8, delay:1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li 
              whileHover={{scale:1.05}}
                className={`${isDarkMode 
                  ? 'bg-white-500 border-gray-700 hover:bg-gray-900' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'} 
                  border rounded-xl p-6 cursor-pointer 
                  hover:-translate-y-2 duration-300 hover:shadow-lg transition-all group`} 
                key={index}
              >
                <div className={`${isDarkMode 
                  ? 'bg-blue-900 group-hover:bg-white' 
                  : 'bg-blue-100 group-hover:bg-black'} 
                  w-12 h-12 rounded-full flex items-center justify-center mb-4 
                  transition-colors duration-300`}
                >
                  <Image 
                    src={isDarkMode ? (iconDark || icon) : icon} 
                    alt={title} 
                    className={`w-6 ${isDarkMode 
                      ? 'group-hover:brightness-0 group-hover:invert-0' 
                      : 'group-hover:brightness-0 group-hover:invert'} 
                      transition-all duration-300`}
                  />
                </div>
                <h3 className={`my-4 font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                  {title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

            <motion.h4 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1.3, delay:0.5}}
            className={`${isDarkMode ? 'text-white' : 'text-gray-700'} my-6 font-Ovo`}>
              Tools I use</motion.h4>

            <motion.ul 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5, delay:0.6}}
            className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                <motion.li 
                whileHover={{scale:1.1}}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border 
                border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}>
                  <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                </motion.li>
              ))}

            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
