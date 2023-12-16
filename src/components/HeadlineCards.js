import React from 'react'
import img1 from "../assets/images/pexels-photo-3186654.jpeg"
import img2 from "../assets/images/pexels-photo-2955819.jpeg"
import img3 from "../assets/images/pexels-photo-376464.jpeg"

export const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='card'>
                <p>Farm-Fresh Goodness</p>
                <span>Delivered to Your Doorstep</span>
                <button>Order Now</button>
            </div>
            <img className='cardImg' src={img1} alt=''/>
        </div>
        <div className='rounded-xl relative'>
            <div className='card'>
                <p>New Restaurants</p>
                <span>Added Daily</span>
                <button>Order Now</button>
            </div>
            <img className='cardImg' src={img2} alt=''/>
        </div>
        <div className='rounded-xl relative'>
            <div className='card'>
                <p>Desserts</p>
                <span>Select Your Tasty Treat</span>
                <button>Order Now</button>
            </div>
            <img className='cardImg' src={img3} alt=''/>
        </div>
    </div>
  )
}
