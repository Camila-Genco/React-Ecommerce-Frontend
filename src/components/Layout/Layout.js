import React from 'react'
import { Routers } from '../../routes/Routers'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

export const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Routers/>
        <Footer/>
    </div>
  )
}
