import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-speed="-.05"className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[Arial] text-[4vw] leading-[4.5vw] tracking-tighter'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia sunt enim quidem dolor. Maxime excepturi, quas libero sed consequatur omnis delectus possimus distinctio quis totam veritatis cupiditate, voluptates rerum commodi.
        </h1>
        <div className='w-full flex gap-5 pt-10 mt-20 border-t-[2px] border-[#a1b562]' >
            <div className='w-1/2'>
            <h1 className='text-7xl'>Our approach</h1>
            <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'></div>
        </div>
    </div>
  )
}

export default About