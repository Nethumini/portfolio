import {assets} from '@/assets/assets'
import Image from 'next/image';
import React, {useState} from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("")

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "38ee47d1-9181-4d57-9ebf-05566950e030");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center dark:bg-black dark:bg-none'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect With Me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 font-Ovo'>
            I'd love to here from you! If you have any questions, commencts, or feedback please use the form below.
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto '>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                <input type="text" placeholder='Enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                 dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300'
                name='name'/>
                <input type="email" placeholder='Enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                 dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300'
                name='email'/>
            </div>
            <textarea rows='5' placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                 dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300' 
            name='message'></textarea>
            <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
             text-white rounded-full mx-auto hover:bg-black border-1 dark:border-gray-400 duration-500'>
                Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4' />
            </button>

            <p>{result}</p>
        </form>
    </div>
  )
}

export default Contact
