import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieCard2({characters, layout}) {
  const [isLoading, setIsLoading] = useState(true);
  // const ImageWithLoading = ({ imageUrl, altText }) => {
    
      const handleImageLoad = () => {
        setIsLoading(false);
      };
  
  //   }
  // const [id, setId] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:8888/movies') 
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data && data.result) {
  //         setCharacters(data.result);
  //       } else {
  //         console.error('Invalid data structure:', data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching movies:', error);
  //     });
  // }, []);

  
  
    


  return (
    <div className={`${layout} gap-5`}>
      {isLoading && (
        <div className='flex gap-5'>
            <div className='flex flex-col items-center gap-3 animate-pulse'>
              <div className='w-[264px] h-[405px] rounded-md bg-gray-400'></div>
              <div className='w-[204px] h-3 rounded-full bg-gray-400'></div>
              <div className='w-[150px] h-3 rounded-full bg-gray-400'></div>
            </div>
            <div className='flex flex-col items-center gap-3 animate-pulse'>
              <div className='w-[264px] h-[405px] rounded-md bg-gray-400'></div>
              <div className='w-[204px] h-3 rounded-full bg-gray-400'></div>
              <div className='w-[150px] h-3 rounded-full bg-gray-400'></div>
            </div>
            <div className='flex flex-col items-center gap-3 animate-pulse'>
              <div className='w-[264px] h-[405px] rounded-md bg-gray-400'></div>
              <div className='w-[204px] h-3 rounded-full bg-gray-400'></div>
              <div className='w-[150px] h-3 rounded-full bg-gray-400'></div>
            </div>
            <div className='flex flex-col items-center gap-3 animate-pulse'>
              <div className='w-[264px] h-[405px] rounded-md bg-gray-400'></div>
              <div className='w-[204px] h-3 rounded-full bg-gray-400'></div>
              <div className='w-[150px] h-3 rounded-full bg-gray-400'></div>
            </div>
            <div className='flex flex-col items-center gap-3 animate-pulse'>
              <div className='w-[264px] h-[405px] rounded-md bg-gray-400'></div>
              <div className='w-[204px] h-3 rounded-full bg-gray-400'></div>
              <div className='w-[150px] h-3 rounded-full bg-gray-400'></div>
            </div>
            <div className='flex flex-col items-center gap-3 animate-pulse'>
              <div className='w-[264px] h-[405px] rounded-md bg-gray-400'></div>
              <div className='w-[204px] h-3 rounded-full bg-gray-400'></div>
              <div className='w-[150px] h-3 rounded-full bg-gray-400'></div>
            </div>
        </div>

      )}
      
      {characters.map((character, index) => (
        <div key={index} className='flex flex-col justify-center items-center'>
          <div className='group rounded-xl overflow-hidden relative'>
            <img
              className='w-[264px] h-[405px] rounded-md'
              src={`http://localhost:8888/movies/image/${character.image_movie}`}
              alt={character.title || 'Movie image'}
              onLoad={handleImageLoad} 
            />
            <div className='flex-col gap-2 absolute inset-0 bg-[rgba(0,0,0,0.5)] invisible group-hover:visible flex justify-center items-center'>
              <Link to={`/movie/${character.id}`} className='w-44 h-12 border border-white text-white rounded-md text-center py-2.5'>
                Detail
              </Link>
              <Link className='w-44 h-12 bg-oren text-white text-center rounded-md py-2.5'>
                Buy Ticket
              </Link>
            </div>
          </div>
          <div className='text-2xl font-semibold'>{character.title}</div>
          {/* <div className='text-oren text-base font-semibold'>{props.date}</div> */}
          <div className='flex gap-1'>
            {character.genre.split(",").slice(0,2).map((val) => (
            <span key="key" className='rounded-lg px-2 bg-[#A0A3BD10] text-[#A0A3BD]'>{val}</span>
            ))}
              
        
          </div>
        </div>
      ))}
    </div>
  );
}
MovieCard2.propTypes = {
  characters: PropTypes.array.isRequired,
  layout: PropTypes.string.isRequired
}
export default MovieCard2;
