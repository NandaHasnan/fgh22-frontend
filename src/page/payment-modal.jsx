import { useState } from 'react'
import Logo from '../assets/logo.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import Google from '../assets/gambar/logos_google-pay.png'
import Visa from '../assets/gambar/logos_visa.png'
import Gopay from '../assets/gambar/Logo GoPay (SVG-240p) - FileVector69 1.png'
import Paypal from '../assets/gambar/logos_paypal.png'
import Dana from '../assets/gambar/Logo DANA (PNG-240p) - FileVector69 1.png'
import Bca from '../assets/gambar/Bank BCA Logo (SVG-240p) - FileVector69 1.png'
import Bri from '../assets/gambar/bri.png'
import Ovo from '../assets/gambar/ovo.png'

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

       

      <main className='px-48 flex flex-col gap-10 bg-[#A0A3BD20] relative'>
        <section className=''>
            <div className="gap-6 flex justify-center items-center mb-8">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center w-12 h-12 bg-[#008000] rounded-full text-center text-white'><FaCheck /></div>
                        <div>Dates And Time</div>
                    </div>
                    <div className="w-16 border border-abu border-dashed"></div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center w-12 h-12 bg-[#008000] rounded-full text-center text-white'><FaCheck /></div>
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
                <div className='flex flex-col gap-9 w-[732px] h-[1615px] bg-white px-8 py-12 rounded-md'>
                    <div className='text-2xl text-[#14142B] font-semibold'>Payment Info</div>
                    <div className='flex flex-col gap-8'>
                        <div className='text-sm text-[#8692A6]'>DATE & TIME</div>
                        <input className='text-base placeholder:text-[#000000]' type="text" id='date' name='date' placeholder='Tuesday, 07 July 2020 at 02:00pm' />
                        {/* <div className='text-base'>Tuesday, 07 July 2020 at 02:00pm</div> */}
                        <div className='w-95 h-[1px] bg-[#E6E6E6]'></div>
                        <div className='text-sm text-[#8692A6]'>MOVIE TITLE</div>
                        <input className='text-base placeholder:text-[#000000]' type="text" id='date' name='date' placeholder='Spider-Man: Homecoming' />
                        {/* <div className='text-base'>Spider-Man: Homecoming</div> */}
                        <div className='w-95 h-[1px] bg-[#E6E6E6]'></div>
                        <div className='text-sm text-[#8692A6]'>CINEMA NAME</div>
                        <input className='text-base placeholder:text-[#000000]' type="text" id='date' name='date' placeholder='CineOne21 Cinema' />
                        {/* <div className='text-base'>CineOne21 Cinema</div> */}
                        <div className='w-95 h-[1px] bg-[#E6E6E6]'></div>
                        <div className='text-sm text-[#8692A6]'>NUMBER OF TICKETS</div>
                        <input className='text-base placeholder:text-[#000000]' type="text" id='date' name='date' placeholder='3 pieces' />
                        {/* <div className='text-base'>3 pieces</div> */}
                        <div className='w-95 h-[1px] bg-[#E6E6E6]'></div>
                        <div className='text-sm text-[#8692A6]'>TOTAL PAYMENT</div>
                        <input className='text-base placeholder:text-[#1D4ED8] placeholder:font-semibold' type="text" id='date' name='date' placeholder='$30,00' />
                        {/* <div className='text-base text-[#1D4ED8] font-semibold'>$30,00</div> */}
                        <div className='w-95 h-[1px] bg-[#E6E6E6]'></div>
                    </div>
                    <div className='text-2xl text-[#14142B] font-semibold'>Personal Information</div>
                    <form>
                        <div className='flex flex-col gap-3.5'>
                            <label className='text-base text-[#696F79]' htmlFor="full-name">Full Name</label>
                            <input className='w-[665px] h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='full-name' name='full-nama' placeholder='Jonas El Rodriguez'/>
                            <label className='text-base text-[#696F79]' htmlFor="full-name">Full Name</label>
                            <input className='w-[665px] h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='full-name' name='full-nama' placeholder='Jonas El Rodriguez'/>
                            <label className='text-base text-[#696F79]' htmlFor="full-name">Full Name</label>
                            <input className='w-[665px] h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='full-name' name='full-nama' placeholder='Jonas El Rodriguez'/>
                        </div>
                    </form>
                    <div className='text-2xl text-[#14142B] font-semibold'>Personal Information</div>
                    <div className='grid grid-cols-4 gap-6'>
                        <div className='py-3 px-9 w-36 h-14 border border-[#DEDEDE] rounded-md'><img src={Google} alt="" /></div>
                        <div className='py-3 px-9 w-36 h-14 border border-[#DEDEDE] rounded-md'><img src={Visa} alt="" /></div>
                        <div className='py-3 px-9 w-36 h-14 border border-[#DEDEDE] rounded-md'><img src={Gopay} alt="" /></div>
                        <div className='py-3 px-9 w-36 h-14 border border-[#DEDEDE] rounded-md'><img src={Paypal} alt="" /></div>
                        <div className='py-3 px-9 w-36 h-14 border border-[#DEDEDE] rounded-md'><img src={Dana} alt="" /></div>
                        <div className='py-3 px-9 w-36 h-14 border border-[#DEDEDE] rounded-md'><img src={Bca} alt="" /></div>
                        <div className='py-3 px-9 w-36 h-14 border border-[#DEDEDE] rounded-md'><img src={Bri} alt="" /></div>
                        <div className='py-3 px-9 w-36 h-14 border border-[#DEDEDE] rounded-md'><img src={Ovo} alt="" /></div>
                    </div>
                    <Link to='/payment-modal' className='w-[665px] h-14 bg-oren text-center pt-3.5 rounded-md text-white'>Pay your order</Link>
                </div>
            </div>
            
            
        </section>

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col gap-8 bg-white w-[573px] h-[506px] p-6 rounded-lg shadow-lg">
            <div className="text-2xl font-semibold text-[#14142B] text-center">Payment Info</div>
            <div className="flex items-center justify-between">
              <div className='flex'>
                <label className="text-[#8692A6] text-sm">No. Rekening Virtual</label>
                <label className="text-[#8692A6] text-sm">:</label>
              </div>
              <div className="flex gap-5">
                <input type="text" readOnly placeholder="1232132031829734" className="w-40 rounded-l-md focus:outline-none text-lg font-semibold"/>
                <button className="border border-orenMuda text-oren px-3 py-2 rounded-lg text-sm">Copy</button>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex'>
                <label className="text-[#8692A6] text-sm">Total Payment</label>
                <label className="text-[#8692A6] text-sm">:</label>
              </div>
              <input className='text-right text-lg placeholder:text-oren font-semibold' type="text" placeholder='$30'/>
            </div>
            <div className='text-base text-[#A0A3BD] leading-8'>Pay this payment bill before it is due, on <span className='text-base text-[#D00707]'>June 23, 2023</span>. If the bill has not been paid by the specified time, it will be forfeited</div>
            <Link to='/ticket' className='py-3 w-[520px] rounded-md h-14 text-center font-semibold text-white bg-oren'>Check Payment</Link>
            <Link className='py-3 w-[520px] h-14 text-center font-semibold text-oren'>Pay Later</Link>
          </div>
        </div>
        
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
