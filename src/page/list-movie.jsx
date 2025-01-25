import { useState } from 'react'
import { useEffect } from 'react';
// import { GoArrowRight } from "react-icons/go";
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import MovieCard2 from '../components/movie-card2'
import { useForm } from 'react-hook-form';
// import { preview } from 'vite';

function App() {
  const [characters, setCharacters] = useState([]);
  const formSearch = useForm()
  const [info, setInfo] = useState({})

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // const pageMovie = (e) => {
  //   const pageM = new URL(`http://localhost:8888/movies?page=${page}`)
    
  // }

  return (
    <div className=''>
      <Navbar/>

      <section className=' bg-cover py-24 px-48 h-[462px] bg-cover-marvel'>
            <div className=''>
                <div className='text-lg text-white'>LIST MOVIE OF THE WEEK</div>
                <div className='pr-96 text-5xl text-white'>Experience the Magic of Cinema: Book Your Tickets Today</div>
            </div>
      </section>  

      <main className='px-48 flex flex-col gap-10'>
        <section className='py-16'>
            <div className='flex gap-5'>
                <form className="flex flex-col gap-4" onSubmit={formSearch.handleSubmit(fetchInfo)}>
                    <label htmlFor="event" className="text-gray-600">Cari Event</label>
                    <input className="py-3 px-4 rounded-md border border-abu focus:outline-none " placeholder='Search' type="text" {...formSearch.register('search')} />
                    {/* <button>submit</button> */}
                </form>
                <div className='flex flex-col gap-5'>
                    <label htmlFor="filter">Filter</label>
                    <div>
                        <button className='cursor-pointer px-6 py-2.5 bg-oren text-white rounded-md'>Thriller</button>
                        <button className='cursor-pointer px-6 py-2.5'>Horror</button>
                        <button className='cursor-pointer px-6 py-2.5'>Romantic</button>
                        <button className='cursor-pointer px-6 py-2.5'>Adventure</button>
                        <button className='cursor-pointer px-6 py-2.5'>Sci-fi</button>
                    </div>
                </div>
            </div>
        </section>

        <section className='flex flex-col gap-10'>
            <div className='overflow-x-auto gap-10 justify-center'>
              <MovieCard2 layout={"grid grid-cols-5"} characters={characters}/>
            </div>
            <div className='justify-between items-center flex'>
              <div>Page {info.currentpage}/{info.totalpage}</div>
                <div className='flex gap-5 justify-center text-center text-white'>
                  {[...Array(info.totalpage)].map((_, index)=> (
                    <button key={index} onClick={() => fetchInfo(formSearch.getValues("search"), index+1)} disabled={index+1 === info.currentpage} className='flex w-10 h-10  bg-abu rounded-full justify-center items-center disabled:bg-orenMuda'>{index + 1}</button>
                  ))}
                </div>
              <div>Total Data {info.totaldata}</div>
            </div>
        </section>

        <section className=' '>
          <div className='1/2 h-72 bg-oren justify-center py-20 px-48 flex flex-col gap-12 rounded-lg'>
              <div className='text-5xl text-white text-center'>Subscribe to our newsletter</div>
              <div className='flex gap-2.5 justify-center '>
                <input className='p-4 border-white border bg-oren placeholder:text-white rounded-lg ' type="text" placeholder='First name'/>
                <input className='p-4 border-white border bg-oren placeholder:text-white rounded-lg ' type="text" placeholder='Email address'/>
                <button className='bg-white py-4 px-11 rounded-lg'>Subscribe Now</button>
              </div>
          </div>
        </section>

        <Footer/>
      </main>
      
    </div>
  )
}

export default App
