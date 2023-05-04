import React from 'react'
import { motion } from "framer-motion";


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        border:["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration:2.5,
    }}

        className='relative  flex justify-center items-center mt-9   '>
        <div className='absolute border border-[#333333] rounded-full h-[270px] w-[270px] animate-ping mt-32'/>
        {/* <div className='absolute border border-[#333333] rounded-full h-[340px] w-[340px]  mt-32'/> */}
        <div className='absolute border border-[#333333] rounded-full h-[400px] w-[400px]  mt-32'/>
        <div className='absolute border border-[#F7AB0A] rounded-full h-[470px] w-[470px] animate-pulse mt-32 opacity-20'/>
        <div className='absolute border border-[#333333] rounded-full h-[600px] w-[600px]  mt-32'/>

    </motion.div>
  )
}

export default BackgroundCircles