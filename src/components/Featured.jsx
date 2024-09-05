import React, { useState } from 'react'
import Card1 from '../assets/card-img1.png'
import Card2 from '../assets/card-img2.jpg'
import { motion, useAnimation } from 'framer-motion'

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover =  (index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd =  (index)=>{
    cards[index].start({y:"100%"})
  }

  return (
    <div className='w-full py-20'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-7xl font-[Arial] tracking-tight'>Featured projects</h1>
        </div>
        
        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
                <motion.div 
                  onHoverStart={()=>handleHover(0)}
                  onHoverEnd={()=>handleHoverEnd(0)}
                  
                   className='cardcontainer w-1/2 h-[80vh] relative '> 
                <h1 className='heading flex overflow-hidden absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-[Arial]  leading-none tracking-tighter text-[#CDEA68]'>
                  {"FYDE".split('').map((item,index)=>(
                    <motion.span
                     initial={{y:"100%"}}
                     animate={cards[0]}
                     transition={{ease: [0.22,1,0.36,1], delay: index*0.06}}
                     className='inline-block'>{item}
                     </motion.span>))}
                </h1> 
                    <div className=' card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src={Card1} alt="" srcset="" />
                    </div>
                </motion.div>

                <motion.div 
                onHoverStart={()=>handleHover(1)}
                onHoverEnd={()=>handleHoverEnd(1)}
                className='cardcontainer w-1/2 h-[80vh]  relative'>
                <h1 className='heading flex overflow-hidden absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl font-[Arial]  leading-none tracking-tighter text-[#CDEA68]'>
                  {"VISE".split('').map((item,index)=>(
                    <motion.span
                    initial={{y:"100%"}}
                    animate={cards[1]}
                    transition={{ease: [0.22,1,0.36,1], delay: index*0.06}}
                    className='inline-block'>{item}
                    </motion.span>))}
                </h1> 
                    <div className=' card w-full h-full bg-green-600 rounded-xl overflow-hidden '>
                        <img className='w-full h-full bg-cover' src={Card2} alt="" srcset="" />
                    </div>
                </motion.div >
            </div>
        </div>
    </div>
  )
}

export default Featured