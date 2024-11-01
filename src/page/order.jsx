import { useState } from 'react'
import Logo from '../assets/logo.png'
// import John from './assets/gambar/john.png'
// import Lion from './assets/gambar/lion.png'
// import Spi from './assets/gambar/spi.png'
// import Roblox from './assets/gambar/roblox.png'
// import Widow from '../assets/gambar/widow.png'
// import Wiches from './assets/gambar/wiches.png'
// import Tenet from './assets/gambar/tenet.png'
// import Spiderman from '../assets/gambar/spiderman.png'
import Coverspi from '../assets/gambar/Rectangle 618.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
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

       

      <main className='px-48 flex flex-col gap-10 bg-[#A0A3BD20]'>
        <section className=''>
            <div className="gap-6 flex justify-center items-center mb-8">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center w-12 h-12 bg-[#008000] rounded-full text-center text-white'><FaCheck /></div>
                        <div>Dates And Time</div>
                    </div>
                    <div className="w-16 border border-abu border-dashed"></div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center w-12 h-12 bg-orenMuda rounded-full text-center '>2</div>
                        <div>Seat</div>
                    </div>
                    <div className="w-16 border border-abu border-dashed"></div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center w-12 h-12 bg-abu rounded-full text-center'>3</div>
                        <div>Payment</div>
                    </div>
                </div>
        </section>

        <section className='flex justify-center gap-4'>
            
            <div className=''>
                
                <div className='flex flex-col gap-9 w-[732px] h-[807px] bg-white px-5 py-9 rounded-md'>
                    <div className='flex gap-3.5 w-[687px] h-[143px] border border-abuMuda3 rounded-md py-3 px-6'>
                        <img src={Coverspi} alt="" />
                        <div className='flex flex-col gap-3.5'>
                            <div className='text-3xl font-bold'>Spider-Man: Homecoming</div>
                            <div className='flex gap-1'>
                                <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Action</span>
                                <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Adventure</span>
                            </div>
                            <div className='flex gap-48'>
                                <div className='text-base'>Regular - 13:00 PM</div>
                                <div>
                                    <button className='w-28 h-8 bg-oren text-white rounded-md'>Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-9'>
                        <div className='text-2xl font-semibold'>Choose Your Seat</div>
                        <div className='text-sm text-text1 font-semibold text-center'>Screen</div>
                        <div className='flex justify-center'>
                            <div className='grid grid-cols-8 gap-2'>
                                <button className='w-8 h-8 rounded-md '>A</button>                         <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '>B</button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '>C</button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#1D4ED8]'></button>
                                <button className='w-8 h-8 rounded-md bg-[#1D4ED8]'></button>
                                <button className='w-8 h-8 rounded-md bg-[#1D4ED8]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '>D</button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '>E</button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '>F</button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '>G</button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md '>1</button>
                                <button className='w-8 h-8 rounded-md '>2</button>
                                <button className='w-8 h-8 rounded-md '>3</button>
                                <button className='w-8 h-8 rounded-md '>4</button>
                                <button className='w-8 h-8 rounded-md '>5</button>
                                <button className='w-8 h-8 rounded-md '>6</button>
                                <button className='w-8 h-8 rounded-md '>7</button>
                            </div>
                            <div className='grid grid-cols-8 gap-2'>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#F589D7]'></button>
                                <button className='w-8 h-8 rounded-md bg-[#F589D7]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-[#6E7191]'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md bg-abuMuda2'></button>
                                <button className='w-8 h-8 rounded-md '></button>
                                <button className='w-8 h-8 rounded-md '>8</button>
                                <button className='w-8 h-8 rounded-md '>9</button>
                                <button className='w-8 h-8 rounded-md '>10</button>
                                <button className='w-8 h-8 rounded-md '>11</button>
                                <button className='w-8 h-8 rounded-md '>12</button>
                                <button className='w-8 h-8 rounded-md '>13</button>
                                <button className='w-8 h-8 rounded-md '>14</button>
                            </div>
                        </div>
                        <div className='text-lg font-medium px-11'>Seating key</div>
                        <div className='flex gap-10 px-11'>
                            <div className='flex gap-4 items-center'>
                                <div className='w-8 h-8 rounded-md bg-abuMuda2'></div>
                                <div>Available</div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-8 h-8 rounded-md bg-[#1D4ED8]'></div>
                                <div>Selected</div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-8 h-8 rounded-md bg-[#F589D7]'></div>
                                <div>Love nest</div>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-8 h-8 rounded-md bg-[#6E7191]'></div>
                                <div className='text-sm text-text1 font-semibold'>Sold</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10 pt-4 w-[358px] h-[413px] bg-white rounded-md'>
                    <div className='flex flex-col gap-3'>
                        <div className='px-24'>
                            <img className='justify-center' src={Cineone} alt="" />
                        </div>
                        <div className='text-2xl text-center '>CineOne21 Cinema</div>
                    </div>
                    <div className='px-5 flex flex-col gap-5'>
                        <div className='flex justify-between'>
                            <div className='text-sm text-[#6B6B6B]'>Movie selected</div>
                            <div className='text-sm text-[#14142B] font-semibold'>Spider-Man: Homecoming</div>    
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-sm text-[#6B6B6B]'>Tuesday, 07 July 2020</div>
                            <div className='text-sm text-[#14142B] font-semibold'>13:00pm</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-sm text-[#6B6B6B]'>One ticket price</div>
                            <div className='text-sm text-[#14142B] font-semibold'>$10</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='text-sm text-[#6B6B6B]'>Seat choosed</div>
                            <div className='text-sm text-[#14142B] font-semibold'>C4, C5, C6</div>
                        </div>
                    </div>
                    <div className='w-90 h-1 bg-[#E6E6E6]'></div>
                    <div className='px-5 flex justify-between'>
                        <div className='text-lg font-semibold'>Total Payment</div>
                        <div className='text-2xl text-[#1D4ED8] font-semibold'>$30</div>
                    </div>
                </div>
                <Link to='/payment' className='py-3.5 w-[358px] h-14 bg-oren rounded-md text-white text-center'>Checkout now</Link>
            </div>
        </section>
        <section className=''>
            
        </section>
        
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
