import React,{useState} from 'react'


const Login = ({setToggle}) => {
  return (
    <div className='bg-amber-50 w-90 p-6 rounded-xl'>
      <form className=' flex flex-col gap-4' action="">
        <h1>LogIn</h1>
        <input className='p-2 border hover:bg-blue-600 border-gray-400 rounded' type="text" placeholder="Email" />
        <input className='p-2  border hover:bg-blue-600 border-gray-400 rounded' type="password" placeholder="Password" />
        <button className='p-2 bg-blue-800 rounded' type="submit">Login</button>
      </form>
      <p>Did't have an account? <span onClick={() => setToggle((prev) => !prev)} className='text-blue-600 cursor-pointer'>Register here</span></p>
    </div>
  )
}

export default Login
