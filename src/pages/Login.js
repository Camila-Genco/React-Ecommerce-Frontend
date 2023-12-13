import React from 'react'
import { useState } from 'react'
import { BASE_URL } from '../utils/config'
import { loginStart, loginSuccess, loginFailure } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  })

  const handleChange = e =>{
    setCredentials(prev =>({...prev, [e.target.id]:e.target.value}) )
  }

  const handleClick = async e =>{
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await fetch(`${BASE_URL}auth/login`, {
        method: "post",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json();

      if(!res.ok) {
        alert(result.message);
        dispatch(loginFailure(result.message));
      } else {
        dispatch(loginSuccess(result.data));
        console.log("Successful login");
        navigate("/")
      }
    } catch (err) {
      dispatch(loginFailure(err.message));
      console.log("Failed to log");
    };
  }

  return (
    <div className='max-w-[1640px] min-h-screen mx-auto p-4 bg-gray-100'>
        <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 mt-10 md:max-w-[70%] lg:max-w-[40%] mx-auto">
          <div className="mb-4">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type='email' placeholder="example@mail.com"/>
          </div>
          <div className="mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          </div>
          <div className="flex items-center justify-between">
              <button className="bg-black hover:bg-gray-600 font-bold py-2 px-4" type="submit" onClick={handleClick}>
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700" href="/register">
                Don't have an account? Sign Up
              </a>
          </div>
        </form>
    </div>
       
  )
}
