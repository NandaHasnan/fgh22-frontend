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
          <div className="flex justify-between items-center mb-8">
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center w-12 h-12 bg-orenMuda rounded-full text-center'>1</div>
                <div>Fill Form</div>
            </div>
            <div className="w-16 border border-abu border-dashed"></div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center w-12 h-12 bg-abu rounded-full text-center '>2</div>
                <div>Activate</div>
            </div>
            <div className="w-16 border border-abu border-dashed"></div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center w-12 h-12 bg-abu rounded-full text-center'>3</div>
                <div>Done</div>
            </div>
          </div>
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input className="py-3 px-4 rounded-md border border-abu focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" name="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-600">Password</label>
              <input className="py-3 px-4 rounded-md border border-abu focus:outline-none focus:ring-2 focus:ring-blue-600" type="password" id="password" name="password" placeholder="Enter your password" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">I agree to terms & conditions</label>
            </div>
            <div className='py-5 px-3 rounded-md bg-oren text-center text-white font-semibold'>
                <button>Join For Free Now</button>
            </div>
            <div className="text-center text-sm text-gray-600 mt-6">
            Already have an account? <Link to="/login" href="#" className="text-blue-600 hover:underline">Log in</Link>
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