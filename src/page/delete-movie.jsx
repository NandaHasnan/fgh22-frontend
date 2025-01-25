import { useState } from 'react';
import { useEffect } from 'react';
// import Spiderman from '../assets/gambar/spiderman.png';
// import Ebv from '../assets/gambar/ebv.id 2.png';
// import Cineone from '../assets/gambar/CineOne21 2.png';
// import Hiflix from '../assets/gambar/hiflix 2.png';
import {  useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
import {  useSelector  } from 'react-redux';
// // import MovieCard2 from '../components/movie-card2';
// import { useForm } from 'react-hook-form';
// import * as setBookingDetails from '../redux/reducers/booking'


function App() {
//   const [isShow, setShow] = useState(false);
  const [movie, setMovie] = useState([]);
//   const [cinema, setCinema] = useState([]);
//   const { register, handleSubmit } = useForm();
//   const dispatch = useDispatch()
  const auth = useSelector(state => state.auth?.token)
//   const navigate = useNavigate()

  const params = useParams()

//   const handleBookNow = (cinema) => {
//     dispatch(
//       setBookingDetails.setBookingDetails({
//         movie_image: (`http://localhost:8888/movies/image/${movie.image_movie}`),
//         title: movie.title,
//         genre: movie.genre,
//         selectedDate: cinema.date || '', 
//         selectedTime: cinema.time || '', 
//         location: cinema.location || '', 
//         cinemaName: cinema.cinema_name,
//       })
//     );
//     navigate('/order');
//   };
//   const params = useParams()

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`http://localhost:8888/movies/detail/${params.id}`, {
        method: "DELETE",
        // body: form,
        headers: {
          Authorization: `Bearer ${auth}`,
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
          setMovie(data.result)
          // setInfo(data.pageInfo)
        } else {
          console.error('Invalid data structure:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [params, auth]);

  // useEffect(() => {
    // if (auth?.token !== "") {

    // const fetchCinema = (filters) => {
    //   const { date, time, location } = filters;
    //   const url = new URL("http://localhost:8888/order/cinema");
    //   if (date) url.searchParams.append("date", date);
    //   if (time) url.searchParams.append("time", time);
    //   if (location) url.searchParams.append("location", location);
  
    //   fetch(url, {
        
    //     headers: {
    //       "Authorization": `Bearer ${auth}`,
    //       'Content-Type' : 'application/x-www-form-urlencoded',
    //     },
    //   })
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       if (data && data.result) {
    //         setCinema(data.result);
    //       } else {
    //         console.error("Invalid data structure:", data);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching cinemas:", error);
    //     });
    // };
  
    // const onFilterSubmit = (data) => {
    //   fetchCinema(data);
    // };
  

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
   
        
      
        <Footer />
      </main>
      
    </div>
  );
}

export default App;
