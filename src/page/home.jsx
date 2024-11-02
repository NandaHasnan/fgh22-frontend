import { useState } from 'react'
import Logo from '../assets/logo.png'
import John from '../assets/gambar/john.png'
import Lion from '../assets/gambar/lion.png'
import Spi from '../assets/gambar/spi.png'
import Roblox from '../assets/gambar/roblox.png'
import Widow from '../assets/gambar/widow.png'
import Wiches from '../assets/gambar/wiches.png'
import Tenet from '../assets/gambar/tenet.png'
import Spiderman from '../assets/gambar/spiderman.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
import { BsShieldFillCheck } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
// import MovieGrid from '../components/moviegrid';
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

      <main className='px-48 flex flex-col gap-10'>
        <section className='items-center flex py-14'>
          <div className=' flex flex-col gap-2.5'>
            <div className='text-oren text-lg font-bold'>MOVIE TICKET PURCHASES #1 IN INDONESIAMOVIE TICKET PURCHASES #1 IN INDONESIA</div>
            <div className='text-5xl leading-[70px]'>Experience the Magic of Cinema: Book Your Tickets Today</div>
            <div className='text-abu text-base'>Sign up and get the ticket with a lot of discount</div>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <img src={John} alt="" />
            <img src={Lion} alt="" />
            <img className='-mt-[70px]' src={Spi} alt="" />
            <img src={Roblox} alt="" />
          </div>
        </section>

        <section className='flex flex-col gap-6'>
          <div className=' flex flex-col gap-3.5'>
            <div className='text-oren text-base font-bold'>WHY CHOOSE US</div>
            <div className='text-3xl w-96'>Unleashing the Ultimate Movie Experience</div>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-5'>
              <div className=''>
                <div className='p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full'><BsShieldFillCheck /></div>
              </div>
              <div className='text-lg font-semibold'>Guaranteed</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full'><FaCircleCheck /></div>
              <div className='text-lg font-semibold'>Affordable</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full'><LuMessagesSquare /></div>
              <div className='text-lg font-semibold'>24/7 Customer Support</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-7 py-14'>
          <div className='text-center justify-center items-center flex flex-col gap-3.5'>
            <div className='text-lg text-oren font-semibold'>MOVIES</div>
            <div className='text-3xl w-[545px] leading-10'>Exciting Movies That Should Be Watched Today</div>
          </div>
          <div className='flex gap-10 justify-between'>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Widow} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Wiches} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>The Witches</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Comedy</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Tenet} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Tenet</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Sci-Fi</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Spiderman} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Spiderman</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
            </div>
          <Link to="/grid" className='flex gap-4 items-center justify-center text-oren text-center py-14 font-semibold'>View All<FaArrowRightLong /></Link>
        </section>

        <section>
          <div className=' flex flex-col gap-3.5'>
            <div className='text-oren text-base font-bold'>WHY CHOOSE US</div>
            <div className='flex justify-between items-center'>
              <div className='text-3xl'>Unleashing the Ultimate Movie Experience</div>
              <div className='flex gap-2'>
                <button className='p-5 text-white text-2xl w-16 h-16 bg-abu rounded-full'><FaArrowLeftLong /></button>
                <button className='p-5 text-white text-2xl w-16 h-16 bg-oren rounded-full'><FaArrowRightLong /></button>
              </div>
            </div>
            <div className='flex gap-10 justify-between'>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Widow} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='text-oren text-base font-semibold'>December 2024</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Wiches} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>The Witches</div>
                <div className='text-oren text-base font-semibold'>January 2024</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Comedy</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Tenet} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Tenet</div>
                <div className='text-oren text-base font-semibold'>June 2024</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Sci-Fi</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Spiderman} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Spiderman</div>
                <div className='text-oren text-base font-semibold'>March 2024</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=' '>
          <div className='1/2 h-72 bg-oren justify-center py-20 px-48 flex flex-col gap-12 rounded-lg'>
              <div className='text-5xl text-white text-center'>Subscribe to our newsletter</div>
              <div className='flex gap-2.5 justify-center '>
                <input className='p-4 border-white border bg-oren placeholder:text-white rounded-lg ' type="text" placeholder='First name'/>
                <input className='p-4 border-white border bg-oren placeholder:text-white rounded-lg ' type="text" placeholder='Email address'/>
                <button className='bg-white py-4 px-11 rounded-lg text-oren'>Subscribe Now</button>
              </div>
          </div>
        </section>

        <footer className='py-24 flex flex-col gap-12'>
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
      </main>
      
    </div>
  )
}

export default App
