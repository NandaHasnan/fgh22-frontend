import { useState } from 'react'
// import Logo from '../assets/logo.png'
import Profile from '../assets/gambar/P-profile.png'
import { Link } from 'react-router-dom';
// import { IoIosArrowDown } from "react-icons/io";
// import { IoSearch } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import Navbar from '../components/navbar-profile';

function App() {
   useState(0)

  return (
    <div className=''>
      <Navbar/>
      {/* <nav className='px-48 items-center shadow-md py-3 flex justify-between'>
        <div><img src={Logo} alt="" /></div>
        <ul className='flex gap-5'>
          <li>Home</li>
          <li>Movie</li>
          <li>Buy Ticket</li>
        </ul>
        <div className='flex items-center gap-3'>
            <div>Location</div>
            <div><IoIosArrowDown /></div>
            <div><IoSearch /></div>
            <div><img className='w-14 h14' src={Profile} alt="" /></div>
        </div>
      </nav> */}

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
                      <Link className='text-lg text-[#14142B]'>Account Settings</Link>
                      <Link to='/odrhistori' className='text-lg text-[#AAAAAA]'>Order History</Link>
                    </div>
                  </div>
                  <div className='py-10 px-12 w-[950px] h-[418px] rounded-lg bg-white'>
                    <div className='flex flex-col gap-12'>
                      <div className='flex flex-col gap-4'>
                        <div className='text-base text-[#14142B]'>Details Information</div>
                        <div className='px-6 w-[825px] h-[1px] bg-[#DEDEDE]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-8 justify-between'>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="f-name">First Name</label>
                          <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg' type="text" id='f-name' name='f-name' placeholder='Jonas'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="l-name">Last Name</label>
                          <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg' type="text" id='l-name' name='l-name' placeholder='El Rodriguez'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="email">E-mail</label>
                          <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg' type="text" id='email' name='email' placeholder='jonasrodrigu123@gmail.com'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="number">Phone Number</label>
                          <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg' type="text" id='number' name='number' placeholder='81445687121'/>
                        </div>
                      </div>   
                    </div>        
                  </div>
                  <div className='py-10 pb-16 px-12 w-[950px] rounded-lg bg-white'>
                    <div className='flex flex-col gap-12'>
                      <div className='flex flex-col gap-4'>
                        <div className='text-base text-[#14142B]'>Details Information</div>
                        <div className='px-6 w-[825px] h-[1px] bg-[#DEDEDE]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-8 justify-between'>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="new-pass">New Password</label>
                          <div className="relative w-full">
                            <span className="absolute inset-y-0 right-12 flex items-center pointer-events-none">
                              <IoEyeOutline className="text-[#A0A3BD]" />
                            </span>
                            <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg focus:outline-none' type="text" id='con-pass' name='con-pass' placeholder='Write your password'/>
                          </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="con-pass">Confirm Password</label>
                          <div className="relative w-full">
                            <span className="absolute inset-y-0 right-12 flex items-center pointer-events-none">
                              <IoEyeOutline className="text-[#A0A3BD]" />
                            </span>
                            <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg focus:outline-none' type="text" id='con-pass' name='con-pass' placeholder='Confirm your password'/>
                          </div>
                        </div>
                      </div>   
                    </div>
                  </div>
                  <Link className='py-3 w-80 h-14 bg-oren text-center text-white rounded-2xl'>Update changes</Link>         
                </div>
          </div>
        </section>
      </main>     
      
    </div>
  )
}

export default App
