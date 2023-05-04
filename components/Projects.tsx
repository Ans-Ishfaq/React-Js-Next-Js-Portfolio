import React from 'react'
import {motion} from 'framer-motion'

function Projects() {
  const projects= [1,2,3,4,5]
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.3}}
    
    
    className='h-screen flex flex-col relative overflow-hidden text-left md-flex:row max-w-full justify-evenly mx-auto  items-center'>
      <h1 className='absolute top-24  text-gray-500 upercase tracking-[10px]' >Projects</h1>

        <div className='relative overflow-y-hidden overflow-x-scroll snap-x snap-mandatory flex w-full z-20'>
        { projects.map((project,i)=>(
            <div className='w-screen  h-screen flex flex-col flex-shrink-0 space-y-5 snap-center justify-center items-center p-20 md:p-44 relative'>
                <motion.img
                initial={{y:-200 , opacity:0 }}
                whileInView={{ y:0  , opacity:1}}
                transition={{duration:1.3}}
                viewport={{once:true}} 

                className='md:w-[50%] object-cover  md:h-[90%]'
                src="https://img.freepik.com/premium-psd/digital-device-screen-mockup-vector-with-laptop-smartphone-with-gradient-wallpapers_53876-129214.jpg?w=740" alt="" />
                <div>
                    <h1 className=' text-2xl font-semibold text-center'>                    <span className='underline decoration-[#F7AB0A]' >Case Study {i + 1} of {projects.length}:</span>{" "}
                     Web Clone
                     </h1>

                    <p className='tex-lg text-center md:text-left p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorum veritatis! Quam dolore molestiae saepe magnam, dignissimos voluptatibus iusto, consequuntur consectetur </p>
                </div>
                
            </div>
        )) }
        </div>

      <div className='w-full absolute left-0  top-[30%] h-[300px] -skew-y-12 bg-[#F7AB0A]/10 '>

      </div>
    </motion.div>
  )
}

export default Projects
