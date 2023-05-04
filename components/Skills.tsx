import React from 'react'
import Skill from '../components/Skill'
import { motion } from "framer-motion";


type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}

     className='h-screen flex flex-col items-center justify-center relative md:text-left xl:flex-row max-w-[2000px]'>
        <h1 className='absolute top-24 uppercase text-gray-500 tracking-[10px]'>Skills</h1>
        <p className='absolute top-32 text-sm text-gray-500 ' >Hover Over A Skill For Currency Proefficiency</p>

        <div className='grid grid-cols-4 gap-4'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />



        </div>
    </motion.div>
  )
}

export default Skills