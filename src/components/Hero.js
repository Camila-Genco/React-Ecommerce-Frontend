import React from 'react'

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto hero'>
      <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full max-h-[500px] text-gray-200 bg-black/40 flex flex-col justify-center'>
              <h1 className='heroText'>The <span className='text-orange-500'>Best</span></h1>
              <h1 className='heroText'>Foods <span className='text-orange-500'>Delivered</span></h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero'/>
      </div>
    </div>
  )
}
