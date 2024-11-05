import { useState } from "react";
// import { FaCheck } from "react-icons/fa6";
import Cineone from '../assets/gambar/CineOne21 2.png'
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function TicketActive() {
    const [isShow, setShow] = useState(false);
    return ( 
        <div className='py-10 px-12 w-full md:w-[950px] rounded-lg bg-white'>
                    <div className='flex flex-col gap-10'>
                      <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-2'>
                            <div className="md:hidden w-32">
                                <img src={Cineone} alt="" />
                            </div>
                            <div className='text-xs md:text-sm text-[#AAAAAA]'>Tuesday, 07 July 2020 - 04:30pm</div>
                            <div className='text-base md:text-2xl '>Spider-Man: Homecoming</div>
                        </div>
                        <div className="hidden md:block">
                            <img src={Cineone} alt="" />
                        </div>
                      </div>
                      <div className='px-6 w-full md:w-[850px] h-[1px] bg-[#DEDEDE]'></div>
                      <div className='md:flex md:flex-row flex flex-col gap-4 justify-center items-center md:justify-between'>
                        <div className='md:flex md:flex-row flex flex-col gap-4'>
                            <div className='w-48 h-10 bg-[#00BA8820] text-center py-1.5 text-[#00BA88] font-semibold rounded-lg'>Ticket in active</div>
                            <div className='w-48 h-10 bg-[#E82C2C20] text-center py-1.5 text-[#E82C2C] font-semibold rounded-lg'>Not Paid</div>
                        </div>
                        <button onClick={() =>setShow(!isShow)} className='text-lg text-[#AAAAAA] flex items-center gap-4'>Show Details{!isShow && <IoIosArrowDown />}{isShow && <IoIosArrowUp />}</button>
                      </div>
                      {isShow && ( <>
                        <div className='text-lg text-[#14142B]'>Ticket Information</div>
                        <div className='flex flex-col gap-3'> 
                          <div className='md:flex md:flex-row flex flex-col gap-2.5 md:justify-between'>
                            <div className='flex gap-5'>
                              <div className='text-sm text-[#8692A6]'>No. Rekening Virtual</div>
                              <div className='text-sm text-[#8692A6]'>:</div>
                            </div>
                            <div className="flex ">
                              <input className='text-lg w-[188px] placeholder:text-[#14142B] font-semibold' type="text" id='va' name='va' placeholder='12321328913829724' />
                              <button className='w-16 h-12 border border-orenMuda rounded-lg text-sm text-oren'>Copy</button>
                            </div>
                          </div>
                          <div className='md:flex md:flex-row flex flex-col gap-2.5 justify-between'>
                            <div className='flex gap-5'>
                              <div className='text-sm text-[#8692A6]'>Total Payment</div>
                              <div className='text-sm text-[#8692A6]'>:</div>
                            </div>
                            <input className='text-lg placeholder:text-oren font-semibold text-left md:text-right' type="text" id='va' name='va' placeholder='$30' />
                          </div>
                          <div className='text-base text-[#A0A3BD] leading-8'>Pay this payment bill before it is due, on <span className='text-base text-[#D00707]'>June 23, 2023</span>. If the bill has not been paid by the specified time, it will be forfeited</div>
                          <Link to='/chart' className='w-full md:w-48 h-12 bg-oren rounded-lg text-center py-2.5 text-white'>Cek Pembayaran</Link>
                        </div>
                      </>
                        
                      )}
                      
                    </div>        
                  </div>
    )   
  }
  
  export default TicketActive; 