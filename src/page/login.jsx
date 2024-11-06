import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../assets/gambar/logo2.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";

function App() {
  const [sukses, setSukses] = useState(false);
  const [gagal, setGagal] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      email: 'admin@mail.com',
      password: '12345',
    },
    {
      email: 'user@mail.com',
      password: '12345',
    }
  ];
  const onSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')
    const found = data.find(user => user.email === email)
    if(!found || found.password !== password){
      setGagal(true)
      setTimeout(() =>
        setGagal(false)
       
      ,2000);
      return
    }
    // if(found.password !== password){
    //   setTimeout(() =>
    //     setSukses(true)
       
    //   ,2000);
    //   return
    // }
    setSukses(true)
      setTimeout(() =>{
        setSukses(false)
      navigate('/home')
  },2000);
    // setSukses(false)
    
  }
  return (
    <div className="bg-bg-marvel bg-no-repeat bg-cover h-screen bg-center flex items-center justify-center">
      <div className="w-full max-w-md mx-4 md:mx-auto">
        <div className="flex justify-center mb-8">
          <img className="w-32 md:w-40" src={Logo} alt="Tickitz Logo" />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <div className='text-2xl md:text-3xl font-bold'>Welcome Back👋</div>
            <div className='text-base md:text-lg text-gray-500'>Sign in with your data that you entered during your registration</div>
            {sukses && (
            <div className='w-full h-14 text-center text-white py-4 bg-green-600'>Succes</div>
            )}
            {gagal && (
            <div className='w-full h-14 text-center text-white py-4 bg-red'>Wrong email or password</div>
            )}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input className="py-2 md:py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-600">Password</label>
              <div className="relative w-full">
                <button className="absolute inset-y-0 right-4 md:right-6 flex items-center pointer-events-none">
                  <IoEyeOutline className="text-gray-400" />
                </button>
                <input
                  className="py-2 md:py-3 px-4 w-full rounded-lg border border-gray-300 focus:outline-none"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <a className="text-right text-sm text-gray-600 mt-2 md:mt-6">Forgot your password?</a>
            {/* <Link className="w-full py-3 md:py-4 rounded-md bg-orange-500 hover:bg-orange-400 text-center text-white font-semibold" to="/home" >Login</Link> */}
            <button type='submit' className="w-full py-3 md:py-4 rounded-md bg-orange-500 hover:bg-orange-400 text-center text-white font-semibold" >Login</button>
            <div className='flex items-center justify-between mt-6'>
              <div className='w-1/4 h-px bg-gray-300'></div>
              <div className='text-gray-500 text-sm'>or</div>
              <div className='w-1/4 h-px bg-gray-300'></div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="https://www.google.com/"
                className="flex items-center justify-center gap-2 py-2 md:py-3 px-4 shadow-md rounded-lg w-full hover:bg-gray-100"
              >
                <FcGoogle className="text-xl" /> Google
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="flex items-center justify-center gap-2 py-2 md:py-3 px-4 shadow-md rounded-lg w-full hover:bg-gray-100"
              >
                <FaFacebook className="text-blue-600 text-xl" /> Facebook
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
