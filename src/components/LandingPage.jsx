import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3" className=' w-full h-screen bg-zinc-900 pt-1'>
     <div className='textstructure mt-40 px-20 font-[Arial]'>
        {["We Create","Eye Opening","Presentations"].map((item,index)=>{
            return ( 
            <div className='masker mb-2 '>
              <div className='w-fit flex'>
                {index===1 && (
                  <motion.div 
                    initial={{width:0}} 
                    animate={{width:"6vw"}} 
                    transition={{ease:[0.76, 0, 0.24, 1], duration:1}}
                    
                    className='mr-5 rounded-md relative  bg-red-500'>
                  </motion.div>) }  
                <h1 className='uppercase text-5xl leading-none tracking-tighter font-semibold '>{item}</h1>
              </div>
            </div>
        )
        })}
     </div>

    <div className='border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tight leading none' >{item}</p>
        ))}
        <div className='start flex items-center gap-2'>
            <div className='px-5 py-2 border-[2px] border-zinc-600 rounded-full capitalize text-md font-light'>Start The Project</div>
            <div className='w-10 h-10 border-[1px] border-zinc-600 rounded-full flex items-center justify-center'>
             <span className='rotate-[45deg]'><FaArrowUpLong /></span> 
              </div>
        </div>
    </div>

    </div>
  )
}

export default LandingPage