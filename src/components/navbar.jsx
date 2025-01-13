import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';

import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import  * as logout from '../redux/reducers/auth';
// import { useNavigate } from 'react-router-dom';
// import Profile from '../assets/gambar/P-profile.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import * as profile from "../redux/reducers/profile"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useSelector(state => state.auth)
  const userProfile = useSelector(state => state.profile.users)
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  // async function getProfil(token) {
  //   const data = await (await fetch("http://localhost:8888/profile",{
  //     headers: {
  //       "Authorization" : `Bearer ${token.token}`
  //     }
  //   })).json()
  //     dispatch(profile.setProfile(data.result))
  // }
  React.useEffect(() => {
    if (auth?.token !== "") {
      async function getProfil(token) {
        const data = await (await fetch("http://localhost:8888/profile",{
          headers: {
            "Authorization" : `Bearer ${token.token}`
          }
        })).json()
          dispatch(profile.setProfile(data.result))
      }
      getProfil(auth)

    }
  }, [auth, dispatch])

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  // const loggedInUser = useSelector((state) => state.profile.loggedInUser);
  
  // const handleLogout = () => {
  //   dispatch(logout.logout())
  //   navigate('/home')
  // };

  
  // if (!loggedInUser) {
  //   navigate('/login'); // Jika tidak ada pengguna yang login, arahkan ke halaman login
  // }

  return (
    
    <nav className="px-4 md:px-12 lg:px-48 items-center shadow-md py-3 flex justify-between bg-white">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="hidden md:flex gap-14">
        <Link to='/home' className="hover:text-oren cursor-pointer">Home</Link>
        <Link to='/movie' className="hover:text-oren cursor-pointer">Movie</Link>
        <Link to='/order' className="hover:text-oren cursor-pointer">Buy Ticket</Link>
      </ul>
      {auth.token !== "" && <div className='hidden md:flex items-center gap-3'>
          <Link to='/home' onClick={() => dispatch(logout.logout())} className="rounded-lg py-2 px-4 bg-oren text-white hover:bg-orenMuda">
          Logout
          </Link>
          <div>Location</div>
          <div><IoIosArrowDown /></div>
          <div><IoSearch /></div>
          <Link to='/profil'><img className='w-14 h14 rounded-full' src={`http://localhost:8888/users/image/${userProfile.image}`} alt="" /></Link>
          <div>{userProfile.firstname}</div>
      </div>}
      { auth.token === "" && <div className="hidden md:flex gap-5">
        <Link to="/login" className="rounded-lg py-2 px-4 border border-orenMuda text-oren hover:bg-orenMuda hover:text-white">
          Login
        </Link>
        <Link to="/register" className="rounded-lg py-2 px-4 bg-oren text-white hover:bg-orenMuda">
          SignUp
        </Link>
        
      </div>
}

      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {/* {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />} */}
          {!isOpen && <FaBars className="text-2xl" />} {isOpen && <FaTimes className="text-2xl" />}
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <Link to='/home'  className="hover:text-oren cursor-pointer" onClick={toggleMenu}>Home</Link>
            <Link to='/movie' className="hover:text-oren cursor-pointer" onClick={toggleMenu}>Movie</Link>
            <Link to='/order' className="hover:text-oren cursor-pointer" onClick={toggleMenu}>Buy Ticket</Link>
          </ul>
          <div className="flex flex-col gap-4 p-4">
            <Link to="/login" className="rounded-lg py-2 px-4 border border-orenMuda text-oren hover:bg-orenMuda hover:text-white text-center">
              Login
            </Link>
            <Link to="/register" className="rounded-lg py-2 px-4 bg-oren text-white hover:bg-orenMuda text-center">
              SignUp
            </Link>
          </div>
        </div>
      )}

    </nav>
    
  );
}

export default Navbar;
