import React from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'

export const Order = () => {
  return (
    <div className='max-w-[1640px] min-h-[calc(100vh-80px)] mx-auto p-4 bg-gray-100 flex justify-center items-center'>
        <div className=''>
            <div className='flex flex-col gap-4 items-center md:max-w-[400px]'>
                <BsFillCartCheckFill className='text-orange-500' size={40} />
                <h2 className='text-center'>You order has been succesfully processed!</h2>
                <p className='text-center text-gray-800'>
                    Thank you for shopping with us. Your order is being prepared and will be delivered soon!
                </p>
            </div>
        </div>
    </div>
  )
}
