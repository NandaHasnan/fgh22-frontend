import { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiAddLargeFill } from "react-icons/ri";
import NavbarAdmin from '../components/navbar-admin';


function App() {
   useState(0)

  return (
    <div className=''>
      <NavbarAdmin/>

      <main className='px-16 py-14 flex flex-col gap-10 bg-[#A0A3BD20]'>
        <section className='flex justify-center gap-4'>
            
            <div className=''>
                <div className='flex flex-col gap-9 md:w-[732px] w-full  bg-white px-8 py-12 rounded-md'>
                    <div className='text-2xl text-[#14142B] font-semibold'>Add New Movie</div>
                    <div className='flex flex-col gap-8'>
                        <label className='text-base text-[#696F79]' htmlFor="">Upload Image</label>
                        <button className='w-24 h-7 bg-oren rounded-md text-white'>Upload</button>
                    </div>
                    <form>
                        <div className='flex flex-col gap-3.5'>
                            <label className='text-base text-[#696F79]' htmlFor="movie-name">Movie Name</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='movie-name' name='movie-name' placeholder='Spider-Man: Homecoming'/>
                            <label className='text-base text-[#696F79]' htmlFor="category">Category</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='category' name='category' placeholder='Action, Adventure, Sci-Fi'/>
                            <div className='md:flex md:flex-row flex flex-col gap-6 justify-between'>
                               <div className='flex flex-col gap-3.5'>
                                <label className='text-base text-[#696F79]' htmlFor="release-date">Release date</label>
                                <input className='w-full md:w-96 h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='release-date' name='release-date' placeholder='07/05/2020'/>
                               </div> 
                               <div className='flex flex-col gap-3.5'>
                                <label className='text-base text-[#696F79]' htmlFor="duration">Duration (hour / minute)</label>
                                <div className='md:flex md:flex-row flex flex-col gap-6'>
                                    <input className='w-full md:w-28 h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='duration' name='duration' placeholder='2'/>
                                    <input className='w-full md:w-28 h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='duration' name='duration' placeholder='13'/>
                                </div>
                               </div> 
                            </div>
                            <label className='text-base text-[#696F79]' htmlFor="director-name">Director Name</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='director-name' name='director-name' placeholder='Jon Watts'/>
                            <label className='text-base text-[#696F79]' htmlFor="cast">Cast</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='cast' name='cast' placeholder='Tom Holland, Michael Keaton, Robert Dow..'/>
                            <label className='text-base text-[#696F79]' htmlFor="synopsis">Synopsis</label>
                            <textarea className='w-full h-52 border rounded-md px-11 py-5 border-[#DEDEDE]' type="text" id='synopsis' name='synopsis' placeholder='Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | '/>
                            <label className='text-base text-[#696F79]' htmlFor="add-location">Add Location</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='add-location' name='add-location' placeholder='Purwokerto, Bandung, Bekasi'/>
                            <label className='text-base text-[#696F79]' htmlFor="full-name">Set  Date & Time</label>
                            <div className="flex flex-col gap-2">
                                <select className="py-3.5 px-5 w-48 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                    <option className='text-base text-[#4E4B66]' value="">Set a date</option>
                                    <option className='text-base text-[#4E4B66]' value="">10/10/2024</option>
                                    <option className='text-base text-[#4E4B66]' value="">10/10/2024</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex gap-7 items-center'>
                                    <div className='w-16 h-8 border border-orenMuda rounded-md py-1.5 pl-6'><RiAddLargeFill className='text-oren'/></div>
                                    <div className='text-sm text-[#4E4B66] font-semibold'>08:30am</div>
                                    <div className='text-sm text-[#4E4B66] font-semibold'>10:30pm</div>
                                </div>
                                <div className='w-full h-[1px] bg-[#DEDEDE]'></div>
                            </div>
                        </div>
                    </form>
                    
                    <Link to='/payment-modal' className='w-full h-14 bg-oren text-center pt-3.5 rounded-md text-white font-semibold'>Save Movie</Link>
                </div>
            </div>
            
        </section>
      </main>    
      
    </div>
  )
}

export default App
