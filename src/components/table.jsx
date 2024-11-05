import { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Spi from '../assets/gambar/Rectangle 119.png'


function Table() {
    useState(0)

  return (
    <table className=''>
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
  );
}

export default Table;
