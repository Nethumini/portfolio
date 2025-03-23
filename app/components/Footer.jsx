import {assets} from '@/assets/assets'
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='mt-20'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          tharindapathirana27@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>@ 2025 Tharinda Pathirana. All right reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' href='https://github.com/Nethumini'>Github</a>
          </li>
          <li>
            <a target='_blank' href='https://www.linkedin.com/in/tharinda-pathirana-374092255/'>LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
