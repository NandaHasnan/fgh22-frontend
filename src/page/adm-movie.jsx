import { useState } from 'react'
import Spi from '../assets/gambar/Rectangle 119.png'
import { Link } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import NavbarAdmin from '../components/navbar-admin';


function App() {
   useState(0)

  return (
    <div className=''>
      <NavbarAdmin/>

      <main className='px-16 py-14 h-[860px] bg-[#A0A3BD20]'>
        <section className='flex justify-center gap-4'>
                <div className='flex flex-col gap-9 w-[1105px]  bg-white px-8 py-12 rounded-md'>
                    <div className='flex justify-between'>
                        <div className='text-2xl text-[#14142B] font-semibold'>List Movie</div>
                        <div className='flex gap-3.5'>
                            <div className="flex flex-col gap-2">
                                <select className="py-3.5 px-5 w-72 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                    <option className='text-base text-[#4E4B66]' value="">Movies Name</option>
                                    <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                    <option className='text-base text-[#4E4B66]' value="">14.30</option>
                                </select>
                            </div>
                            <Link to='/add-movie' className='w-32 h-12 text-white font-semibold bg-oren rounded-md text-center pt-3'>Add Movies</Link>
                        </div>
                    </div>
                    <table>
                        <tr className='text-center text-xs text-[#1F4173] font-semibold'>
                            <td className='pb-7'>No</td>
                            <td className='pb-7'>Thumbnail</td>
                            <td className='pb-7'>Movie Name</td>
                            <td className='pb-7'>Category</td>
                            <td className='pb-7'>Released Date</td>
                            <td className='pb-7'>Duration</td>
                            <td className='pb-7'>Action</td>
                        </tr>
                        <tbody>
                            <tr className='text-center text-sm text-[#1F4173]'>
                                <td className='pb-4'>1</td>
                                <td className='pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                <td className='pb-4 text-orenMuda'>Spiderman HomeComing</td>
                                <td className='pb-4'>Action, Adventure</td>
                                <td className='pb-4'>07/05/2023</td>
                                <td className='pb-4'>2 Hours 15 Minute</td>
                                <td className='pb-4 flex gap-3 justify-center'>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                </td>
                            </tr>
                            <tr className='text-center text-sm text-[#1F4173]'>
                                <td className='pb-4'>2</td>
                                <td className='pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                <td className='pb-4 text-orenMuda'>Avengers End Game</td>
                                <td className='pb-4'>Sci-fi, Adventure</td>
                                <td className='pb-4'>10/06/2023</td>
                                <td className='pb-4'>2 Hours 15 Minute</td>
                                <td className='pb-4 flex gap-3 justify-center'>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                </td>
                            </tr>
                            <tr className='text-center text-sm text-[#1F4173]'>
                                <td className='pb-4'>3</td>
                                <td className='pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                <td className='pb-4 text-orenMuda'>Spiderman HomeComing</td>
                                <td className='pb-4'>Action, Adventure</td>
                                <td className='pb-4'>02/03/2023</td>
                                <td className='pb-4'>2 Hours 15 Minute</td>
                                <td className='pb-4 flex gap-3 justify-center'>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                </td>
                            </tr>
                            <tr className='text-center text-sm text-[#1F4173]'>
                                <td className='pb-4'>4</td>
                                <td className='pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                <td className='pb-4 text-orenMuda'>Avengers End Game</td>
                                <td className='pb-4'>Sci-fi, Adventure</td>
                                <td className='pb-4'>01/09/2023</td>
                                <td className='pb-4'>2 Hours 15 Minute</td>
                                <td className='pb-4 flex gap-3 justify-center'>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                </td>
                            </tr>
                            <tr className='text-center text-sm text-[#1F4173]'>
                                <td className='pb-4'>5</td>
                                <td className='pb-4 flex items-center justify-center'><div><img src={Spi} alt="" /></div></td>
                                <td className='pb-4 text-orenMuda'>Spiderman HomeComing</td>
                                <td className='pb-4'>Action, Adventure</td>
                                <td className='pb-4'>07/08/2023</td>
                                <td className='pb-4'>2 Hours 15 Minute</td>
                                <td className='pb-4 flex gap-3 justify-center'>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><IoEye className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdModeEdit className="text-white" /></button>
                                    <button className='p-2 w-8 h-8 bg-oren rounded-md'><MdDelete className="text-white"/></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex gap-5 justify-center text-center text-white'>
                        <div className='flex w-10 h-10 bg-orenMuda rounded-md justify-center items-center'>1</div>
                        <div className='flex w-10 h-10 border borde-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>2</div>
                        <div className='flex w-10 h-10 border borde-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>3</div>
                        <div className='flex w-10 h-10 border borde-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>4</div>
                    </div>
                </div>
        </section>
      </main>     
      
    </div>
  )
}

export default App
