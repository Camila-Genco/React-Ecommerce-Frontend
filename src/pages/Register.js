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

  return (
    <div className='max-w-[1640px] min-h-screen mx-auto p-4 bg-gray-100'>
        <form>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="name">
                  First Name
                </label>
                <input id="name" type="text" placeholder="Jane" onChange={handleChange}/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label htmlFor="lastName">
                  Last Name
                </label>
                <input id="lastName" type="text" placeholder="Doe" onChange={handleChange}/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                  <label htmlFor="email" >
                    E-mail Address
                  </label>
                  <input id="email" type="email" placeholder="example@mail.com" onChange={handleChange}/>
              </div>
              <div className="w-full px-3">
                  <label htmlFor="password">
                    Password
                  </label>
                  <input id="password" type="password" placeholder="******************" onChange={handleChange}/>
                  <p className="text-gray-600 text-xs italic">Use a mix of letters, numbers, and symbols.</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="city">
                  City
                </label>
                <input id="city" type="text" placeholder="Buenos Aires" onChange={handleChange}/>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="address">
                  Address
                </label>
                <input id="address" type="text" placeholder="123 Fake Street" onChange={handleChange}/>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label htmlFor="zip">
                  Zip
                </label>
                <input id="zip" type="number" placeholder="90210" onChange={handleChange}/>
              </div>
              <div className="w-full flex items-center justify-between mx-3 mt-6">
                <button className="formButton" type="submit" onClick={handleClick}>
                  Sign Up
                </button>
                <a className="formRedirect" href="/login">
                  Already have an account? Login
                </a>
              </div>
            </div>
        </form>
    </div>
  )
}
