import React from 'react'
import heroImg from "../assets/images/pexels-roman-odintsov-4553111.jpg"

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto hero'>
      <div className='max-h-[500px] relative'>
          <div className='absolute w-full h-full max-h-[500px] bg-black/40 flex flex-col justify-center'>
              <h1 className='heroText'>Savor <span className='text-gray-200'>Every Bite.</span></h1>
              <h1 className='heroText'>Taste <span className='text-gray-200'>the Difference.</span></h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src={heroImg} alt='hero'/>
      </div>
    </div>
  )
}
