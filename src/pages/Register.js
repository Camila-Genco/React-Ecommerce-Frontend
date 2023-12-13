import React from 'react'
import { useState } from 'react'
import { BASE_URL } from '../utils/config'

export const Register = () => {

  const [credentials, setCredentials] = useState({
    name: undefined,
    lastName: undefined,
    password: undefined,
    email: undefined,
    city: undefined,
    address: undefined,
    zip: undefined
  })

  const handleChange = e =>{
    setCredentials(prev =>({...prev, [e.target.id]:e.target.value}) )
  }

  const handleClick = async e =>{
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}users`, {
        method: "post",
        headers:{
          "content-type": "application/json"
        }, 
        body: JSON.stringify(credentials)
      })
      const result = await res.json();
      if(!res.ok) alert(result.message);
    } catch (err) {
      alert(err.message)
    };
  }

  console.log(credentials);
  return (
    <div className='max-w-[1640px] min-h-screen mx-auto p-4 bg-gray-100'>
        <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 mt-10 md:max-w-[70%] lg:max-w-[40%] mx-auto">
  <div className="flex flex-wrap -mx-3">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane" onChange={handleChange}/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="lastName" type="text" placeholder="Doe" onChange={handleChange}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email" >
        E-mail Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="example@mail.com" onChange={handleChange}/>
    </div>
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="******************" onChange={handleChange}/>
      <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="city">
        City
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" type="text" placeholder="Buenos Aires" onChange={handleChange}/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
        Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="address" type="text" placeholder="123 Fake Street" onChange={handleChange}/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="zip">
        Zip
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="zip" type="number" placeholder="90210" onChange={handleChange}/>
    </div>
    <div className="w-full flex items-center justify-between mx-3 mt-6">
      <button className="bg-black hover:bg-gray-600 font-bold py-2 px-4" type="submit" onClick={handleClick}>
        Sign Up
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700" href="/login">
        Already have an account? Login
      </a>
    </div>
  </div>
</form>
    </div>
  )
}
