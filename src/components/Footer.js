import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLocationArrow, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='max-w-[1640px] m-auto flex flex-col justify-center items-center p-4 bg-primary-color relative'>
        <div className='flex justify-center gap-3 text-white icons pt-3'>
            <div><FaFacebookSquare/></div>
            <div><FaTwitter/></div>
            <div><FaInstagram/></div>
            <div><FaYoutube/></div>
            <div><FaWhatsapp/></div>   
        </div>
        <div className='justify-center py-3'>
            <div className='brand text-white'>Delish<span className='text-orange-500'>Dash</span></div>
        </div>
        <div className=' text-white text-sm flex justify-center gap-2'>
            <p>DelishDash Restaurant |</p> 
            <p>xx Avenue, Houston, Texas |</p>
            <p>Telephone: +1 xxx xxx |</p>
        </div>
        <p className='text-sm text-gray-600 py-3 pb-14'>Copyright &copy; 2023. All rigts reserved.</p>
        <div className='location'>
            <FaLocationArrow/>
            <p>Find us on Map</p>
        </div>
    </div>
  )
}
