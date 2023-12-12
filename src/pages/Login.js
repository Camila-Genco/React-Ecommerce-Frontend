import React from 'react'

export const Login = () => {
  return (
    <div className='max-w-[1640px] min-h-screen mx-auto p-4 bg-gray-100'>
        <form class="bg-white shadow-md rounded px-8 pt-8 pb-8 mt-10 md:max-w-[70%] lg:max-w-[40%] mx-auto">
    <div class="mb-4">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="username">
        E-mail
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type='email' placeholder="example@mail.com"/>
    </div>
    <div class="mb-6">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-black hover:bg-gray-600 font-bold py-2 px-4" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-700" href="/register">
        Don't have an account? Sign Up
      </a>
    </div>
  </form>
        </div>
       
  )
}
