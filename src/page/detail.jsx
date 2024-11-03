import { useState } from 'react';
import Spiderman from '../assets/gambar/spiderman.png';
import Ebv from '../assets/gambar/ebv.id 2.png';
import Cineone from '../assets/gambar/CineOne21 2.png';
import Hiflix from '../assets/gambar/hiflix 2.png';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function App() {
  useState(0);

  return (
    <div className=''>
      <Navbar />

      <section className='bg-cover py-24 px-6 md:px-12 lg:px-48 h-[462px] bg-cover-detail'>
        <div className=''>
          <img className='pt-24 md:pt-56 w-96 md:w-[264px]' src={Spiderman} alt='' />
        </div>
      </section>

      <main className='pt-72 md:pt-1 px-6 md:px-12 lg:px-48 flex flex-col gap-10'>
        <section className='md:px-20 lg:px-72'>
          <div className='flex flex-col gap-8 pt-5'>
            <div className='md:text-3xl text-xl font-bold text-center md:text-left'>Spider-Man: Homecoming</div>
            <div className='flex gap-1 justify-center md:justify-start'>
              <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Action</span>
              <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Adventure</span>
            </div>
            <div className='flex  md:flex-row gap-20 md:gap-28'>
              <div>
                <div className='text-sm text-abuMuda'>Release date</div>
                <div>June 28, 2017</div>
              </div>
              <div className=''>
                <div className='text-sm text-abuMuda'>Directed by</div>
                <div>Jon Watss</div>
              </div>
            </div>
            <div className='flex md:flex-row gap-28 md:gap-10 lg:gap-[72px]'>
              <div>
                <div className='text-sm text-abuMuda '>Duration</div>
                <div>2 hours 13 minutes</div>
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
            <div className='text-base text-abuMuda w-full md:w-8/12 lg:w-6/12 leading-8'>
              Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under
              the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine -
              distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but
              when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened.
            </div>
          </div>
        </section>

        <section>
          <div className='flex flex-col gap-9'>
            <div className='text-3xl font-medium'>Book Tickets</div>
            <div className='flex flex-col lg:flex-row gap-6 lg:justify-between'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='event' className='text-gray-600 font-semibold'>Choose Date</label>
                <select className='py-3.5 px-6 md:px-10 lg:px-16 w-full md:w-60 lg:w-72 rounded-md bg-abuMuda2 focus:outline-none' id='event' name='event'>
                  <option value=''>21/07/2024</option>
                  <option value=''>22/07/2024</option>
                  <option value=''>23/07/2024</option>
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='event' className='text-gray-600 font-semibold'>Choose Time</label>
                <select className='py-3.5 px-6 md:px-10 lg:px-16 w-full md:w-60 lg:w-72 rounded-md bg-abuMuda2 focus:outline-none' id='event' name='event'>
                  <option value=''>08.30</option>
                  <option value=''>10.30</option>
                  <option value=''>14.30</option>
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='event' className='text-gray-600 font-semibold'>Choose Location</label>
                <div className='flex flex-col md:flex-row gap-5'>
                  <select className='py-4 px-6 md:px-10 lg:px-16 w-full md:w-60 lg:w-72 rounded-md bg-abuMuda2 focus:outline-none' id='event' name='event'>
                    <option value=''>Purwokerto</option>
                    <option value=''>Madiun</option>
                    <option value=''>Semarang</option>
                  </select>
                  <button className='bg-oren px-20 rounded-md text-white'>Filter</button>
                </div>
              </div>
            </div>
            <div className='flex gap-8'>
              <div className='text-xl font-semibold'>Choose Cinema</div>
              <div className='text-lg text-abuMuda font-semibold'>39 Result</div>
            </div>
            <div className='flex flex-wrap gap-5 justify-between'>
              <div className='w-full md:w-[264px] h-[157px] border-2 border-abuMuda3 rounded-md py-11 px-16'>
                <img src={Ebv} alt='' />

              </div>
              <div className='w-full md:w-[264px] h-[157px] border-2 border-abuMuda3 rounded-md py-12 px-12'>
                <img className='w-44' src={Hiflix} alt='' />
              </div>
              <div className='w-full md:w-[264px] h-[157px] border-2 border-abuMuda3 rounded-md py-16 px-16'>
                <img src={Cineone} alt='' />
              </div>
              <div className='w-full md:w-[264px] h-[157px] border-2 border-abuMuda3 rounded-md py-11 px-16'>
                <img src={Ebv} alt='' />
              </div>
            </div>
            <div className='flex gap-5 justify-center text-center text-white'>
              <div className='flex w-10 h-10 bg-orenMuda rounded-md justify-center items-center'>1</div>
              <div className='flex w-10 h-10 border-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>2</div>
              <div className='flex w-10 h-10 border-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>3</div>
              <div className='flex w-10 h-10 border-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>4</div>
            </div>
            <div className='flex justify-center'>
              <Link to='/order' className='bg-oren py-4 px-20 rounded-md text-white'>Book Now</Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;
