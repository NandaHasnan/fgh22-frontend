import { useState } from 'react'
import Logo from '../assets/logo.png'
// import John from './assets/gambar/john.png'
// import Lion from './assets/gambar/lion.png'
// import Spi from './assets/gambar/spi.png'
// import Roblox from './assets/gambar/roblox.png'
import Widow from '../assets/gambar/widow.png'
// import Wiches from './assets/gambar/wiches.png'
// import Tenet from './assets/gambar/tenet.png'
// import Spiderman from './assets/gambar/spiderman.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
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
          <a className='rounded-lg py-3 px-4 bg-oren text-white' href="">SignUp</a>
        </div>
      </nav>

      <main className='px-48 flex flex-col gap-10'>
        <section className='flex py-14'>
          <div className=' flex flex-col gap-2.5'>
            <div className='text-oren text-lg font-bold'>MOVIE TICKET PURCHASES #1 IN INDONESIAMOVIE TICKET PURCHASES #1 IN INDONESIA</div>
            <div className='text-5xl'>Experience the Magic of Cinema: Book Your Tickets Today</div>
            <div className='text-abu text-base'>Sign up and get the ticket with a lot of discount</div>
          </div>
          <div className='grid-cols-2'>
            {/* <div><img src={John} alt="" /></div>
            <div><img src={Lion} alt="" /></div>
            <div><img src={Spi} alt="" /></div>
            <div><img src={Roblox} alt="" /></div> */}
          </div>
        </section>

        <section className='flex flex-col gap-6'>
          <div className=' flex flex-col gap-3.5'>
            <div className='text-oren text-base font-bold'>WHY CHOOSE US</div>
            <div className='text-3xl w-96'>Unleashing the Ultimate Movie Experience</div>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-5'>
              <div className='w-14 h-14 bg-oren rounded-full'></div>
              <div className='text-lg font-semibold'>Guaranteed</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='w-14 h-14 bg-oren rounded-full'></div>
              <div className='text-lg font-semibold'>Affordable</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='w-14 h-14 bg-oren rounded-full'></div>
              <div className='text-lg font-semibold'>24/7 Customer Support</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
          </div>
        </section>

        <section className='flex flex-col py-14'>
          <div className='text-center flex flex-col gap-3.5'>
            <div className='text-lg text-oren font-semibold'>MOVIES</div>
            <div className='text-3xl'>Exciting Movies That Should Be Watched Today</div>
          </div>
          <div className='flex gap-10 justify-between'>
            <div className='flex flex-col gap-5'>
              <img className='w-72' src={Widow} alt="" />
              <div className='text-2xl font-semibold'>Black Widow</div>
              <div className='flex gap-1'>
                <span className='rounded-lg px-2 bg-abu'>Action</span>
                <span className='rounded-lg px-2 bg-abu'>Adventure</span>
              </div>
            </div>
            
            {/* <div className='flex flex-col gap-5'>
              <img className='w-72' src={Wiches} alt="" />
              <div className='text-2xl font-semibold'>Black Widow</div>
              <div className='flex gap-1'>
                <span className='rounded-lg px-2 bg-abu'>Action</span>
                <span className='rounded-lg px-2 bg-abu'>Adventure</span>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <img className='w-72' src={Tenet} alt="" />
              <div className='text-2xl font-semibold'>Black Widow</div>
              <div className='flex gap-1'>
                <span className='rounded-lg px-2 bg-abu'>Action</span>
                <span className='rounded-lg px-2 bg-abu'>Adventure</span>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <img className='w-72' src={Spiderman} alt="" />
              <div className='text-2xl font-semibold'>Black Widow</div>
              <div className='flex gap-1'>
                <span className='rounded-lg px-2 bg-abu'>Action</span>
                <span className='rounded-lg px-2 bg-abu'>Adventure</span>
              </div>
            </div> */}
          </div>
           <div className='text-oren text-center py-14 font-semibold'>View All</div>
        </section>

        <section>
          <div className=' flex flex-col gap-3.5'>
            <div className='text-oren text-base font-bold'>WHY CHOOSE US</div>
            <div className='flex justify-between '>
              <div className='text-3xl'>Unleashing the Ultimate Movie Experience</div>
              <div className='flex gap-2'>
                <button className='w-16 h-16 bg-abu rounded-full'></button>
                <button className='w-16 h-16 bg-oren rounded-full'></button>
              </div>
            </div>
            <div className='flex gap-10 justify-between'>
            <div className='flex flex-col gap-5'>
              <img className='w-72' src={Widow} alt="" />
              <div className='text-2xl font-semibold'>Black Widow</div>
              <div className='text-oren text-base font-semibold'>December 2024</div>
              <div className='flex gap-1'>
                <span className='rounded-lg px-2 bg-abu'>Action</span>
                <span className='rounded-lg px-2 bg-abu'>Adventure</span>
              </div>
            </div>
            {/* <div className='flex flex-col gap-5'>
              <img className='w-72' src={Wiches} alt="" />
              <div className='text-2xl font-semibold'>Black Widow</div>
              <div className='text-oren text-base font-semibold'>December 2024</div>
              <div className='flex gap-1'>
                <span className='rounded-lg px-2 bg-abu'>Action</span>
                <span className='rounded-lg px-2 bg-abu'>Adventure</span>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <img className='w-72' src={Tenet} alt="" />
              <div className='text-2xl font-semibold'>Black Widow</div>
              <div className='text-oren text-base font-semibold'>December 2024</div>
              <div className='flex gap-1'>
                <span className='rounded-lg px-2 bg-abu'>Action</span>
                <span className='rounded-lg px-2 bg-abu'>Adventure</span>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <img className='w-72' src={Spiderman} alt="" />
              <div className='text-2xl font-semibold'>Black Widow</div>
              <div className='text-oren text-base font-semibold'>December 2024</div>
              <div className='flex gap-1'>
                <span className='rounded-lg px-2 bg-abu'>Action</span>
                <span className='rounded-lg px-2 bg-abu'>Adventure</span>
              </div>
            </div> */}
          </div>
          </div>
        </section>

        <section className=' '>
          <div className='1/2 h-72 bg-oren justify-center py-20 px-48 flex flex-col gap-12 rounded-lg'>
              <div className='text-5xl text-white text-center'>Subscribe to our newsletter</div>
              <div className='flex gap-2.5 justify-center '>
                <input className='p-4 border-white border bg-oren rounded-lg ' type="text" placeholder='First name'/>
                <input className='p-4 border-white border bg-oren rounded-lg ' type="text" placeholder='Email address'/>
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
