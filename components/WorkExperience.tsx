import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { motion } from "framer-motion";


type Props = {}

function WorkExperience
({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    className='h-screen relative flex flex-col overflow-hidden  items-center  text-left
    md-flex-row max-w-full px-10 justify-evenly mx-auto '>
        
        <h3 className='aboslute top-24 uppercase text-gray-500 tracking-[10px]'>Great Work</h3>

        <div className='w-full flex  space-x-14  overflow-x-scroll p-24 snap-x snap-mandatory
        '>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
         </div>
    </motion.div>
  )
}

export default WorkExperience
