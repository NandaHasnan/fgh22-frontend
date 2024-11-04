import { useState } from 'react'
import Ebv from '../assets/gambar/ebv.id 2.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Barcode from '../assets/gambar/barcode.png'
import InfoProfile from '../components/info-profile'
import AccountProfile from '../components/account-profile'
import Navbar from '../components/navbar-profile'


function App() {
   useState(0)
  const [isShow, setShow] = useState(false);
  const [isShow2, setShow2] = useState(false);
  return (
    <div className=''>
      <Navbar/>

      <main>
        <section className='px-16 py-14 h-[1400px] bg-[#A0A3BD20]'>
          <div className='flex gap-8 justify-center'>
                <InfoProfile/>
                <div className='flex flex-col gap-12'>
                  <AccountProfile status='not' content='Account Profile' status2='active' content2='Order History'/>
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
                        <button onClick={() =>setShow(!isShow)} className='text-lg text-[#AAAAAA] flex items-center gap-4'>Show Details{!isShow && <IoIosArrowDown />}{isShow && <IoIosArrowUp />}</button>
                      </div>
                      {isShow && ( <>
                        <div className='text-lg text-[#14142B]'>Ticket Information</div>
                        <div className='flex flex-col gap-3'> 
                          <div className='flex justify-between'>
                            <div className='flex gap-5'>
                              <div className='text-sm text-[#8692A6]'>No. Rekening Virtual</div>
                              <div className='text-sm text-[#8692A6]'>:</div>
                            </div>
                            <div>
                              <input className='text-lg placeholder:text-[#14142B] font-semibold' type="text" id='va' name='va' placeholder='12321328913829724' />
                              <button className='w-16 h-12 border border-orenMuda rounded-lg text-sm text-oren'>Copy</button>
                            </div>
                          </div>
                          <div className='flex justify-between'>
                            <div className='flex gap-5'>
                              <div className='text-sm text-[#8692A6]'>Total Payment</div>
                              <div className='text-sm text-[#8692A6]'>:</div>
                            </div>
                            <input className='text-lg placeholder:text-oren font-semibold text-right' type="text" id='va' name='va' placeholder='$30' />
                          </div>
                          <div className='text-base text-[#A0A3BD] leading-8'>Pay this payment bill before it is due, on <span className='text-base text-[#D00707]'>June 23, 2023</span>. If the bill has not been paid by the specified time, it will be forfeited</div>
                          <Link to='/chart' className='w-48 h-12 bg-oren rounded-lg text-center py-2.5 text-white'>Cek Pembayaran</Link>
                        </div>
                      </>
                        
                      )}
                      
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
                        <button onClick={() =>setShow2(!isShow2)} className='text-lg text-[#AAAAAA] flex items-center gap-4'>Show Details{!isShow2 && <IoIosArrowDown />}{isShow2 && <IoIosArrowUp />}</button>
                      </div>
                      {isShow2 && ( <>
                        <div className='text-lg text-[#14142B]'>Ticket Information</div>
                        <div className='px-12 flex gap-12 items-center'> 
                          <img className='w-44 h-44' src={Barcode} alt="" />
                          <div className='flex flex-col gap-5 justify-center'>
                            <div className='flex gap-6'>
                              <div>
                                <div className='text-xs text-[#AAAAAA]'>Category</div>
                                <div className='text-sm text-[#14142B]'>PG-13</div>
                              </div>
                              <div>
                                <div className='text-xs text-[#AAAAAA]'>Time</div>
                                <div className='text-sm text-[#14142B]'>2:00pm</div>
                              </div>
                              <div>
                                <div className='text-xs text-[#AAAAAA]'>Seats</div>
                                <div className='text-sm text-[#14142B]'>C4, C5, C6</div>
                              </div>
                            </div>
                            <div className='flex gap-6'>
                              <div>
                                <div className='text-xs text-[#AAAAAA]'>Movie</div>
                                <div className='text-sm text-[#14142B]'>Spider-Man: ..</div>
                              </div>
                              <div>
                                <div className='text-xs text-[#AAAAAA]'>Date</div>
                                <div className='text-sm text-[#14142B]'>07 Jul</div>
                              </div>
                              <div>
                                <div className='text-xs text-[#AAAAAA]'>Count</div>
                                <div className='text-sm text-[#14142B]'>3 pcs</div>
                              </div>
                            </div>
                          </div>
                          <div className='flex flex-col gap-2'>
                            <div className='text-base '>Total</div>
                            <div className='text-2xl font-medium'>$30.00</div>
                          </div>
                        </div>
                      </>
                        
                      )}
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
