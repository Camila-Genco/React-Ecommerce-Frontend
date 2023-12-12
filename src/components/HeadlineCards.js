import React from 'react'

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
        <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
            <p className='font-bold text-2xl pt-4'>Sun's Out, BOGO's Out</p>
            <p>Through 8/26</p>
            <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
        <div className='rounded-xl relative'>
        <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
            <p className='font-bold text-2xl pt-4'>New Restaurants</p>
            <p>Added Daily</p>
            <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
        <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white px-4'>
            <p className='font-bold text-2xl pt-4'>Desserts</p>
            <p>Select Your Tasty Treat</p>
            <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
    </div>
  )
}
