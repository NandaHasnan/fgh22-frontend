import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RiAddLargeFill } from "react-icons/ri";
import NavbarAdmin from '../components/navbar-admin';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const Tipe_file = ["image/jpeg", "image/jpg", "image/png"]

function App() {
//    useState(0)
   const auth = useSelector(state => state.auth?.token)
   const { register, handleSubmit } = useForm();
   const [file, setFile] = React.useState({})
   const [isOpen, setIsOpen] = useState(false);
   const [isOpen2, setIsOpen2] = useState(false);
   const navigate = useNavigate();
   const [movie, setMovie] = useState([]);
   const params = useParams()

    const selectFile = (f) => {
        const selected = f.target.files[0]
        if (selected.size > 2 * 1024 * 1024) {
          setIsOpen(!isOpen)
          // window.alert("File max 2 mb")
          f.target.value = ''
          setFile({})
          return
        }
    
        if (!Tipe_file.includes(selected.type)) {
          setIsOpen2(!isOpen2)
          // window.alert("File harus jpg dan png")
        //   editUser.target.value = ''
        f.target.value = '';
          setFile({})
          return
        }
    
        setFile(selected)
      }

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  

  const onSubmit = async (data) => {
    const form = new FormData();
    // form.append('title', data.title)
    // form.append('genre', data.genre)
    // form.append('release_date', data.release_date)
    // form.append('duration', data.duration)
    // form.append('director', data.director)
    // form.append('cast_actor', data.cast_actor)
    // form.append('synopsis', data.synopsis)

    if (data.title && data.title !== movie.title) {
        form.append('title', data.title);
    }
    if (data.genre && data.genre !== movie.genre) {
        form.append('genre', data.genre);
    }
    if (data.release_date && data.release_date !== movie.release_date) {
        form.append('release_date', data.release_date);
    }
    if (data.duration && data.duration !== movie.duration) {
        form.append('duration', data.duration);
    }
    if (data.director && data.director !== movie.director) {
        form.append('director', data.director);
    }
    if (data.cast_actor && data.cast_actor !== movie.cast_actor) {
        form.append('cast_actor', data.cast_actor);
    }
    if (data.synopsis && data.synopsis !== movie.synopsis) {
        form.append('synopsis', data.synopsis);
    }
    if (file.name && data.image_movie !== movie.image_movie) {
        form.append('image_movie', file)
      }

    // const headers = {};

    // if (auth) {
    //   headers["Authorization"] = `Bearer ${auth}`;
    // }
    // const query = new URLSearchParams(data)
    // const queryString = query.toString()
    try {
          const response = await fetch(`http://localhost:8888/movies/edit/${params.id}`, {
            method: "PATCH",
            body: form,
            headers: {
              
              Authorization: `Bearer ${auth}`,
            },
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log("Response dari server:", result);
    
          
            // dispatch(editUser(result));
            alert("Edit successfully!");
          } else {
            const error = await response.text();
            console.error("Error dari server:", error);
            alert("Failed to edit Movie!");
          }
        }catch (error) {
          console.error("Error edit Movie:", error);
          alert("Error edit Movie!");
        }
    // dispatch(registerUser({ 
    //   email: data.email,
    //   password: data.password 
    // }));
    // navigate('/login'); 
  };

  React.useEffect(() => {
      if (!auth) {
        navigate('/edit-movie');
      }
    }, [auth, navigate]);

  return (
    <div className=''>
      <NavbarAdmin/>

      <main className='px-16 py-14 flex flex-col gap-10 bg-[#A0A3BD20]'>
        <section className='flex justify-center gap-4'>
            
            <div className=''>
                <div className='flex flex-col gap-9 md:w-[732px] w-full  bg-white px-8 py-12 rounded-md'>
                    <div className='text-2xl text-[#14142B] font-semibold'>Edit Movie</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-8'>
                            <label className='text-base text-[#696F79]' htmlFor="">Upload Image</label>
                            <div className='flex'>
                                
                                <input className='file:cursor-pointer file:w-28 file:h-7 file:bg-oren file:border-none rounded-md file:text-white' type="file" id='movie_image' name="movie_image" {...register("movie_image")} onChange={selectFile}/>
                                {isOpen && (
                                    <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>File max 2 mb</div>
                                )}
                                {isOpen2 && (
                                    <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>File harus jpg dan png</div>
                                )}
                            </div>
                        </div>
                        <div className='flex flex-col gap-3.5'>
                            <label className='text-base text-[#696F79]' htmlFor="movie-name">Movie Name</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='title' name='title' {...register("title")} defaultValue={movie.title}/>
                            <label className='text-base text-[#696F79]' htmlFor="category">Category</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='genre' name='genre' {...register("genre")} defaultValue={movie.genre}/>
                            <div className='md:flex md:flex-row flex flex-col gap-6 justify-between'>
                               <div className='flex flex-col gap-3.5'>
                                <label className='text-base text-[#696F79]' htmlFor="release-date">Release date</label>
                                <input className='w-full md:w-96 h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='release_date' name='release_date' {...register("release_date")} defaultValue={movie.release_date}/>
                               </div> 
                               <div className='flex flex-col gap-3.5'>
                                <label className='text-base text-[#696F79]' htmlFor="duration">Duration (hour / minute)</label>
                                <div className='md:flex md:flex-row flex flex-col gap-6'>
                                    <input className='w-full md:w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='duration' name='duration' {...register("duration")} defaultValue={movie.duration}/>
                                    {/* <input className='w-full md:w-28 h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='duration' name='duration' placeholder='13'/> */}
                                </div>
                               </div> 
                            </div>
                            <label className='text-base text-[#696F79]' htmlFor="director-name">Director Name</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='director' name='director' {...register("director")} defaultValue={movie.director}/>
                            <label className='text-base text-[#696F79]' htmlFor="cast">Cast</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='cast_actor' name='cast_actor' {...register("cast_actor")} defaultValue={movie.cast_actor}/>
                            <label className='text-base text-[#696F79]' htmlFor="synopsis">Synopsis</label>
                            <textarea className='w-full h-52 border rounded-md px-11 py-5 border-[#DEDEDE]' type="text" id='synopsis' name='synopsis' {...register("synopsis")} defaultValue={movie.synopsis}/>
                            <label className='text-base text-[#696F79]' htmlFor="add-location">Add Location</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='add-location' name='add-location' placeholder='Purwokerto, Bandung, Bekasi'/>
                            <label className='text-base text-[#696F79]' htmlFor="full-name">Set  Date & Time</label>
                            <div className="flex flex-col gap-2">
                                <select className="py-3.5 px-5 w-48 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                    <option className='text-base text-[#4E4B66]' value="">Set a date</option>
                                    <option className='text-base text-[#4E4B66]' value="">10/10/2024</option>
                                    <option className='text-base text-[#4E4B66]' value="">10/10/2024</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <div className='flex gap-7 items-center'>
                                    <div className='w-16 h-8 border border-orenMuda rounded-md py-1.5 pl-6'><RiAddLargeFill className='text-oren'/></div>
                                    <div className='text-sm text-[#4E4B66] font-semibold'>08:30am</div>
                                    <div className='text-sm text-[#4E4B66] font-semibold'>10:30pm</div>
                                </div>
                                <div className='w-full h-[1px] bg-[#DEDEDE]'></div>
                            </div>
                        </div>
                    <button className='w-full h-14 bg-oren text-center pt-3.5 rounded-md text-white font-semibold'>Save Movie</button>
                    </form>
                    
                </div>
            </div>
            
        </section>
      </main>    
      
    </div>
  )
}

export default App
