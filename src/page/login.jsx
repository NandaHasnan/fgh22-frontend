import { useState } from 'react';
import Logo from '../assets/gambar/logo2.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";

function App() {
  useState();

  return (
    <div className="bg-bg-marvel bg-no-repeat bg-cover h-screen bg-center flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <img className="w-40" src={Logo} alt="Tickitz Logo" />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 ">
          <form className="flex flex-col gap-6">
            <div className='text-3xl font-bold'>Welcome Back👋</div>
            <div className='text-lg text-abu'>Sign in with your data that you entered during your registration</div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input className="py-3 px-4 rounded-md border border-abu focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-600">Password</label>
              <div className="relative w-full">
                <button className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                  <IoEyeOutline className="text-[#A0A3BD]" />
                </button>
                <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg focus:outline-none' type="text" id='con-pass' name='con-pass' placeholder='Write your password'/>
              </div>
            </div>
            <a className="text-right text-sm text-gray-600 mt-6">Forgot your password?</a>
            <Link className='w-[383px] py-5 px-3 rounded-md bg-oren hover:bg-orenMuda text-center text-white font-semibold' to="/home">Login</Link>
            <div className='flex gap-3 items-center justify-between'>
                <div className='w-48 h-1 bg-abu'></div>
                <div>or</div>
                <div className='w-48 h-1 bg-abu'></div> 
            </div>
            <div className="flex gap-4">
              <Link to='https://www.google.com/' className="flex items-center justify-center gap-2 py-3 px-4 shadow-xl rounded-lg w-full hover:bg-gray-100">
                <FcGoogle className="text-xl" />Google
              </Link>
              <Link to='https://www.facebook.com/' className="flex items-center justify-center gap-2 py-3 px-4 shadow-xl rounded-lg w-full hover:bg-gray-100">
                <FaFacebook className="text-biru text-xl" />Facebook
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;