import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function ExperienceCard({}: Props) {
  return (
   
    <article className=' items-center  flex-shrink-0 space-y-7 rounded-xl w-[300px] h-[520px] md:w-[400px] xl:w-[580px] 
    bg-[#292929] px-8 py-4 opacity-50 hover:opacity-100 transition-opacity duration-200
    snap-center  overflow-hidden md:px-20'>        

        <motion.img
        initial={{opacity:0,y:-100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.2}}
        
                className='block mx-auto h-20 w-20 
                xl:w-[120px] xl:h-[120px] object-cover object-center
                rounded-full' 
                src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png" alt="" />
        <div className=' md:px-0'>
                <h1 className=' uppercase text-white font-light tracking-wide text-xl'>Fellow At Devnation</h1>
                <p className='font-semibold uppercase py-2'>Devnation</p>
                <div className='flex space-x-2'>
                <img className=' h-6 w-6 rounded-full ' 
                src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png" alt="" />
                  <img className=' h-6 w-6 rounded-full' 
                src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png" alt="" />  <img className=' h-6 w-6 rounded-full' 
                src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png" alt="" />
              
            </div>
            </div>
            <p className=' text-sm text-gray-500'>Since 25 December 2021</p>
            <ul className=' list-disc pl-5 text-sm space-y-3'>
                <li>Google Google Google Google Google</li>
                <li>Facebook Facebook Facebook Facebook Facebook</li>
                <li>Microsoft Microsoft Microsoft Microsoft Microsoft</li>
                <li>Amazon Amazon Amazon Amazon Amazon</li>
            </ul>
        
    
    
    </article>
  )
}

export default ExperienceCard