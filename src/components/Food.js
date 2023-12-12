import React, { useState } from 'react'
import {data} from "../data/data.js"
import {IoMdAddCircle} from "react-icons/io"
import {useDispatch} from "react-redux"
import { cartActions } from '../store/cartSlice.js'
import { Modal } from './Modal.js'

export const Food = () => {
    const [foods, setFoods] = useState(data);
    const dispatch = useDispatch()

    const [selectedFood, setSelectedFood] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleFood = (food) => {
        setSelectedFood(food);
        setShowModal(true);
    };


    const addToCart = (id, name, image, category, exactPrice, quantity) => {
    dispatch(cartActions.addToCart({id, name, image, category, exactPrice, quantity}))
  }
   
    const filterType = (category) => {
        setFoods(
            data.filter((item)=> {
                return item.category === category;
            })
        )
    }

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) =>{
                return item.price === price;
            })
        )
    }

  return (
    <div className='max-w-[1640] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center pb-4'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-gray-700 mx-2'>Filter by Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=> filterType("burger")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={()=> filterType("pizza")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizzas</button>
                    <button onClick={()=> filterType("salad")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={()=> filterType("chicken")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            <div>
                <p className='font-bold text-gray-700 mx-2'>Filter by Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=> filterPrice("$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={()=> filterPrice("$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={()=> filterPrice("$$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={()=> filterPrice("$$$$")} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <span className='bg-gray-200 rounded px-4'>${item.exactPrice}</span>
                        <IoMdAddCircle size={25} className='mr-4 text-orange-600 cursor-pointer' onClick={(e) => {addToCart(item.id, item.name, item.image, item.category, item.exactPrice, item.quantity); handleFood(item)}}/>
                    </div>
                </div>
            ))}
        </div>
        {showModal && selectedFood && <Modal setModal={setShowModal} food={selectedFood}/>}
            
    </div>
  )
}
