import { useState } from 'react'
import Cdi from '../assets/gambar/Cinta Dalam Ikhlas.jpg'
import Beit from '../assets/gambar/Bila Esok Ibu Tiada.jpg'
import Td from '../assets/gambar/Tebusan Dosa.jpg'
import Ajaa from '../assets/gambar/Aku Jati, Aku Asperger.jpg'
// import Widow from '../assets/gambar/widow.png'
// import Wiches from '../assets/gambar/wiches.png'
// import Tenet from '../assets/gambar/tenet.png'
// import Spiderman from '../assets/gambar/spiderman.png'
import { Link } from 'react-router-dom';
import { BsShieldFillCheck } from "react-icons/bs";
import { FaCircleCheck } from "react-icons/fa6";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MovieCard() {
  return (
    <div className='flex-shrink-0 flex flex-col gap-5'>
            <div className='flex justify-center items-center'>
              <div className='group rounded-xl overflow-hidden relative'>
                <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                  <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                  <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                </div>
              </div>
            </div>
            <div className='text-2xl font-semibold'>Black Widow</div>
            <div className='flex gap-1'>
              <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
              <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
            </div>
          </div>
  )
}

function App() {
   useState(0)

  return (
    <div className=''>
      <Navbar/>

      <main className='px-4 sm:px-12 md:px-20 lg:px-32 xl:px-48 flex flex-col gap-10'>
        <section className='flex flex-col sm:flex-row items-center py-14 gap-6'>
          <div className='flex flex-col gap-2.5'>
            <div className='text-oren text-lg font-bold text-center sm:text-left'>MOVIE TICKET PURCHASES #1 IN INDONESIA</div>
            <div className='text-5xl leading-[70px] text-center sm:text-left'>Experience the Magic of Cinema: Book Your Tickets Today</div>
            <div className='text-abu text-base text-center sm:text-left'>Sign up and get the ticket with a lot of discount</div>
          </div>
          <div className='columns-2 gap-3'>
            <img className='w-52 h-44' src={Cdi} alt="" />
            <img className='w-52 h-64' src={Beit} alt="" />
            <img className='w-52 h-64' src={Td} alt="" />
            <img className='w-52 h-44' src={Ajaa} alt="" />
          </div>
        </section>

        <section className='flex flex-col gap-6'>
          <div className=' flex flex-col gap-3.5'>
            <div className='text-oren text-base font-bold text-center sm:text-left'>WHY CHOOSE US</div>
            <div className='text-3xl w-full sm:w-96 text-center sm:text-left'>Unleashing the Ultimate Movie Experience</div>
          </div>
          <div className='flex flex-col sm:flex-row gap-8'>
            <div className='flex flex-col gap-5 text-center sm:text-left'>
              <div className='p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full mx-auto sm:mx-0'><BsShieldFillCheck /></div>
              <div className='text-lg font-semibold'>Guaranteed</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
            <div className='flex flex-col gap-5 text-center sm:text-left'>
              <div className='p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full mx-auto sm:mx-0'><FaCircleCheck /></div>
              <div className='text-lg font-semibold'>Affordable</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
            <div className='flex flex-col gap-5 text-center sm:text-left'>
              <div className='p-4 w-14 h-14 bg-orenMuda text-white text-2xl rounded-full mx-auto sm:mx-0'><LuMessagesSquare /></div>
              <div className='text-lg font-semibold'>24/7 Customer Support</div>
              <div className='text-base text-abu'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</div>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-7 py-14'>
          <div className='text-center flex flex-col gap-3.5'>
            <div className='text-lg text-oren font-semibold'>MOVIES</div>
            <div className='text-3xl w-full sm:w-[545px] mx-auto'>Exciting Movies That Should Be Watched Today</div>
          </div>

          <div className=' overflow-x-auto flex gap-10 px-4'>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            {/* <div className='flex space-x-10 min-w-full'>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='group rounded-xl overflow-hidden relative'>
                    <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                    <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='group rounded-xl overflow-hidden relative'>
                    <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                    <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>
                        Detail
                      </Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='group rounded-xl overflow-hidden relative'>
                    <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                    <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>
                        Detail
                      </Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='group rounded-xl overflow-hidden relative'>
                    <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                    <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>
                        Detail
                      </Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='group rounded-xl overflow-hidden relative'>
                    <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                    <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>
                        Detail
                      </Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='group rounded-xl overflow-hidden relative'>
                    <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                    <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>
                        Detail
                      </Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='group rounded-xl overflow-hidden relative'>
                    <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                    <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>
                        Detail
                      </Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex justify-center items-center'>
                  <div className='group rounded-xl overflow-hidden relative'>
                    <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />
                    <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>
                        Detail
                      </Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>
                        Buy Ticket
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
            </div> */}
          </div>

          <Link to="/movie" className='flex gap-4 items-center justify-center text-oren text-center py-14 font-semibold'>
            View All
            <FaArrowRightLong className='animate-bounce' />
          </Link>
        </section>

        <section className='flex flex-col gap-3.5'>
          <div className='text-oren text-base font-bold text-center sm:text-left'>WHY CHOOSE US</div>
          <div className='flex justify-between items-center'>
            <div className='text-3xl text-center sm:text-left'>Unleashing the Ultimate Movie Experience</div>
            <div className='gap-2 hidden md:block'>
              <button className='p-5 text-white text-2xl w-16 h-16 bg-abu rounded-full'><FaArrowLeftLong /></button>
              <button className='p-5 text-white text-2xl w-16 h-16 bg-oren rounded-full'><FaArrowRightLong /></button>
            </div>
          </div>
            <div className='overflow-x-scroll flex gap-10 justify-between'>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>

              {/* <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Widow} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Black Widow</div>
                <div className='text-oren text-base font-semibold'>December 2024</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Wiches} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>The Witches</div>
                <div className='text-oren text-base font-semibold'>January 2024</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Comedy</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Tenet} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Tenet</div>
                <div className='text-oren text-base font-semibold'>June 2024</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Sci-Fi</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex  justify-center items-center'>
                  <div className='group  rounded-xl overflow-hidden'>
                    <img className='absolute' src={Spiderman} alt="" />
                    <div className='flex-col gap-2 relative w-[264px] h-[405px] bg-[rgb(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                      <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                      <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                    </div>
                  </div>
                </div>
                <div className='text-2xl font-semibold'>Spiderman</div>
                <div className='text-oren text-base font-semibold'>March 2024</div>
                <div className='flex gap-1'>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Action</span>
                  <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>Adventure</span>
                </div>
              </div> */}
            </div>
        </section>

        <section className='w-full h-72 bg-oren py-20 flex flex-col gap-12 rounded-lg'>
          <div className='text-5xl text-white text-center'>Subscribe to our newsletter</div>
          <div className='flex flex-col sm:flex-row gap-2.5 justify-center'>
            <input className='p-4 border-white border bg-oren text-white placeholder:text-white rounded-lg' type="text" placeholder='First name'/>
            <input className='p-4 border-white border bg-oren text-white placeholder:text-white rounded-lg' type="text" placeholder='Email address'/>
            <button className='bg-white py-4 px-11 rounded-lg text-oren'>Subscribe Now</button>
          </div>
        </section>
        
        <Footer/>
      </main>
      
    </div>
  )
}

export default App
