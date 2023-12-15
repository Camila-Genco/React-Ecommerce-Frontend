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
        dispatch(loginSuccess(result.token));
        navigate("/")
      }
    } catch (err) {
      dispatch(loginFailure(err.message));
    };
  }

  return (
    <div className='max-w-[1640px] min-h-screen mx-auto p-4 bg-gray-100'>
        <form>
          <div className="mb-4">
              <label htmlFor="email">
                E-mail
              </label>
              <input onChange={handleChange} id="email" type='email' placeholder="example@mail.com"/>
          </div>
          <div className="mb-6">
              <label htmlFor="password">
                Password
              </label>
              <input onChange={handleChange} id="password" type="password" placeholder="******************"/>
          </div>
          <div className="flex items-center justify-between">
              <button className="formButton" type="submit" onClick={handleClick}>
                Sign In
              </button>
              <a className="formRedirect" href="/register">
                Don't have an account? Sign Up
              </a>
          </div>
        </form>
    </div>
       
  )
}
