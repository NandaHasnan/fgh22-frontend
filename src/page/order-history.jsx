import { useState } from 'react'
import Logo from '../assets/logo.png'
import Profile from '../assets/gambar/P-profile.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
// import { IoEyeOutline } from "react-icons/io5";
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
        <section className='px-16 py-14 h-[1400px] bg-[#A0A3BD20]'>
          <div className='flex gap-8 justify-center'>
                <div className='flex flex-col gap-8 w-80 h-[783px] px-10 pt-10 pb-24 rounded-lg bg-white'>
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
                    <div className='w-60 h-[1px] bg-[#DEDEDE]'></div>
                    <div className='text-base'>Loyalty Points</div>
                    <div className='rounded-xl py-4 px-4 flex flex-col gap-5 w-[235px] h-32 bg-oren'>
                      <div className='text-lg text-white font-medium flex items-center justify-between'>Moviegoers<FaStar className='w-10 h-10 rotate-45 text-[#FFC107]' /></div>
                      <div className='text-2xl text-white font-medium'>320<span className='text-[10px] text-white font-medium items-end'>points</span></div>
                    </div>
                    <div className='justify-center flex flex-col gap-2'>
                      <div className='text-center'>180 points become a master</div>
                      <div className='w-[248px] h-4 bg-[#F5F6F8] rounded-full'><div className='w-[126px] h-4 bg-orenMuda rounded-full'></div></div>
                    </div>
                </div>
                <div className='flex flex-col gap-12'>
                  <div className='py-6 px-12 w-[950px] h-20 rounded-lg bg-white'>
                    <div className='flex gap-14'>
                      <Link className='text-lg text-[#AAAAAA]'>Account Settings</Link>
                      <Link to='/order' className='text-lg text-[#14142B]'>Order History</Link>
                    </div>
                  </div>
                  <div className='py-10 px-12 w-[950px] rounded-lg bg-white'>
                    <div className='flex flex-col gap-10'>
                      <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-sm text-[#AAAAAA]'>Tuesday, 07 July 2020 - 04:30pm</div>
                            <div className='text-2xl '>Spider-Man: Homecoming</div>
                        </div>
                        <div>
                            <img src={Cineone} alt="" />
                        </div>
                      </div>
                      <div className='px-6 w-[850px] h-[1px] bg-[#DEDEDE]'></div>
                      <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='w-48 h-10 bg-[#00BA8820] text-center py-1.5 text-[#00BA88] font-semibold rounded-lg'>Ticket in active</div>
                            <div className='w-48 h-10 bg-[#E82C2C20] text-center py-1.5 text-[#E82C2C] font-semibold rounded-lg'>Not Paid</div>
                        </div>
                        <div className='text-lg text-[#AAAAAA] flex items-center gap-4'>Show Details<IoIosArrowDown /></div>
                      </div>
                    </div>        
                  </div>
                  <div className='py-10 px-12 w-[950px] rounded-lg bg-white'>
                    <div className='flex flex-col gap-10'>
                      <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-sm text-[#AAAAAA]'>Monday, 14 June 2020 - 02:00pm</div>
                            <div className='text-2xl '>Avengers: End Game</div>
                        </div>
                        <div>
                            <img src={Hiflix} alt="" />
                        </div>
                      </div>
                      <div className='px-6 w-[850px] h-[1px] bg-[#DEDEDE]'></div>
                      <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='w-48 h-10 bg-[#6E719120] text-center py-1.5 text-[#6E7191] font-semibold rounded-lg'>Ticket used</div>
                            <div className='w-48 h-10 bg-[#1D4ED820] text-center py-1.5 text-[#1D4ED8] font-semibold rounded-lg'>Paid</div>
                        </div>
                        <div className='text-lg text-[#AAAAAA] flex items-center gap-4'>Show Details<IoIosArrowDown /></div>
                      </div>
                    </div>        
                  </div>
                  <div className='py-10 px-12 w-[950px] rounded-lg bg-white'>
                    <div className='flex flex-col gap-10'>
                      <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-sm text-[#AAAAAA]'>Monday, 14 June 2020 - 02:00pm</div>
                            <div className='text-2xl '>Avengers: End Game</div>
                        </div>
                        <div>
                            <img src={Ebv} alt="" />
                        </div>
                      </div>
                      <div className='px-6 w-[850px] h-[1px] bg-[#DEDEDE]'></div>
                      <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='w-48 h-10 bg-[#6E719120] text-center py-1.5 text-[#6E7191] font-semibold rounded-lg'>Ticket used</div>
                            <div className='w-48 h-10 bg-[#1D4ED820] text-center py-1.5 text-[#1D4ED8] font-semibold rounded-lg'>Paid</div>
                        </div>
                        <div className='text-lg text-[#AAAAAA] flex items-center gap-4'>Show Details<IoIosArrowDown /></div>
                      </div>
                    </div>        
                  </div>
                </div>
          </div>
        </section>
      </main>     
      
    </div>
  )
}

export default App
