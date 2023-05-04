import React from 'react'
import { motion } from "framer-motion";


type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2}}
     className='flex flex-col relative
    h-screen text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly  mx-auto  items-center   '>
        
        <h3 className='absolute top-24 uppercase
        tracking-[15px]  text-gray-500 text-xl   '>About</h3>


        <motion.img
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        viewport={{once:true}}
        transition={{
            duration:1,
        }}

        
        src="/ans2.jpg" alt="" 
        className=' -mb-16 md:mb-0 flex-shrink-0 h-40 w-40 rounded-full object-cover
        md:rounded-lg md:w-65 md:h-95 xl:h-[400px] xl:w-[300px]  '/>

        <div className=' space-y-10 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>Here is a Little Backround</h4>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique sed est optio neque facilis, dignissimos temporibus incidunt reiciendis doloremque architecto ad, explicabo delectus, earum alias doloribus aliquid debitis sapiente!</p>
        </div>
    </motion.div>
  )
}

export default About