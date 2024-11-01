import { useState } from 'react'
import Logo from '../assets/logo.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
import Logo2 from '../assets/gambar/logo2.png'
import Barcode from '../assets/gambar/barcode.png'
import { MdOutlineFileDownload } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
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
        <div className='flex gap-5 '>
          <Link to="/login" className='rounded-lg py-3 px-4 border-oren border ' href="">Login</Link>
          <Link to="/register" className='rounded-lg py-3 px-4 bg-oren text-white' href="">SignUp</Link>
        </div>
      </nav>

       

      <main className='flex justify-between gap-10 bg-[#A0A3BD20]'>
        
          <div className='bg-bg-marvel2 w-[1920px]'>
            <div className='bg-[#00000090] w-[1319px] h-[920px]'>
              <div className='px-28 pt-[334px]'>
                    <div className=' flex flex-col gap-5'>
                        <img className='w-64' src={Logo2} alt="" />
                        <div className='text-5xl text-white font-semibold'>Thankyou For Purchasing</div>
                        <div className='w-[571px] text-2xl text-white'>Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna et.</div>
                        <div className='text-lg text-white font-semibold flex items-center gap-6'>Please Download Your Ticket<HiArrowLongRight /></div>
                    </div>
              </div>
            </div>
          </div>

          <div className='pt-20 px-28 flex flex-col gap-6'>
            <div className='flex flex-col gap-28 rounded-md w-80 h-[635px] bg-white'>
                <div className='py-8 px-16'>
                  <img className='w-44 h-44' src={Barcode} alt="" />
                </div>
                <div className='flex flex-col gap-10'>
                  <div className='flex flex-col gap-6'>
                    <div className='flex px-10 justify-between'>
                      <div>
                        <div className='text-xs text-[#AAAAAA]'>Movie</div>
                        <div className='text-sm text-[#14142B] font-normal'>Spider-Man: ..</div>
                      </div>
                      <div>
                        <div className='text-xs text-[#AAAAAA]'>Category</div>
                        <div className='text-sm text-[#14142B] font-normal'>PG-13</div>
                      </div>
                    </div>
                    <div className='flex px-10 justify-between'>
                      <div>
                        <div className='text-xs text-[#AAAAAA]'>Date</div>
                        <div className='text-sm text-[#14142B] font-normal'>07 Jul</div>
                      </div>
                      <div>
                        <div className='text-xs text-[#AAAAAA]'>Time</div>
                        <div className='text-sm text-[#14142B] font-normal'>2:00pm</div>
                      </div>
                    </div>
                    <div className='flex px-10 justify-between'>
                      <div>
                        <div className='text-xs text-[#AAAAAA]'>Count</div>
                        <div className='text-sm text-[#14142B] font-normal'>3 pcs</div>
                      </div>
                      <div>
                        <div className='text-xs text-[#AAAAAA]'>Seats</div>
                        <div className='text-sm text-[#14142B] font-normal'>C4, C5, C6</div>
                      </div>
                    </div>
                  </div>
                  <div className='px-10'>
                    <div className='rounded-md py-2.5 px-6 w-60 h-12 border border-[#DEDEDE]'>
                      <div className='flex justify-between '>
                        <div>Total</div>
                        <div>$30.00</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-2.5'>
              <Link className='flex w-[320px] h-14 rounded-md border border-orenMuda items-center justify-center gap-6 text-oren font-semibold'><MdOutlineFileDownload />Download</Link>
              <Link to='/profil' className='w-[320px] h-14 rounded-md bg-oren text-center text-white font-semibold pt-3'>Done</Link>
            </div>
            {/* <div className='flex'>
                <div className='w-8 h-8 bg-oren rounded-full'></div>
                <div className='w-72 h-1 bg-abu'></div>
                <div className='w-8 h-8 bg-oren rounded-full'></div>
            </div> */}
          </div>
        
      </main>

      <footer className='px-48 py-24 flex flex-col gap-12'>
          <div className='flex gap-20 justify-between'>
              <div>
                <img className='w-44' src={Logo} alt="" />
                <div className='text-lg w-72'>Stop waiting in line. Buy tickets
                conveniently, watch movies quietly.</div>
              </div>
              <div className='flex flex-col gap-7'>
                <div className='text-base font-semibold '>Explore</div>
                <ul className='flex flex-col gap-3.5 text-sm text-abu'>
                    <li><a href="">Cinemas</a></li>
                    <li><a href="">Movie List</a></li>
                    <li><a href="">My Ticket</a></li>
                    <li><a href="">Notification</a></li>
                </ul>
              </div>
              <div className='flex flex-col gap-7'>
                <div className='text-base font-semibold '>Our Sponsor</div>
                <ul className='flex flex-col gap-6'>
                    <li><img src={Ebv} alt="" /></li>
                    <li><img src={Cineone} alt="" /></li>
                    <li><img src={Hiflix} alt="" /></li>
                </ul>
              </div>
              <div className='flex flex-col gap-7'>
                <div className='text-base font-semibold '>Follow us</div>
                <ul className='flex flex-col gap-7'>
                    <li><img src="" alt="" /><a href="">Tickitz Cinema id</a></li>
                    <li><img src="" alt="" /><a href="">Tickitz.id</a></li>
                    <li><img src="" alt="" /><a href="">Tickitz.id</a></li>
                    <li><img src="" alt="" /><a href="">Tickitz Cinema id</a></li>
                </ul>
              </div>
          </div>
          <div className='text-center text-sm'>© 2020 Tickitz. All Rights Reserved.</div>
        </footer>
      
    </div>
  )
}

export default App
