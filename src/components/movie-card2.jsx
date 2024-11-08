import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MovieCard2(props) {
  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {
 
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results); 
       
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        
      });
  }, []);




  return (
    <div className='flex-shrink-0 flex gap-5'>
      {characters.map((character) => (
        <div className='flex flex-col justify-center items-center'>
          <div className='group rounded-xl overflow-hidden relative'>
            <img className='w-[264px] h-[405px] rounded-md' src={character.image} alt={character.name} />
            <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
              <Link to='/detail' className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>Detail</Link>
              <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>Buy Ticket</Link>
            </div>
          </div>
          <div className='text-2xl font-semibold'>{character.name}</div>
          <div className='text-oren text-base font-semibold'>{props.date}</div>
          <div className='flex gap-1'>
            <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>{props.genre1}</span>
            <span className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>{props.genre2}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard2;
