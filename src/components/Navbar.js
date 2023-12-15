import React from 'react'
import { useState } from 'react'

import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import {MdHelp} from "react-icons/md"
import {FaWallet, FaUserFriends, FaUserCheck, FaUserTimes} from "react-icons/fa"

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {logout} from '../store/authSlice'

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [isDeliverySelected, setIsDeliverySelected] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const quantity = useSelector((state )=> state.cart.totalQuantity)
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();


  return (
    <header className='max-w-[1640px] m-auto flex justify-between items-center p-4 sticky top-0 z-50 bg-primary-color'>
        <div className='flex items-center gap-4'>
            {/*Sidemenu roll out*/}
            <div onClick={() => setNav(!nav)}>
                <AiOutlineMenu size={20} className='text-white cursor-pointer'/>
            </div>
            {/*Restaurant logo*/}
            <h1 className='text-white cursor-pointer' onClick={()=> navigate("/")}>Delish<span className='text-orange-500'>Dash</span></h1>
            {/*Delivery toggle*/}
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className={`option ${isDeliverySelected ? 'selected'  : ''}`} onClick={() => setIsDeliverySelected(!isDeliverySelected)}>Delivery</p>
                <p className={`option ${isDeliverySelected ? '' : 'selected'}`} onClick={() => setIsDeliverySelected(!isDeliverySelected)}>Pickup</p>
            </div>
        </div>
        
        {/*Search bar*/}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
           <AiOutlineSearch size={20}/> 
           <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search'/>
        </div>

        <div className='flex gap-6 items-center'>
        {/*Account options*/}
        {
            user? 
            <div className='gap-4 relative inline-block text-left'>
                <FaUserCheck size={25} className='text-orange-500 cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}/> 
                {/*Dropdown*/}
                {isDropdownOpen && (
                <div className="dropdown">            
                <a href="/" onClick={()=>dispatch(logout())}>Logout</a>
                </div>)}
            </div> :
            <div className='gap-4 relative inline-block text-left'>
                <FaUserTimes size={25} className='text-orange-500 cursor-pointer' onClick={() => setIsDropdownOpen(!isDropdownOpen)}/> 
                {/*Dropdown*/}
                {isDropdownOpen && (
                <div className="dropdown">                
                <a href="/login">Login</a>
                <a href="/register">Sign In</a>
                </div>)}
            </div>
        }
        {/*Cart*/}
            <button className='cart' onClick={()=> navigate("/cart")}>
                <BsFillCartFill size={20} className='mr-2'/> 
                <span>{quantity}</span>
            </button>
        </div>

        {/*Overlay*/}
        {nav ? <div className='overlay'>
        </div> : ""}
        
        {/*Sidebar*/}
        <div className={nav ? 'navOpen' : 'navClosed'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={20} className='absolute right-4 top-4 cursor-pointer'/>
            <h2 className='p-4'>Delish<span className='text-orange-500'>Dash</span></h2>
            <nav>
                <ul>
                    <li><TbTruckDelivery size={25} className='mr-4'/>Order</li>
                    <li onClick={()=> navigate("/cart")}><BsFillCartFill size={25} className='mr-4'/>Cart</li>
                    <li><FaWallet size={25} className='mr-4'/>Wallet</li>
                    <li><MdHelp size={25} className='mr-4'/>Help</li>
                    <li><AiFillTag size={25} className='mr-4'/>Promotions</li>
                    <li><BsFillSaveFill size={25} className='mr-4'/>Best Ones</li>
                    <li><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
