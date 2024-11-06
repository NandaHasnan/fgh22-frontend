import { useState } from 'react'
import { useEffect } from 'react';
import Coverspi from '../assets/gambar/Rectangle 618.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Step from '../components/step-active';
import Step2 from '../components/step-oren';
import Seat from '../components/grid-seat';

function App() {
    const [isShow, setShow] = useState(false);
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className=''>
      <Navbar/>
      <main className='py-8 px-4 md:px-16 lg:px-32 xl:px-48 flex flex-col gap-10 bg-[#A0A3BD20]'>
        <div className='hidden gap-6 md:flex flex-col md:flex-row justify-center items-center mb-8'>
          <Step status='active' content='Date and time'/>
          <div className="hidden md:block w-16 border border-abu border-dashed"></div>
          <Step2 status='not' content='Seat' num='2'/>
          <div className="hidden md:block w-16 border border-abu border-dashed"></div>
          <Step2 status='not' content='Payment' num='3'/>
        </div>

        <section className='flex flex-col lg:flex-row justify-center gap-4'>
          <div className=''>
            <div className='flex flex-col gap-9 w-full lg:w-[732px] h-full lg:h-[807px] bg-white px-5 py-9 rounded-md'>
              <div className='flex flex-col md:flex-row gap-3.5 w-full h-full border border-abuMuda3 rounded-md py-3 px-6'>
                <img src={Coverspi} alt="Cover" className='w-full md:w-auto' />
                <div className='flex flex-col gap-3.5'>
                  <div className='text-xl text-center md:text-left md:text-3xl font-bold'>Spider-Man: Homecoming</div>
                  <div className='justify-center md:justify-start flex gap-1'>
                    <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Action</span>
                    <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Adventure</span>
                  </div>
                  <div className='flex flex-col lg:flex-row md:justify-between justify-center items-center gap-5'>
                    <div className='text-sm md:text-base'>Regular - 13:00 PM</div>
                    <button className='w-24 md:w-28 h-8 bg-oren text-white rounded-md'>Change</button>
                  </div>
                </div>
              </div>
              <Seat/>
            </div>
          </div>
          <div className='hidden md:flex flex-col gap-10'>
              <div className='flex flex-col gap-10 pt-4 w-full lg:w-[358px] h-full lg:h-[413px] bg-white rounded-md'>
                <div className='flex flex-col gap-3'>
                  <div className='flex justify-center px-24'>
                    <img className='justify-center' src={Cineone} alt="Cinema logo" />
                  </div>
                  <div className='text-xl md:text-2xl text-center '>CineOne21 Cinema</div>
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
                <div className='w-full h-1 bg-[#E6E6E6]'></div>
                <div className='px-5 flex justify-between'>
                  <div className='text-lg font-semibold'>Total Payment</div>
                  <div className='text-2xl text-[#1D4ED8] font-semibold'>$30</div>
                </div>
              </div>
              <Link to='/payment' className='py-3.5 w-full lg:w-[358px] h-14 bg-oren rounded-md text-white text-center'>Checkout now</Link>
            </div>
          <div className='md:hidden'>
            <button onClick={() =>setShow(!isShow)} className='w-full h-14 rounded-lg bg-oren text-white'>Submit</button>
          </div>

          {isShow && ( <>
            <div className="px-6 md:block fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">  
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10 py-4 md:pt-4 px-5 w-full lg:w-[358px] h-full lg:h-[413px] bg-white rounded-md'>
                  <div className='flex flex-col gap-3'>
                    <div className='flex justify-center px-24'>
                      <img className='justify-center' src={Cineone} alt="Cinema logo" />
                    </div>
                    <div className='text-xl md:text-2xl text-center '>CineOne21 Cinema</div>
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
                  <div className='w-full h-1 bg-[#E6E6E6]'></div>
                  <div className='px-5 flex justify-between'>
                    <div className='text-lg font-semibold'>Total Payment</div>
                    <div className='text-2xl text-[#1D4ED8] font-semibold'>$30</div>
                  </div>
                  <Link to='/payment' className='py-3.5 w-full lg:w-[358px] h-14 bg-oren rounded-md text-white text-center'>Checkout now</Link>
                </div>
                
              </div>
            </div>
          </>
                        
        )}
        </section>
      </main>
        <div className='md:px-52 px-10'>
            <Footer/>
        </div>
      
    </div>
  )
}

export default App
