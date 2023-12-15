import React from 'react'

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto hero'>
      <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full max-h-[500px] bg-black/40 flex flex-col justify-center'>
              <h1 className='heroText'>Savor <span className='text-gray-200'>Every Bite.</span></h1>
              <h1 className='heroText'>Taste <span className='text-gray-200'>the Difference.</span></h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero'/>
      </div>
    </div>
  )
}
