import {assets} from '@/assets/assets'
import {workData} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

function Work({ isDarkMode }) {
  return (
    <div id='work' className={`w-full px-[12%] py-10 scroll-mt-20 ${isDarkMode ? 'text-white' : ''}`}>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Latest Work </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise
            in front-end development.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 '>
            {workData.map((project, index) => (
                <div 
                  key={index} 
                  className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                  style={{backgroundImage: `url(${project.bgImage})`}}
                >
                    <div className={`${isDarkMode 
                      ? 'bg-gray-800 text-white' 
                      : 'bg-white'} 
                      w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                      py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7`}
                    >
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {project.description}
                            </p>
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
                </div>
            ))}
        </div>
        
        <a 
          href="" 
          className={`w-max flex items-center justify-center gap-2 
          ${isDarkMode 
            ? 'text-white border-gray-400 hover:bg-gray-800' 
            : 'text-gray-700 border-gray-700 hover:bg-[#fcf4ff]'} 
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
        </a>
    </div>
  )
}

export default Work