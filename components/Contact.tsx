import React from 'react'
import {PhoneIcon ,EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/solid'

function Contact() {
  return (
    <div className='h-screen relative flex flex-col md:flex-row  items-center justify-evenly   max-w-7xl mx-auto md:text-left   '>
     
      <h1 className='absolute top-12 text-gray-500 uppercase tracking-[10px] '> contact
      </h1>

        
      <div className=' flex absolute flex-col sapce-y-6  top-32  '>
        
        {/* Main Heading  */}
        
        <h1 className='text-2xl font-semibold text-center mb-4 '>I have got  what you need.
            <span className=' underline decoration-[#F7AB0A] '>Let's Talk
            </span>
        </h1>

        {/* Icons */}

        <div className=' space-y-8 ' >
            <div className='flex justify-center space-x-3 mr-32  '>
                <PhoneIcon  className='h-5 w-5  animate-pulse text-[#f7ab0a] '/>
                <p className='h-5 w-5'>+923207310313</p>
            </div>
            <div className='flex justify-center space-x-3 mr-32  '>
                <EnvelopeIcon  className='h-5 w-5  animate-pulse text-[#f7ab0a] '/>
                <p className='h-5 w-5'>ansishfaq725@gmail.com</p>
            </div>
            <div className='flex justify-center space-x-3 mr-32  '>
                <MapPinIcon  className='h-5 w-5  animate-pulse text-[#f7ab0a] '/>
                <p className='h-5 w-5'>Sahiwal,akistan</p>
            </div>
        </div>

        {/* Input Form */}
    
            <form action="" className='flex flex-col  space-y-1 formData absolute top-56'>
                <div className='space-x-1 flex '>
                    <input className='contactInput' placeholder='Name'  type="text" />
                    <input className='contactInput' placeholder='Email' type="text" />
                </div>    
                <input type="text" placeholder='Name1' className='contactInput'/>
                <textarea className='contactInput' name="" ></textarea>
                <button className='bg-[#f7ab0a] text-black font-semibold px-2 py-3 rounded-md '>Submit</button>
            </form>


      </div>
    </div>
  )
}

export default Contact
