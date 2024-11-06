import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../assets/gambar/logo2.png';
import Barcode from '../assets/gambar/barcode.png';
import { MdOutlineFileDownload } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function App() {
   useState(0);
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=''>
      <Navbar/>
      <main className='flex flex-col lg:flex-row justify-between gap-10 bg-[#A0A3BD20] p-4 lg:p-0'>
        
          <div className='bg-bg-marvel2 w-full lg:w-[60%] h-[590px] bg-center md:bg-normal bg-cover md:h-full'>
            <div className='bg-[#00000090] w-full lg:w-full h-full lg:h-[920px] flex items-center'>
              <div className='px-6 lg:px-28 pt-10 lg:pt-[60px]'>
                    <div className='flex flex-col gap-5 justify-center items-center md:justify-start md:items-start text-center md:text-left'>
                        <img className='w-48 lg:w-64' src={Logo2} alt="" />
                        <div className='text-3xl lg:text-5xl text-white font-semibold'>Thank you For Purchasing</div>
                        <div className='text-base lg:text-2xl text-[#FFFFFF70] w-full lg:w-[571px]'>Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna et.</div>
                        <div className='text-lg text-white font-semibold flex items-center gap-3 lg:gap-6'>Please Download Your Ticket<HiArrowLongRight /></div>
                    </div>
              </div>
            </div>
          </div>

          <div className=' pt-10 lg:pt-20 px-10 lg:px-28 flex flex-col gap-6 w-full lg:w-[40%]'>
            <div className='flex flex-col gap-48 w-[327px] lg:gap-28 rounded-md lg:w-80 h-auto lg:h-[635px] bg-white p-6'>
                <div className='flex justify-center py-8'>
                  <img className='w-44 h-44' src={Barcode} alt="" />
                </div>
                <div className='flex flex-col gap-6'>
                  <div className='flex flex-wrap justify-between px-6'>
                    <div>
                      <div className='text-xs text-[#AAAAAA]'>Movie</div>
                      <div className='text-sm text-[#14142B] font-normal'>Spider-Man: ..</div>
                    </div>
                    <div>
                      <div className='text-xs text-[#AAAAAA]'>Category</div>
                      <div className='text-sm text-[#14142B] font-normal'>PG-13</div>
                    </div>
                  </div>
                  <div className='flex flex-wrap justify-between px-6'>
                    <div>
                      <div className='text-xs text-[#AAAAAA]'>Date</div>
                      <div className='text-sm text-[#14142B] font-normal'>07 Jul</div>
                    </div>
                    <div>
                      <div className='text-xs text-[#AAAAAA]'>Time</div>
                      <div className='text-sm text-[#14142B] font-normal'>2:00pm</div>
                    </div>
                  </div>
                  <div className='flex flex-wrap justify-between px-6'>
                    <div>
                      <div className='text-xs text-[#AAAAAA]'>Count</div>
                      <div className='text-sm text-[#14142B] font-normal'>3 pcs</div>
                    </div>
                    <div>
                      <div className='text-xs text-[#AAAAAA]'>Seats</div>
                      <div className='text-sm text-[#14142B] font-normal'>C4, C5, C6</div>
                    </div>
                  </div>
                  <div className='px-6'>
                    <div className='rounded-md py-2.5 px-4 lg:px-6 w-full lg:w-60 h-12 border border-[#DEDEDE]'>
                      <div className='flex justify-between '>
                        <div>Total</div>
                        <div>$30.00</div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='flex flex-col gap-2.5 px-4 lg:px-0'>
              <Link className='flex w-full lg:w-[320px] h-14 rounded-md border border-orenMuda items-center justify-center gap-4 lg:gap-6 text-oren font-semibold'>
                <MdOutlineFileDownload />Download
              </Link>
              <Link to='/profil' className='w-full lg:w-[320px] h-14 rounded-md bg-oren text-center text-white font-semibold pt-3'>Done</Link>
            </div>
          </div>
        
      </main>

      <footer className='px-6 lg:px-48 flex flex-col gap-12'>
          <Footer/>
      </footer>
      
    </div>
  )
}

export default App;
