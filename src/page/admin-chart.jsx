import { useState } from 'react'
import Logo from '../assets/logo.png'
import Profile from '../assets/gambar/P-profile.png'
import Graph from '../assets/gambar/Graph lines.png'
// import Ebv from '../assets/gambar/ebv.id 2.png'
// import Cineone from '../assets/gambar/CineOne21 2.png'
// import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
// import { SlOptions } from "react-icons/sl";
// import { FaStar } from "react-icons/fa6";
// import Barcode from '../assets/gambar/barcode.png'
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
//   const [isShow, setShow] = useState(false);
//   const [isShow2, setShow2] = useState(false);
  return (
    <div className=''>
      <nav className='px-48 items-center shadow-md py-3 flex justify-between'>
        <div><img src={Logo} alt="" /></div>
        <ul className='flex gap-14'>
          <Link className='text-orenMuda'>Dashboard</Link>
          <Link to='/adm-movie'>Movie</Link>
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

      <main className='flex flex-col gap-12 px-16 py-14 h-[1560px] bg-[#A0A3BD20]'>
        <section className='flex justify-center gap-4'>
                <div className='flex flex-col gap-9 w-[1105px]  bg-white px-8 py-12 rounded-md'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-2xl font-semibold'>Sales Chart</div>
                        <div className='flex gap-5'>
                            <div className="flex flex-col gap-2">
                                <select className="py-3.5 px-5 w-56 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                    <option className='text-base text-[#4E4B66]' value="">Movies Name</option>
                                    <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                    <option className='text-base text-[#4E4B66]' value="">14.30</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <select className="py-3.5 px-5 w-40 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                    <option className='text-base text-[#4E4B66]' value="">Weekly</option>
                                    <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                    <option className='text-base text-[#4E4B66]' value="">14.30</option>
                                </select>
                            </div>
                            <button className='w-32 h-12 text-white bg-oren rounded-md'>Filter</button>
                        </div>
                    </div>
                    <div className='text-sm text-[#151522]'>Avengers: End Game</div>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-16'>
                            <div className='text-xs text-[#999999]'>$800</div>
                            <div className='text-xs text-[#999999]'>$600</div>
                            <div className='text-xs text-[#999999]'>$400</div>
                            <div className='text-xs text-[#999999]'>$200</div>
                            <div className='text-xs text-[#999999]'>$0</div>
                        </div>
                        <div className='pt-16'>
                            <img src={Graph} alt="" />
                            <div className='flex gap-44 justify-center'>
                            <div className='text-xs text-[#999999]'>$800</div>
                            <div className='text-xs text-[#999999]'>$600</div>
                            <div className='text-xs text-[#999999]'>$400</div>
                            <div className='text-xs text-[#999999]'>$200</div>
                            <div className='text-xs text-[#999999]'>$0</div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
        <section className='flex justify-center gap-4'>
                <div className='flex flex-col gap-9 w-[1105px]  bg-white px-8 py-12 rounded-md'>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-semibold'>Ticket Sales</div>
                    <div className='flex gap-5'>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-56 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Category</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-40 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Location</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <button className='w-32 h-12 text-white bg-oren rounded-md'>Filter</button>
                    </div>
                </div>
                <div className='text-sm text-[#151522]'>Adventure, Purwokerto</div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-16'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    <div className='pt-16'>
                        <img src={Graph} alt="" />
                        <div className='flex gap-44 justify-center'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
      </main>      
      {/* <main className='px-16 py-14 h-[1400px] bg-[#A0A3BD20]'>
        <div className='flex flex-col gap-8 justify-center'>
            <section className='flex flex-col gap-11 py-10 px-12 w-[1050px] rounded-lg bg-white'>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-semibold'>Sales Chart</div>
                    <div className='flex gap-5'>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-56 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Movies Name</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-40 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Weekly</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <button className='w-32 h-12 text-white bg-oren rounded-md'>Filter</button>
                    </div>
                </div>
                <div className='text-sm text-[#151522]'>Avengers: End Game</div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-16'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    <div className='pt-16'>
                        <img src={Graph} alt="" />
                        <div className='flex gap-44 justify-center'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-11 py-10 px-12 w-[1050px] rounded-lg bg-white'>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-semibold'>Ticket Sales</div>
                    <div className='flex gap-5'>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-56 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Category</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-40 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Location</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <button className='w-32 h-12 text-white bg-oren rounded-md'>Filter</button>
                    </div>
                </div>
                <div className='text-sm text-[#151522]'>Adventure, Purwokerto</div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-16'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    <div className='pt-16'>
                        <img src={Graph} alt="" />
                        <div className='flex gap-44 justify-center'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
      </main>      */}
      
    </div>
  )
}

export default App
