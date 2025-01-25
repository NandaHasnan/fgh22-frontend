import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import Profile from '../assets/gambar/P-profile.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

function NavbarAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 md:px-12 lg:px-48 items-center shadow-md py-3 flex justify-between bg-white">
      <div><img src={Logo} alt="" /></div>
        <ul className='hidden md:flex gap-14'>
          <Link to='/chart' className="hover:text-oren cursor-pointer">Dashboard</Link>
          <Link to='/adm-movie' className="hover:text-oren cursor-pointer">Movie</Link>
          <Link to='/adm-users' className="hover:text-oren cursor-pointer">Users</Link>
        </ul>
        <div className='hidden md:flex items-center gap-3'>
            <div>Location</div>
            <div><IoIosArrowDown /></div>
            <div><IoSearch /></div>
            <div><img className='w-14 h14' src={Profile} alt="" /></div>
        </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <Link to='/home' className="hover:text-oren cursor-pointer" onClick={toggleMenu}>Dashboard</Link>
            <Link to='/adm-movie' className="hover:text-oren cursor-pointer" onClick={toggleMenu}>Movie</Link>
          </ul>
          <ul className="flex flex-col gap-4 p-4">
            <li className="hover:text-oren cursor-pointer" onClick={toggleMenu}>Location</li>
            <li className="hover:text-oren cursor-pointer" onClick={toggleMenu}><IoIosArrowDown /></li>
            <li className="hover:text-oren cursor-pointer" onClick={toggleMenu}><IoSearch /></li>
          </ul>
          <div className="flex flex-col gap-4 p-4">
            <img className='w-14 h14' src={Profile} alt="" />
          </div>
        </div>
      )}
    </nav>


  );
}

export default NavbarAdmin;
