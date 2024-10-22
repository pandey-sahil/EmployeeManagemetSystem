import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const submitHandler = (e) => { 
    e.preventDefault()
    console.log({
      email: email,
      password: password,
    })
    setEmail("")
    setPassword("")
  }; 

  return (
    <div className='flex items-center justify-center h-screen bg-[#111]'>
      <div className='bg-[#222] p-8 rounded-lg shadow-lg w-full max-w-sm border border-emerald-500'>
        <h2 className='text-white text-2xl font-semibold mb-6 text-center'>Login</h2>
        <form className='space-y-4' onSubmit={submitHandler}>
          <input
            type='email'
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            placeholder='Enter your email'
            className='w-full px-4 py-2 text-gray-200 bg-[#111] border border-emerald-500 rounded focus:outline-none focus:border-emerald-400'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            placeholder='Enter your password'
            className='w-full px-4 py-2 text-gray-200 bg-[#111] border border-emerald-500 rounded focus:outline-none focus:border-emerald-400'
          />
          <button
            type='submit'
            className='w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition duration-300'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
