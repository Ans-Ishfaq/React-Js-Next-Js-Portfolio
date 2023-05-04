import React from 'react'
import {SocialIcon} from "react-social-icons";
import { motion } from "framer-motion";

 
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex justify-between max-w-4xl   mx-auto'> 
        <motion.div 
        initial={{
            x:-500,
            scale:0.5,
            opacity:0
        }}

        animate={{
            x:0,
            scale:1,
            opacity:1, 
        }}
        transition={{
            duration:1.5
        }}
            className='flex flex-row items-center'>
            

            <SocialIcon fgColor='gray' bgColor='transparent' url="https://linkedin.com/" />
            <SocialIcon fgColor='gray' bgColor='transparent' url="https://facebook.com/" />
            <SocialIcon fgColor='gray' bgColor='transparent' url="https://instagram.com/" />
            <SocialIcon fgColor='gray' bgColor='transparent' url="https://youtube.com/" />
        </motion.div>
        <motion.div

            initial={{
                x:500,
                scale:0.5,
                opacity:0
            }}

            animate={{
                x:0,
                scale:1,
                opacity:1, 
            }}
            transition={{
                duration:1.5
            }}
                    
            className='flex items-center' >
            <SocialIcon fgColor='gray' bgColor='transparent' url="https://email.com/" />
            <p className=" uppercase text-gray-400 hidden md:inline-flex text-sm" >Get In Touch</p>
        </motion.div>
    </header>
  )
}