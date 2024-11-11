import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.png';

import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import { logout } from '../redux/reducers/auth';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  const loggedInUser = useSelector((state) => state.profile.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout()); // Mengirim action logout
    navigate('/login'); // Setelah logout, arahkan kembali ke halaman login
  };

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
      <div className="hidden md:flex gap-5">
        <Link to="/login" className="rounded-lg py-2 px-4 border border-orenMuda text-oren hover:bg-orenMuda hover:text-white">
          Login
        </Link>
        <Link to="/register" className="rounded-lg py-2 px-4 bg-oren text-white hover:bg-orenMuda">
          SignUp
        </Link>
        <button onClick={handleLogout} className="rounded-lg py-2 px-4 bg-oren text-white hover:bg-orenMuda">
        Logout
        </button>
      </div>
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
