import React, { useState } from 'react'

import {IoMdAddCircle} from "react-icons/io"
import {useDispatch} from "react-redux"
import { cartActions } from '../store/cartSlice.js'
import { Modal } from './Modal.js'
import useFetch from '../hooks/useFetch.js'
import { BASE_URL } from '../utils/config.js'
import { useEffect } from 'react'

export const Food = () => {
    const {data, loading, error} = useFetch(`${BASE_URL}products`);
    const [foods, setFoods] = useState([]);
    const dispatch = useDispatch()
    const [selectedFood, setSelectedFood] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [filteredFoods, setFilteredFoods] = useState([]);

    //Poblate food data
    useEffect(() => {
        if (data) {
          setFoods(data);
          setFilteredFoods(data)
        }
      }, [data]);

    //Modal
    const handleFood = (food) => {
        setSelectedFood(food);
        setShowModal(true);
    };

  
    const addToCart = (id, name, image, category, exactPrice, quantity) => {
    dispatch(cartActions.addToCart({id, name, image, category, exactPrice, quantity}))
  }
   
     //Filters
    const filterType = (category) => {
        const filtered = foods.filter((item) => item.categoryId === category);
        setFilteredFoods(filtered);
    }

    const filterPrice = (price) => {
        let filtered = [];      
        switch (price) {
          case "$":
            filtered = foods.filter((food) => food.price < 10);
            break;
          case "$$":
            filtered = foods.filter((food) => food.price > 10 && food.price < 12);
            break;
          default:
            filtered = foods.filter((food) => food.price > 12);
            break;
        }
        setFilteredFoods(filtered);
      };

  return (
    <div className='max-w-[1640] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center pb-4'>Top Rated Menu Items</h1>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div>
                <p className='font-bold text-gray-700 mx-2'>Filter by Type</p>
                <div className='flex justify-between flex-wrap filter'>
                    <button onClick={()=>setFilteredFoods(foods)}>All</button>
                    <button onClick={()=> filterType(1)}>Burgers</button>
                    <button onClick={()=> filterType(2)}>Pizzas</button>
                    <button onClick={()=> filterType(3)}>Salads</button>
                    <button onClick={()=> filterType(4)}>Chicken</button>
                </div>
            </div>
            <div>
                <p className='font-bold text-gray-700 mx-2'>Filter by Price</p>
                <div className='flex justify-between max-w-[390px] w-full filter'>
                    <button onClick={()=> filterPrice("$")}>$</button>
                    <button onClick={()=> filterPrice("$$")}>$$</button>
                    <button onClick={()=> filterPrice("$$$")}>$$$</button>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {filteredFoods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.img} alt={item.img} className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <IoMdAddCircle size={25} className='mr-4 text-orange-600 cursor-pointer' onClick={(e) => {addToCart(item.id, item.name, item.img,  item.price); handleFood(item)}}/>
                    </div>
                </div>
            ))}
        </div>
        {showModal && selectedFood && <Modal setModal={setShowModal} food={selectedFood}/>}
            
    </div>
  )
}
