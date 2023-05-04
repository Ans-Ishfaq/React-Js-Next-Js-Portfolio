import React from 'react'
import {Cursor,useTypewriter} from "react-simple-typewriter"
import BackgrounCircles from "../components/BackgroundCircles"
import { motion } from "framer-motion";





type Props = {}

function Hero({}: Props) {

    const [text,count] = useTypewriter({
        words:[
            "<Hey, This Is Ans>",
            "<A Full Stack Developer>",
            "<And , Problem Solver>"
        ],
        loop:true,
        delaySpeed:1000,
    });
  return (
    
    <div    
        className=' flex justify-center items-center text-center flex-col  h-screen overflow-hidden'>
        

            <BackgrounCircles  />
            <img src="/ans.jpg" 
                className='relative h-28 w-28 rounded-full object-cover'
                alt="" />
            <div className='z-20  '>
                
                <p className='tracking-[6px] p-2 text-gray-400 uppercase text-xs ' >Mern Stack Developer</p>
                <span className='text-white text-2xl'>{text}</span>
                <Cursor cursorColor='red'/>
                <div className='pt-3 relative'> 
                    <button className='heroBtn ' >About</button>
                    <button className='heroBtn ' >Experience</button>
                    <button className='heroBtn ' >Skill</button>
                    <button className='heroBtn ' >Contact US</button>
                
                </div>
            </div>
    </div>
    
  )
}

export default Hero