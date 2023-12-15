import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoMdAddCircle, IoMdClose } from 'react-icons/io'
import {useDispatch} from "react-redux"
import { cartActions } from '../store/cartSlice.js'

export const Modal = ({setModal, food}) => {

  const {id, name, img, price, description, rating} = food;
  const dispatch = useDispatch()

  const addToCart = (id, name, image, category, exactPrice, quantity) => {
    dispatch(cartActions.addToCart({id, name, image, category, exactPrice, quantity}))
  }

  const closeModal = () => {
    setModal(false);
};

const renderStars = (rating) => {
  const stars = [];

  for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} style={{ color: 'gold' }} />);
    } 
    return stars;
  }
  
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/70 z-50 '>
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-color text-white rounded border-none z-60 h-auto w-full sm:max-w-[500px]'>
        <div>
          <IoMdClose className='absolute text-white right-3 top-3 cursor-pointer' onClick={closeModal} />
              <img src={img} className='w-[600px] h-[300px] object-cover rounded'/>
              <div className='p-3'>
              <div className='flex justify-between px-2 py-2'>
                  <p className='font-bold text-lg'>{name}</p>
                  <span className='bg-orange-500 px-3 py-1 rounded text-lg'>$ {price}</span> 
              </div>
              <div className='flex justify-between px-2 py-4'>
              <p className='text-sm text-justify pr-6'>{description}</p>
              <div>
              <span>Reviews</span>
              <div className='flex text-orange-500'>
                {renderStars(rating)} 
              </div>
              </div>
              </div>
              <div className='flex justify-end text-orange-500 my-4'>
              <span>Add to cart</span>
              <IoMdAddCircle size={25} className='mr-3 ml-2 cursor-pointer hover:text-orange-700' onClick={addToCart(id, name, img, price)}/>
              </div>
              </div>
        </div>        
      </div>
    </div>
  )
}
