import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { RiAddLargeFill } from "react-icons/ri";
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

    const selectFile = (f) => {
        const selected = f.target.files[0]
        if (selected.size > 2 * 1024 * 1024) {
          setIsOpen(!isOpen)
          setTimeout(() => {
            setIsOpen(!isOpen)
          }, 3000)
          // window.alert("File max 2 mb")
          f.target.value = ''
          setFile({})
          return
        }
    
        if (!Tipe_file.includes(selected.type)) {
          setIsOpen2(!isOpen2)
          setTimeout(() => {
            setIsOpen2(!isOpen2)
          }, 3000)
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

  const onSubmit = async (data) => {
    const form = new FormData();
    form.append('firstname', data.firstname)
    form.append('lastname', data.lastname)
    form.append('phone_number', data.phone_number)
    form.append('email', data.email)
    form.append('password', data.password)

    if (file.name) {
        form.append('image', file)
      }

    // const headers = {};

    // if (auth) {
    //   headers["Authorization"] = `Bearer ${auth}`;
    // }
    // const query = new URLSearchParams(data)
    // const queryString = query.toString()
    try {
          const response = await (await fetch("http://localhost:8888/users/add_User", {
            method: "POST",
            body: form,
            headers: {
              Authorization: `Bearer ${auth}`,
            },
          }));
    
          if (response.ok) {
            const result = await response.json();
            console.log("Response dari server:", result);
    
          
            // dispatch(editUser(result));
            alert("Users add successfully!");
          } else {
            const error = await response.text();
            console.error("Error dari server:", error);
            alert("Failed to add Users!");
          }
        }catch (error) {
          console.error("Error uadd Movie:", error);
          alert("Error add Users!");
        }
    // dispatch(registerUser({ 
    //   email: data.email,
    //   password: data.password 
    // }));
    // navigate('/login'); 
  };

  React.useEffect(() => {
      if (!auth) {
        navigate('/add-users');
      }
    }, [auth, navigate]);

  return (
    <div className=''>
      <NavbarAdmin/>

      <main className='px-16 py-14 flex flex-col gap-10 bg-[#A0A3BD20]'>
        <section className='flex justify-center gap-4'>
            
            <div className=''>
                <div className='flex flex-col gap-9 md:w-[732px] w-full  bg-white px-8 py-12 rounded-md'>
                    <div className='text-2xl text-[#14142B] font-semibold'>Add New Users</div>
                    <form className='flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col gap-8'>
                            <label className='text-base text-[#696F79]' htmlFor="">Upload Image</label>
                            <div className='flex'>
                                
                                <input className='file:cursor-pointer file:w-28 file:h-7 file:bg-oren file:border-none rounded-md file:text-white' type="file" id='image' name="image" {...register("image")} onChange={selectFile}/>
                                {isOpen && (
                                    <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>File max 2 mb</div>
                                )}
                                {isOpen2 && (
                                    <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>File harus jpg dan png</div>
                                )}
                            </div>
                        </div>
                        <div className='flex flex-col gap-3.5'>
                            <label className='text-base text-[#696F79]' htmlFor="movie-name">First Name</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='firstname' name='firstname' {...register("firstname")} placeholder='Spider-Man: Homecoming'/>
                            <label className='text-base text-[#696F79]' htmlFor="category">Last Name</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='lastname' name='lastname' {...register("lastname")} placeholder='Action, Adventure, Sci-Fi'/>
                            <label className='text-base text-[#696F79]' htmlFor="director-name">Phone Number</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='phone_number' name='phone_number' {...register("phone_number")} placeholder='Jon Watts'/>
                            <label className='text-base text-[#696F79]' htmlFor="cast">Email</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='email' name='email' {...register("email")} placeholder='Tom Holland, Michael Keaton, Robert Dow..'/>
                            <label className='text-base text-[#696F79]' htmlFor="cast">Password</label>
                            <input className='w-full h-16 border rounded-md px-11 border-[#DEDEDE]' type="text" id='password' name='password' {...register("password")} placeholder='Tom Holland, Michael Keaton, Robert Dow..'/>
                            
                        </div>
                        <button className='w-full h-14 bg-oren text-center pt-3.5 rounded-md text-white font-semibold'>Save User</button>
                    </form>
                    
                </div>
            </div>
            
        </section>
      </main>    
      
    </div>
  )
}

export default App
