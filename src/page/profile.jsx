import { useState } from 'react'
import Logo from '../assets/logo.png'
import Profile from '../assets/gambar/P-profile.png'
// import Ebv from '../assets/gambar/ebv.id 2.png'
// import Cineone from '../assets/gambar/CineOne21 2.png'
// import Hiflix from '../assets/gambar/hiflix 2.png'
// import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
// import { FaCheck } from "react-icons/fa6";
// import Google from '../assets/gambar/logos_google-pay.png'
// import Visa from '../assets/gambar/logos_visa.png'
// import Gopay from '../assets/gambar/Logo GoPay (SVG-240p) - FileVector69 1.png'
// import Paypal from '../assets/gambar/logos_paypal.png'
// import Dana from '../assets/gambar/Logo DANA (PNG-240p) - FileVector69 1.png'
// import Bca from '../assets/gambar/Bank BCA Logo (SVG-240p) - FileVector69 1.png'
// import Bri from '../assets/gambar/bri.png'
// import Ovo from '../assets/gambar/ovo.png'
// import { GoArrowRight } from "react-icons/go";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
   useState(0)

  return (
    <div className=''>
      <nav className='px-48 items-center shadow-md py-3 flex justify-between'>
        <div><img src={Logo} alt="" /></div>
        <ul className='flex gap-5'>
          <li>Home</li>
          <li>Movie</li>
          <li>Buy Ticket</li>
        </ul>
        {/* <div className='flex gap-5 '>
          <Link to="/login" className='rounded-lg py-3 px-4 border-oren border ' href="">Login</Link>
          <Link to="/register" className='rounded-lg py-3 px-4 bg-oren text-white' href="">SignUp</Link>
        </div> */}
        <div className='flex items-center gap-3'>
            <div>Location</div>
            <div><IoIosArrowDown /></div>
            <div><IoSearch /></div>
            <div><img className='w-14 h14' src={Profile} alt="" /></div>
        </div>
      </nav>

      <main>
        <section className='px-16 py-14 bg-[#A0A3BD20]'>
            <div className='flex gap-8'>
                <div className='flex flex-col gap-8 w-80 px-10 pt-10 pb-24 bg-white'>
                    <div className='flex justify-between'>
                        <div>INFO</div>
                        <div><SlOptions /></div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <div className='px-9'>
                            <img className='' src={Profile} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className='text-center text-xl font-semibold text-[#14142B]'>Jonas El Rodriguez</div>
                            <div className='text-center text-sm text-[#4E4B66]'>Moviegoers</div>
                        </div>
                    </div>
                    
                </div>
                <div className='w-[866px] h-20 bg-white'>
                    
                </div>
            </div>
        </section>
      </main>     
      
    </div>
  )
}

export default App
