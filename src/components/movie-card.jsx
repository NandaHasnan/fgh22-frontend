import { useState } from 'react';
import Cdi from '../assets/gambar/Cinta Dalam Ikhlas.jpg'
import Beit from '../assets/gambar/Bila Esok Ibu Tiada.jpg'
import Td from '../assets/gambar/Tebusan Dosa.jpg'
import Ajaa from '../assets/gambar/Aku Jati, Aku Asperger.jpg'
import { Link } from 'react-router-dom';

function MovieCard(props) {
  useState(0)
  return (
          <div className='flex-shrink-0 flex flex-col gap-5'>
            <div className='flex justify-center items-center'>
              <div className='group rounded-xl overflow-hidden relative'>
                {props.title === 'Tebusan Dosa' && 
                <img className='w-[264px] h-[405px] rounded-md' src={Td} alt="Movie poster" />}
                {props.title === 'Cinta Dalam Ikhlas' && 
                <img className='w-[264px] h-[405px] rounded-md' src={Cdi} alt="Movie poster" />}
                {props.title === 'Bila Esok Ibu Tiada' && 
                <img className='w-[264px] h-[405px] rounded-md' src={Beit} alt="Movie poster" />}
                {props.title === 'Aku Jati, Aku Asperger' && 
                <img className='w-[264px] h-[405px] rounded-md' src={Ajaa} alt="Movie poster" />}
                <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
                  <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
                  <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
                </div>
              </div>
            </div>
            <div className='text-2xl font-semibold'>{props.title}</div>
            <div className='text-oren text-base font-semibold'>{props.date}</div>
            <div className='flex gap-1'>
              <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>{props.genre1}</span>
              <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>{props.genre2}</span>
            </div>
          </div>
  )
}

export default MovieCard;
