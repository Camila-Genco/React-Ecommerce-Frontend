import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cart } from '../pages/Cart';
import { Register } from '../pages/Register';


export const Routers = () => {
  return (
    <Routes>
        <Route strict path='/' element={<Home/>}/>
        <Route strict path='/cart' element={<Cart/>}/>
        <Route strict path='/login' element={<Login/>}/>
        <Route strict path='/register' element={<Register/>}/>
    </Routes>
  )
}
