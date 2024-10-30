import { useState } from 'react'
import Logo from '../assets/gambar/logo2.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
   useState(0)

  return (
    <div className='bg-bermuda h-screen '>
      <div className='px-96'>
        <div className=''>
          <img className='w-72' src={Logo} alt="" />
        </div>
        <div className='w-[546px]'>
          <form className='bg-white p-16 flex flex-col gap-6' action="">
            <div className='text-3xl font-bold'>Welcome Back👋</div>
            <div className='text-lg text-abu'>Sign in with your data that you entered during
            your registration</div>
            <div className='flex flex-col gap-3 '>
              <div className='flex flex-col gap-3'>
                <label htmlFor="email">Email</label>
                <input className='py-5 px-3 rounded-md border-abu border' type="text" id='email' name='email' placeholder='Enter your email' />
              </div>
              <div className='flex flex-col gap-3'>
                <label htmlFor="password">Password</label>
                <input className='py-5 px-3 rounded-md border-abu border' type="text" id='password' name='password' placeholder='Enter your password' />
              </div>
            </div>
            <div className='text-right'><a href="">Forgot your password?</a></div>
            <div className='py-5 px-3 rounded-md bg-oren text-center text-white font-semibold'>
              <button>Login</button>
            </div>
            <div className='flex gap-3 items-center justify-between'>
              <div className='w-48 h-1 bg-midnight'></div>
              <div>or</div>
              <div className='w-48 h-1 bg-midnight'></div>
            </div>
            <div className='flex gap-2.5 justify-between rounded-md'>
              <button className='flex gap-6 py-5 px-12 border-oren border rounded-md items-center'><FcGoogle />Google</button>
              <button className='flex gap-6 py-5 px-12 border-oren border rounded-md items-center'><FaFacebook />Facebook</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
