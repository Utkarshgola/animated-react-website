import React from 'react'

function CardsEnd() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]'>
          <img className="w-32" src="" alt="" />
        <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy; MY-SITE</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
         <button className='absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full'>&copy; MY-SITE</button>
        </div>
        <div className='card rounded-xl w-1/2 h-full bg-[#192826]'></div>
      </div>
    </div>
  )
}

export default CardsEnd