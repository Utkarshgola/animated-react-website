import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen bg-zinc-900 p-20 flex gap-5'>
        <div className='w-1/2 font-[Arial]'>
            <div className='heading'>
                <h1 className='text-[6vw] uppercase font-semibold leading-none mb-2'>Eye-</h1>
                <h1 className='text-[6vw] uppercase font-semibold leading-none mb-2'>Opening</h1>
            </div>
        </div>

        <div className='w-1/2 font-[Arial]'>
        <h1 className='text-[5vw] uppercase font-semibold leading-none mb-2'>Presentations</h1>
        </div>
    </div>
  )
}

export default Footer