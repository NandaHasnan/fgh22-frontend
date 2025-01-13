import { useState } from 'react'
import { useEffect } from 'react';
// import Spi from '../assets/gambar/Rectangle 119.png'
import { Link } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import NavbarAdmin from '../components/navbar-admin';
import { IoMdAdd } from "react-icons/io";
import { useForm } from 'react-hook-form';



function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({})
  const formSearch = useForm()
    

   useEffect(() => {
    fetch('http://localhost:8888/movies') 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.result) {
          setCharacters(data.result)
          setInfo(data.pageInfo)
        } else {
          console.error('Invalid data structure:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

   const table = (value, index) => {
    return (
        <tr key={`list-email-${value.id}-${index}`}>
            <td>{value.id}</td>
            <td className='rounded-md px-7 md:px-0 pb-4 items-center justify-center w-[46px] h-[36px]'><img src={`http://localhost:8888/movies/image/${value.image_movie}`} alt="" /></td>
            <td>{value.title}</td>
            {value.genre.split(",").slice(0,1).map((val) => (
            <td key="index">{val}</td>
            ))}
            <td>{value.release_date}</td>
            <td>{value.duration}</td>
            <td className='px-7 md:px-0 pb-4 flex  gap-3 justify-center items-center'>
                <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
            </td>
        </tr>
    )
   }

   const fetchInfo = (search, page) => {
    const url = new URL("http://localhost:8888/movies")
    url.searchParams.append("search", search)
    url.searchParams.append("page", page)
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setCharacters(data.result)
    })
  }

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=''>
      <NavbarAdmin/>

      <main className='px-16 py-14 h-[1660px] bg-[#A0A3BD20]'>
        <section className='flex justify-center gap-4'>
                <div className='flex flex-col gap-9 md:w-[1105px] w-full bg-white px-8 py-12 rounded-md'>
                    <div className='md:flex md:flex-row flex flex-col gap-6 justify-between'>
                        <div className='flex justify-between items-center'>
                            <div className='text-lg md:text-2xl text-[#14142B] font-semibold'>List Movie</div>
                            <Link to='/add-movie' className='md:hidden w-24 md:w-32 h-12 text-white font-semibold bg-oren rounded-md flex items-center justify-center gap-1.5'><IoMdAdd />Add</Link>
                        </div>
                        <div className="md:hidden flex flex-col gap-2">
                            <select className="py-3.5 px-5 md:w-72 w-full rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Movies Name</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                            {/* <label htmlFor="event" className="text-gray-600">Cari Event</label> */}
                            
                        </div>
                        <form onSubmit={formSearch.handleSubmit(fetchInfo)} className='hidden md:flex gap-3.5'>
                            <div className="flex flex-col gap-2">
                                {/* <select className="py-3.5 px-5 w-72 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                    <option className='text-base text-[#4E4B66]' value="">Movies Name</option>
                                    <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                    <option className='text-base text-[#4E4B66]' value="">14.30</option>
                                </select> */}
                                <input className="py-3.5 px-5 w-72 rounded-md bg-abuMuda2 focus:outline-none" placeholder='Search' type="text" {...formSearch.register('search')} />
                            </div>
                            <Link to='/add-movie' className=' w-32 h-12 text-white font-semibold bg-oren rounded-md text-center pt-3'>Add Movies</Link>
                        </form>
                    </div>
                    {/* <Table/> */}
                    <div className='w-full overflow-x-auto'>
                    {/* <Table/> */}
                        <table className='w-full'>
                            <thead>
                                <tr className='text-center text-xs text-[#1F4173] font-semibold'>
                                    <td className='px-7 md:px-0 pb-7'>No</td>
                                    <td className='px-7 md:px-0 pb-7'>Thumbnail</td>
                                    <td className='px-7 md:px-0 pb-7'>Movie Name</td>
                                    <td className='px-7 md:px-0 pb-7'>Category</td>
                                    <td className='px-7 md:px-0 pb-7'>Released Date</td>
                                    <td className='px-7 md:px-0 pb-7'>Duration</td>
                                    <td className='px-7 md:px-0 pb-7'>Action</td>
                                </tr>
                            </thead>
                            <tbody className='text-center text-sm text-[#1F4173]'>
                                    {characters.map(table)}
                                {/* <tr className='text-center text-sm text-[#1F4173]'>
                                    <td className='px-7 md:px-0 pb-4'>1</td>
                                    <td className='px-7 md:px-0 pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                    <td className='px-7 md:px-0 pb-4 text-orenMuda'>Spiderman HomeComing</td>
                                    <td className='px-7 md:px-0 pb-4'>Action, Adventure</td>
                                    <td className='px-7 md:px-0 pb-4'>07/05/2023</td>
                                    <td className='px-7 md:px-0 pb-4'>2 Hours 15 Minute</td>
                                    <td className='px-7 md:px-0 pb-4 flex gap-3 justify-center'>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                    </td>
                                </tr> */}
                                {/* <tr className='text-center text-sm text-[#1F4173]'>
                                    <td className='px-7 md:px-0 pb-4'>2</td>
                                    <td className='px-7 md:px-0 pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                    <td className='px-7 md:px-0 pb-4 text-orenMuda'>Avengers End Game</td>
                                    <td className='px-7 md:px-0 pb-4'>Sci-fi, Adventure</td>
                                    <td className='px-7 md:px-0 pb-4'>10/06/2023</td>
                                    <td className='px-7 md:px-0 pb-4'>2 Hours 15 Minute</td>
                                    <td className='px-7 md:px-0 pb-4 flex gap-3 justify-center'>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                    </td>
                                </tr>
                                <tr className='text-center text-sm text-[#1F4173]'>
                                    <td className='px-7 md:px-0 pb-4'>3</td>
                                    <td className='px-7 md:px-0 pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                    <td className='px-7 md:px-0 pb-4 text-orenMuda'>Spiderman HomeComing</td>
                                    <td className='px-7 md:px-0 pb-4'>Action, Adventure</td>
                                    <td className='px-7 md:px-0 pb-4'>02/03/2023</td>
                                    <td className='px-7 md:px-0 pb-4'>2 Hours 15 Minute</td>
                                    <td className='px-7 md:px-0 pb-4 flex gap-3 justify-center'>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                    </td>
                                </tr>
                                <tr className='text-center text-sm text-[#1F4173]'>
                                    <td className='px-7 md:px-0 pb-4'>4</td>
                                    <td className='px-7 md:px-0 pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                    <td className='px-7 md:px-0 pb-4 text-orenMuda'>Avengers End Game</td>
                                    <td className='px-7 md:px-0 pb-4'>Sci-fi, Adventure</td>
                                    <td className='px-7 md:px-0 pb-4'>01/09/2023</td>
                                    <td className='px-7 md:px-0 pb-4'>2 Hours 15 Minute</td>
                                    <td className='px-7 md:px-0 pb-4 flex gap-3 justify-center'>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                    </td>
                                </tr>
                                <tr className='text-center text-sm text-[#1F4173]'>
                                    <td className='px-7 md:px-0 pb-4'>5</td>
                                    <td className='px-7 md:px-0 pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                    <td className='px-7 md:px-0 pb-4 text-orenMuda'>Spiderman HomeComing</td>
                                    <td className='px-7 md:px-0 pb-4'>Action, Adventure</td>
                                    <td className='px-7 md:px-0 pb-4'>07/08/2023</td>
                                    <td className='px-7 md:px-0 pb-4'>2 Hours 15 Minute</td>
                                    <td className='px-7 md:px-0 pb-4 flex gap-3 justify-center'>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                        <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex gap-5 justify-center text-center text-white'>
                    <div className='justify-between items-center flex'>
                        <div className='text-black'>Page {info.currentpage}/{info.totalpage}</div>
                                <div className='flex gap-5 justify-center text-center text-white'>
                                {[...Array(info.totalpage)].map((_, index)=> (
                                    <button key={index} onClick={() => fetchInfo(formSearch.getValues("search"), index+1)} disabled={index+1 === info.currentpage} className='flex w-10 h-10  bg-abu rounded-md justify-center items-center disabled:bg-orenMuda disabled:cursor-pointer'>{index + 1}</button>
                                ))}
                                </div>
                            <div className='text-black'>Total Data {info.totaldata}</div>
                        </div>
                    </div>
                </div>
        </section>
      </main>     
      
    </div>
  )
}

export default App
