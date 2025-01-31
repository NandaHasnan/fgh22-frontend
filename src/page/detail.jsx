import { useState } from 'react';
import { useEffect } from 'react';
// import Spiderman from '../assets/gambar/spiderman.png';
import Ebv from '../assets/gambar/ebv.id 2.png';
import Cineone from '../assets/gambar/CineOne21 2.png';
import Hiflix from '../assets/gambar/hiflix 2.png';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector  } from 'react-redux';
// import MovieCard2 from '../components/movie-card2';
import { useForm } from 'react-hook-form';
import * as setBookingDetails from '../redux/reducers/booking'


function App() {
  const [isShow, setShow] = useState(false);
  const [movie, setMovie] = useState([]);
  const [cinema, setCinema] = useState([]);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth?.token)
  const navigate = useNavigate()

  const params = useParams()

  const handleBookNow = (cinema) => {
    dispatch(
      setBookingDetails.setBookingDetails({
        movie_image: (`http://localhost:8888/movies/image/${movie.image_movie}`),
        title: movie.title,
        genre: movie.genre,
        selectedDate: cinema.date || '', 
        selectedTime: cinema.time || '', 
        location: cinema.location || '', 
        cinemaName: cinema.cinema_name,
      })
    );
    navigate('/order');
  };
  
  

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:8888/movies/${params.id}`) 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.result) {
          setMovie(data.result)
          // setInfo(data.pageInfo)
        } else {
          console.error('Invalid data structure:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [params]);

  // useEffect(() => {
    // if (auth?.token !== "") {

    const fetchCinema = (filters) => {
      const { date, time, location } = filters;
      const url = new URL("http://localhost:8888/order/cinema");
      if (date) url.searchParams.append("date", date);
      if (time) url.searchParams.append("time", time);
      if (location) url.searchParams.append("location", location);
  
      fetch(url, {
        
        headers: {
          "Authorization": `Bearer ${auth}`,
          'Content-Type' : 'application/x-www-form-urlencoded',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.result) {
            setCinema(data.result);
          } else {
            console.error("Invalid data structure:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching cinemas:", error);
        });
    };
  
    const onFilterSubmit = (data) => {
      fetchCinema(data);
    };
  

  return (
    <div className=''>
      <Navbar />
      

        <section className={`bg-cover py-24 px-6 md:px-12 lg:px-48 h-[462px] bg-cover-detail`}>
        <div className=''>
          <img className='pt-24 md:pt-56 w-96 md:w-[264px]' src={`http://localhost:8888/movies/image/${movie.image_movie}`} alt='' />
        </div>
      </section>

    
      <main className='pt-72 md:pt-1 px-6 md:px-12 lg:px-48 flex flex-col gap-10'>
        <section className='md:px-20 lg:px-72'>
          <div className='flex flex-col gap-8 pt-5'>
            <div className='md:text-3xl text-xl font-bold text-center md:text-left'>{movie.title}</div>
            <div className='flex gap-1 justify-center md:justify-start'>
              <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>{movie.genre}</span>
              {/* <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Adventure</span> */}
            </div>
            <div className='flex  md:flex-row gap-20 md:gap-28'>
              <div>
                <div className='text-sm text-abuMuda'>Release date</div>
                <div>{movie.release_date}</div>
              </div>
              <div className=''>
                <div className='text-sm text-abuMuda'>Directed by</div>
                <div>{movie.director}</div>
              </div>
            </div>
            <div className='flex md:flex-row gap-28 md:gap-10 lg:gap-[72px]'>
              <div>
                <div className='text-sm text-abuMuda '>Duration</div>
                <div>{movie.duration}</div>
              </div>
              <div>
                <div className='text-sm text-abuMuda'>Casts</div>
                <div>{movie.cast_actor}</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='flex flex-col gap-1'>
            <div className='text-xl font-semibold'>Synopsis</div>
            <div className='text-base text-abuMuda w-full md:w-8/12 lg:w-6/12 leading-8'>
              {movie.synopsis}
            </div>
          </div>
        </section>
   
        <section>
          <div className='flex flex-col gap-9'>
            <div className='text-3xl font-medium hidden md:block'>Book Tickets</div>
            <div className='text-lg text-center font-medium md:hidden'>Showtimes and Tickets</div>
            <form onSubmit={handleSubmit(onFilterSubmit)} className='flex flex-col lg:flex-row gap-6 lg:justify-between'>
              <div  className='flex flex-col gap-2'>
                <label htmlFor='event' className='text-gray-600 font-semibold' value='date'>Choose Date</label>
                <select className='py-3.5 px-6 md:px-10 lg:px-16 w-full md:w-60 lg:w-72 rounded-md bg-abuMuda2 focus:outline-none' id="date" {...register("date")}>
                  <option value="">Select Date</option>
                  <option value="2025-01-01">2025-01-01</option>
                  <option value="2025-01-02">2025-01-02</option>
                </select>
              </div>
              <div className='hidden md:flex flex-col gap-2'>
                <label htmlFor='event' className='text-gray-600 font-semibold' value='time'>Choose Time</label>
                <select className='py-3.5 px-6 md:px-10 lg:px-16 w-full md:w-60 lg:w-72 rounded-md bg-abuMuda2 focus:outline-none' id="time" {...register("time")}>
                  <option value="">Select Time</option>
                  <option value="06:35:00">06:35:00</option>
                  <option value="08:35:00">08:35:00</option>
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor='event' className='text-gray-600 font-semibold' value='location'>Choose Location</label>
                <div className='flex flex-col md:flex-row gap-5'>
                  <select className='py-4 px-6 md:px-10 lg:px-16 w-full md:w-60 lg:w-72 rounded-md bg-abuMuda2 focus:outline-none' id="location" {...register("location")}>
                    <option value="">Select Location</option>
                    <option value="jakarta">Jakarta</option>
                    <option value="bandung">Bandung</option>
                  </select>
                  <button type="submit" className='bg-oren h-14 md:px-20 rounded-md text-white'>Filter</button>
                </div>
              </div>
            </form>
            <div className='flex gap-8 items-center justify-center md:items-start md:justify-start'>
              <div className='text-xl font-semibold hidden md:block'>Choose Cinema</div>
              <div className='text-lg text-abuMuda font-semibold'>39 Result</div>
            </div>
            <div className='flex flex-wrap gap-5 justify-between'>
              <div className='md:hover:bg-orenMuda md:hidden w-full md:w-[264px] md:h-[157px] border-2 border-abuMuda3 rounded-md px-8 py-3 md:py-11 md:px-16'>
                <img src={Ebv} alt='' />
                <div className='md:hidden flex flex-col gap-5'>
                  <div className=' flex justify-between'>
                    <div className='text-2xl'>EBV.id</div>
                    <button onClick={() =>setShow(!isShow)} className='text-lg flex items-center gap-4'>{!isShow && <IoIosArrowDown />}{isShow && <IoIosArrowUp />}</button>
                  </div>
                  <div className=' text-xs text-[#6E7191]'>Whatever street No.12, South Purwokerto</div>
                  {isShow && ( <>
                      <div className='flex flex-col gap-7'>
                        <div className='w-full h-[1px] bg-[#DEDEDE] '></div>
                        <div className='text-xl font-medium'>REGULAR</div>
                        <div className='grid grid-cols-2 gap-7'>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-orenMuda rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                        </div>
                        <div className='text-xl font-medium'>GOLD</div>
                        <div className='grid grid-cols-2 gap-7'>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-orenMuda rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                        </div>
                        <div className='text-xl font-medium'>PLATINUM S</div>
                        <div className='grid grid-cols-2 gap-7'>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-orenMuda rounded-full text-center text-sm py-1'>08:30 AM</div>
                          <div className='w-20 h-8 bg-[#A0A3BD20] rounded-full text-center text-sm py-1'>08:30 AM</div>
                        </div>
                      </div>

                  </>
                   )}
                </div>
              </div>
            </div>
              <div className="flex gap-5 justify-between">
                {cinema.map((cin, index) => (
                  <div key={index} className="w-full md:w-[264px]">
                    {/* <div className="md:hover:bg-orenMuda w-full md:w-[264px] md:h-[157px] border-2 border-abuMuda3 rounded-md px-8 py-3 md:py-11 md:px-16"> */}
                    
                      <button onClick={() => handleBookNow(cin)} className="md:hover:bg-orenMuda w-full md:w-[264px] md:h-[157px] cursor-pointer text-center border-2 border-abuMuda3 rounded-md px-8 py-3 md:py-11 md:px-16"><img src={`${cin.cinema_name === "ebu.id" && Ebv || cin.cinema_name === "hiflix" && Hiflix || cin.cinema_name === "cineone21" && Cineone}`} alt="" /></button>
                    
                    {/* </div> */}
                    {/* <button onClick={() => handleBookNow(cin)} className='bg-oren py-4 px-20 rounded-md text-white'>Book Now</button> */}
                  </div>
                ))}
              </div>
            <div className='flex gap-5 justify-center text-center text-white'>
              <div className='flex w-10 h-10 bg-orenMuda rounded-md justify-center items-center'>1</div>
              <div className='flex w-10 h-10 border-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>2</div>
              <div className='flex w-10 h-10 border-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>3</div>
              <div className='flex w-10 h-10 border-2 border-abuMuda3 rounded-md justify-center items-center text-text1'>4</div>
            </div>
            {/* <div  className='flex justify-center'>
              <button onClick={() => handleBookNow} className='bg-oren py-4 px-20 rounded-md text-white'>Book Now</button>
            </div> */}
          </div>
        </section>
      
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
