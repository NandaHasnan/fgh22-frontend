import { useState } from 'react';
import Logo from '../assets/gambar/logo2.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  useState();

  return (
    <div className="bg-bg-marvel bg-no-repeat bg-cover h-screen bg-center flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center mb-8">
          <img className="w-40" src={Logo} alt="Tickitz Logo" />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <form className="flex flex-col gap-6">
            <div className='text-3xl font-bold'>Welcome Back👋</div>
            <div className='text-lg text-abu'>Sign in with your data that you entered during your registration</div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input className="py-3 px-4 rounded-md border border-abu focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-600">Password</label>
              <input className="py-3 px-4 rounded-md border border-abu focus:outline-none focus:ring-2 focus:ring-blue-600" type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <a className="text-right text-sm text-gray-600 mt-6">Forgot your password?</a>
            <div className='py-5 px-3 rounded-md bg-oren text-center text-white font-semibold'>
                <button><Link to="/home">Login</Link></button>
            </div>
            <div className='flex gap-3 items-center justify-between'>
                <div className='w-48 h-1 bg-abu'></div>
                <div>or</div>
                <div className='w-48 h-1 bg-abu'></div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg w-full hover:bg-gray-100">
                <FcGoogle className="text-xl" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg w-full hover:bg-gray-100">
                <FaFacebook className="text-blue-600 text-xl" />
                Facebook
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;