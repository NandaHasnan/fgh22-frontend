import { useState } from "react";
// import { FaCheck } from "react-icons/fa6";
// import Cineone from '../assets/gambar/CineOne21 2.png'
// import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Barcode from '../assets/gambar/barcode.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import Ebv from '../assets/gambar/ebv.id 2.png'

function TicketPaid(props) {
    const [isShow, setShow] = useState(false);
    return ( 
        <div className='py-10 px-12 w-[327px] md:w-[950px] rounded-lg bg-white'>
          <div className='flex flex-col gap-10'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-1'>
                  <div className="md:hidden w-32">
                      {/* <img src={Hiflix} alt="" /> */}
                      {props.title === 'Hiflix' &&<img src={Hiflix} alt="" />}
                      {props.title === 'Ebv.id' &&<img src={Ebv} alt="" />}
                  </div>
                  <div className='text-xs md:text-sm text-[#AAAAAA]'>Monday, 14 June 2020 - 02:00pm</div>
                  <div className='text-base md:text-2xl '>Avengers: End Game</div>
              </div>
              <div className="hidden md:block">
                  {/* <img src={Hiflix} alt="" /> */}
                  {props.title === 'Hiflix' &&<img src={Hiflix} alt="" />}
                  {props.title === 'Ebv.id' &&<img src={Ebv} alt="" />}
              </div>
            </div>
            <div className='px-6 w-full h-[1px] bg-[#DEDEDE]'></div>
            <div className='md:flex md:flex-row flex flex-col gap-4 justify-center items-center md:justify-between'>
              <div className='md:flex md:flex-row flex flex-col gap-4'>
                  <div className='w-48 h-10 bg-[#6E719120] text-center py-1.5 text-[#6E7191] font-semibold rounded-lg'>Ticket used</div>
                  <div className='w-48 h-10 bg-[#1D4ED820] text-center py-1.5 text-[#1D4ED8] font-semibold rounded-lg'>Paid</div>
              </div>
              <button onClick={() =>setShow(!isShow)} className='text-lg text-[#AAAAAA] flex items-center gap-4'>Show Details{!isShow && <IoIosArrowDown />}{isShow && <IoIosArrowUp />}</button>
            </div>
            {isShow && ( <>
              <div className='text-lg text-[#14142B]'>Ticket Information</div>
              <div className='md:px-12 md:flex md:flex-row flex flex-col gap-12 items-start md:items-center'> 
                <img className='md:w-44 md:h-44 w-32 h-32' src={Barcode} alt="" />
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
    )   
  }
  
  export default TicketPaid; 