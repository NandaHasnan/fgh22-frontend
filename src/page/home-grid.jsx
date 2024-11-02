import { useState } from 'react'
import Logo from '../assets/logo.png'
// import John from './assets/gambar/john.png'
// import Lion from './assets/gambar/lion.png'
// import Spi from './assets/gambar/spi.png'
// import Roblox from './assets/gambar/roblox.png'
import Widow from '../assets/gambar/widow.png'
import Wiches from '../assets/gambar/wiches.png'
import Tenet from '../assets/gambar/tenet.png'
import Spiderman from '../assets/gambar/spiderman.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";
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

      <section className=' bg-cover py-24 px-48 h-[462px] bg-cover-marvel'>
            <div className=''>
                <div className='text-lg text-white'>LIST MOVIE OF THE WEEK</div>
                <div className='pr-96 text-5xl text-white'>Experience the Magic of Cinema: Book Your Tickets Today</div>
            </div>
      </section>  

      <main className='px-48 flex flex-col gap-10'>
        <section className='py-16'>
            <div className='flex gap-5'>
                <div className="flex flex-col gap-2">
                    <label htmlFor="event" className="text-gray-600">Cari Event</label>
                    <input className="py-3 px-4 rounded-md border border-abu focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert" />
                </div>
                <div className='flex flex-col gap-5'>
                    <label htmlFor="filter">Filter</label>
                    <div>
                        <span className='px-6 py-2.5 bg-orenMuda rounded-md'>Thriller</span>
                        <span className='px-6 py-2.5'>Horror</span>
                        <span className='px-6 py-2.5'>Romantic</span>
                        <span className='px-6 py-2.5'>Adventure</span>
                        <span className='px-6 py-2.5'>Sci-fi</span>
                    </div>
                </div>
            </div>
        </section>

        <section className='flex flex-col gap-10'>
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
            <div className='flex gap-5 justify-center text-center text-white'>
              <div className='flex w-10 h-10 bg-orenMuda rounded-full justify-center items-center'>1</div>
              <div className='flex w-10 h-10 bg-abu rounded-full justify-center items-center'>2</div>
              <div className='flex w-10 h-10 bg-abu rounded-full justify-center items-center'>3</div>
              <div className='flex w-10 h-10 bg-abu rounded-full justify-center items-center'>4</div>
              <div className='flex w-10 h-10 bg-orenMuda rounded-full justify-center items-center'><GoArrowRight /></div>
            </div>
        </section>

        <section className=' '>
          <div className='1/2 h-72 bg-oren justify-center py-20 px-48 flex flex-col gap-12 rounded-lg'>
              <div className='text-5xl text-white text-center'>Subscribe to our newsletter</div>
              <div className='flex gap-2.5 justify-center '>
                <input className='p-4 border-white border bg-oren placeholder:text-white rounded-lg ' type="text" placeholder='First name'/>
                <input className='p-4 border-white border bg-oren placeholder:text-white rounded-lg ' type="text" placeholder='Email address'/>
                <button className='bg-white py-4 px-11 rounded-lg'>Subscribe Now</button>
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
