import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function Skill({}: Props) {
  return (
    <div className='border bg-[#242424] rounded-full group relative flex cursor-pointer' >
        <motion.img 
        initial={{
          //  x: directionLeft ? -200 : 200,
           opacity:0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        className='h-12 w-12 md:h-[32] md:w-[32]
        border border-gray-900 rounded-full filter hover:grayscale transition duration-300 ease-in-out'
        src="https://cdn.worldvectorlogo.com/logos/react-1.svg" alt="" />

        <div className='absolute opacity-0 group-hover:bg-white group-hover:opacity-80 transition duration-300 ease-in-out  flex h-12 w-12 md:h-[32] md:w-[32] border border-gray-900 rounded-full text-center z-0'>
            <div className=' flex justify-center items-center h-full '>
                <p className=' text-xl font-bold text-black opacity-80'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill