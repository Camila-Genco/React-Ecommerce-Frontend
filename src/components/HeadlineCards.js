import React from 'react'

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='card'>
                <p>Farm-Fresh Goodness</p>
                <span>Delivered to Your Doorstep</span>
                <button>Order Now</button>
            </div>
            <img className='cardImg' src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
        <div className='rounded-xl relative'>
            <div className='card'>
                <p>New Restaurants</p>
                <span>Added Daily</span>
                <button>Order Now</button>
            </div>
            <img className='cardImg' src='https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
        <div className='rounded-xl relative'>
            <div className='card'>
                <p>Desserts</p>
                <span>Select Your Tasty Treat</span>
                <button>Order Now</button>
            </div>
            <img className='cardImg' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
        </div>
    </div>
  )
}
