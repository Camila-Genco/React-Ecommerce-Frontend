import React from 'react'
import { Routers } from '../../routes/Routers'
import { Navbar } from '../Navbar'

export const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Routers/>
    </div>
  )
}
