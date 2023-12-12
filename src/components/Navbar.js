import React from 'react'
import { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import {MdFavorite, MdHelp} from "react-icons/md"
import {FaWallet, FaUserFriends} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const quantity = useSelector((state )=> state.cart.totalQuantity)
    const navigate = useNavigate();


  return (
    <header className='max-w-[1640px] m-auto flex justify-between items-center p-4 sticky top-0 z-50 bg-primary-color'>
        <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={20} className='text-white'/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 text-white'>Best <span className='font-bold'>Eats</span></h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
        </div>

        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
           <AiOutlineSearch size={20}/> 
           <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search foods'/>
        </div>

        <button className='bg-white text-black hidden md:flex items-center py-2 px-4 rounded-full' onClick={()=> navigate("/cart")}>
            <BsFillCartFill sixe={20} className='mr-2'/> 
            <span>{quantity}</span>
        </button>

        {/*Overlay*/}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
        </div> : ""}
        
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={20} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800 cursor-pointer'>
                    <li className='text-xl py-4 flex hover:bg-gray-100'><TbTruckDelivery size={25} className='mr-4' onClick={()=> navigate("/cart")}/>Order</li>
                    <li className='text-xl py-4 flex hover:bg-gray-100'><MdFavorite size={25} className='mr-4'/>Favorites</li>
                    <li className='text-xl py-4 flex hover:bg-gray-100'><FaWallet size={25} className='mr-4'/>Wallet</li>
                    <li className='text-xl py-4 flex hover:bg-gray-100'><MdHelp size={25} className='mr-4'/>Help</li>
                    <li className='text-xl py-4 flex hover:bg-gray-100'><AiFillTag size={25} className='mr-4'/>Promotions</li>
                    <li className='text-xl py-4 flex hover:bg-gray-100'><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
                    <li className='text-xl py-4 flex hover:bg-gray-100'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
