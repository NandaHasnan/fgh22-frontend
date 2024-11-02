import { useState } from 'react';
import John from '../assets/gambar/john.png'
import Lion from '../assets/gambar/lion.png'
import Spi from '../assets/gambar/spi.png'
import Roblox from '../assets/gambar/roblox.png'

const MovieSection = () => {
  useState(0)
  const movies = [
    { id: 1, title: 'John Wick', image: John },
    { id: 2, title: 'The Lion King', image: Lion },
    { id: 3, title: 'Spider-Man', image: Spi },
    { id: 4, title: 'Roblox', image: Roblox }
  ];

  return (
    <section className="flex flex-col md:flex-row py-14 gap-10">
      {/* Text Content */}
      <div className="flex flex-col gap-2.5 md:w-1/2">
        <div className="text-oren text-lg font-bold">
          MOVIE TICKET PURCHASES #1 IN INDONESIA
        </div>
        <div className="text-5xl">
          Experience the Magic of Cinema: Book Your Tickets Today
        </div>
        <div className="text-abu text-base">
          Sign up and get the ticket with a lot of discount
        </div>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 gap-4 md:w-1/2">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
