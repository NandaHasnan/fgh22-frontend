import { useState } from 'react';
// import Cdi from '../assets/gambar/Cinta Dalam Ikhlas.jpg'
// import Beit from '../assets/gambar/Bila Esok Ibu Tiada.jpg'
// import Td from '../assets/gambar/Tebusan Dosa.jpg'
// import Ajaa from '../assets/gambar/Aku Jati, Aku Asperger.jpg'
const MovieSection = () => {
  useState(0)
  

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
      {/* <div className="grid grid-cols-2 gap-4 md:w-1/2">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default MovieSection;
