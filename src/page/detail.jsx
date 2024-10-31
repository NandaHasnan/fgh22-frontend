import { useState } from 'react'
import Logo from '../assets/logo.png'
// import John from './assets/gambar/john.png'
// import Lion from './assets/gambar/lion.png'
// import Spi from './assets/gambar/spi.png'
// import Roblox from './assets/gambar/roblox.png'
// import Widow from '../assets/gambar/widow.png'
// import Wiches from './assets/gambar/wiches.png'
// import Tenet from './assets/gambar/tenet.png'
import Spiderman from '../assets/gambar/spiderman.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
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

      <section className=' bg-cover py-24 px-48 h-[462px] bg-cover-detail'>
            {/* <div>

            </div> */}
            <div className=''>
                <img className=' pt-56' src={Spiderman} alt="" />
            </div>
      </section>  

      <main className='px-48 flex flex-col gap-10'>
        <section className='px-72'>
            <div className='flex flex-col gap-8 pt-5'>
                <div className='text-3xl font-bold'>Spider-Man: Homecoming</div>
                <div className='flex gap-1'>
                    <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Action</span>
                    <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Adventure</span>
                </div>
                <div className='flex gap-28'>
                    <div>
                        <div className='text-sm text-abuMuda'>Release date</div>
                        <div>June 28, 2017</div>
                    </div>
                    <div className=''>
                        <div className='text-sm text-abuMuda'>Directed by</div>
                        <div>Jon Watss</div>
                    </div>
                </div>
                <div className='flex gap-[72px]'>
                    <div>
                        <div className='text-sm text-abuMuda'>Duration</div>
                        <div>2 hours 13 minutes </div>
                    </div>
                    <div>
                        <div className='text-sm text-abuMuda'>Casts</div>
                        <div>Tom Holland, Michael Keaton, Robert Downey Jr</div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className='flex flex-col gap-1'>
                <div className='text-xl font-semibold'>Synopsis</div>
                <div className='text-base text-abuMuda w-6/12 leading-8'>Thrilled by his experience with the Avengers, Peter returns home,
                     where he lives with his Aunt May, under the watchful eye of his new 
                     mentor Tony Stark, Peter tries to fall back into his normal daily routine 
                     - distracted by thoughts of proving himself to be more than just your friendly 
                     neighborhood Spider-Man - but when the Vulture emerges as a new villain, 
                     everything that Peter holds most important will be threatened. </div>
            </div>
        </section>

        <section>
            <div className='flex flex-col gap-9'>
                <div className='text-3xl font-medium'>Book Tickets</div>
                <div className='flex justify-between'>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="event" className="text-gray-600 font-semibold">Choose Date</label>
                        <select className="py-3.5 px-16 w-72 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                            <option value="">21/07/2024</option>
                            <option value="">22/07/2024</option>
                            <option value="">23/07/2024</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="event" className="text-gray-600 font-semibold">Choose Time</label>
                        <select className="py-3.5 px-16 w-72 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                            <option value="">08.30</option>
                            <option value="">010.30</option>
                            <option value="">14.30</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="event" className="text-gray-600 font-semibold">Choose Location</label>
                        <div className='flex gap-5'>
                            <select className="py-4 px-16 w-72 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option value="">Purwokerto</option>
                                <option value="">Madiun</option>
                                <option value="">Semarang</option>
                            </select>
                            <button className='bg-oren px-20 rounded-md text-white'>Filter</button>
                        </div>
                        
                    </div>
                    
                </div>
                <div className='flex gap-8'>
                    <div className='text-xl font-semibold'>Choose Cinema</div>
                    <div className='text-lg text-abuMuda font-semibold'>39 Result </div>
                </div>
                <div className='flex gap-5 justify-between'>
                    <div className='w-[264px] h-[157px] border-2 border-abuMuda3 rounded-md'></div>
                    <div className='w-[264px] h-[157px] border-2 border-abuMuda3 rounded-md'></div>
                    <div className='w-[264px] h-[157px] border-2 border-abuMuda3 rounded-md'></div>
                    <div className='w-[264px] h-[157px] border-2 border-abuMuda3 rounded-md'></div>
                </div>
                <div className='flex gap-5 justify-center text-center text-white'>
                    <div className='flex w-10 h-10 bg-orenMuda rounded-md justify-center items-center'>1</div>
                    <div className='flex w-10 h-10 border borde-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>2</div>
                    <div className='flex w-10 h-10 border borde-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>3</div>
                    <div className='flex w-10 h-10 border borde-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>4</div>
                </div>
                <div className='flex justify-center'>
                    <Link to="/order" className='bg-oren py-4 px-20 rounded-md text-white'>Book Now</Link>
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
