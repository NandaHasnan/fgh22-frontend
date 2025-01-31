import { useState } from 'react'
import { useEffect } from 'react';
// import Coverspi from '../assets/gambar/Rectangle 618.png'
import Cineone from '../assets/gambar/CineOne21 2.png'
import Hiflix from '../assets/gambar/hiflix 2.png'
import Ebv from '../assets/gambar/ebv.id 2.png'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Step from '../components/step-active';
import Step2 from '../components/step-oren';
// import Seat from '../components/grid-seat';
import { useSelector } from 'react-redux';
import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import * as setSeatTik  from '../redux/reducers/seat'
import { useDispatch  } from 'react-redux';
import { useForm } from 'react-hook-form';

function App() {
    const [isShow, setShow] = useState(false);
    const bookingDetails = useSelector((state) => state.booking.movieDetails)
    const [seat, setSeat] = useState([])
    // const [bookSeat, setBookSeat] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const auth = useSelector(state => state.auth)
    

    const handleClick = (s) => {
      if (!seat.includes(s)) {
        setSeat([...seat, s])
      }else{
        setSeat(seat.filter((seat) => seat !== s))
      }
      // setSeat(prev => prev.includes(s) ? prev.filter(item => item !== s) : [...prev, s])
      
    }

    const formatRupiah = (number) => {
      return number.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    };

    const onSubmit = () => {
      const selectedSeat = seat.join(', ')
      const totalPrice = seat.length * 20000
  
      
      dispatch(setSeatTik.setSeat({ seat: selectedSeat }))
      dispatch(setSeatTik.setPrice({ price: totalPrice }))

      navigate('/payment');
    };
    
    // async function getSeat(token) {
    //   const data = await (
    //     await fetch("http://localhost:8888/order/seat", {
    //       headers: {
    //         Authorization: `Bearer ${token.token}`,
    //       },
    //     })
    //   ).json();
    //   console.log(data.data);
    //   setBookSeat( data.result);
    // }

    useEffect(() => {
      window.scrollTo(0, 0)
      if (auth !== "") {
        // getSeat(auth);
      }
    }, [auth])
  return (
    <div className=''>
      <Navbar/>
      <main className='py-8 px-4 md:px-16 lg:px-32 xl:px-48 flex flex-col gap-10 bg-[#A0A3BD20]'>
        <div className='hidden gap-6 md:flex flex-col md:flex-row justify-center items-center mb-8'>
          <Step status='active' content='Date and time'/>
          <div className="hidden md:block w-16 border border-abu border-dashed"></div>
          <Step2 status='not' content='Seat' num='2'/>
          <div className="hidden md:block w-16 border border-abu border-dashed"></div>
          <Step2 status='not' content='Payment' num='3'/>
        </div>

        <section className='flex flex-col lg:flex-row justify-center gap-4'>
          <div className=''>
            <div className='flex flex-col gap-9 w-full lg:w-[732px] h-full lg:h-full bg-white px-5 py-10 rounded-md'>
              <div className='flex flex-col md:flex-row gap-3.5 w-full h-full border border-abuMuda3 rounded-md py-3 px-6'>
                <img src={bookingDetails.movie_image} alt="Cover" className='w-20 md:w-20' />
                <div className='flex flex-col gap-3.5'>
                  <div className='text-xl text-center md:text-left md:text-3xl font-bold'>{bookingDetails.title}</div>
                  <div className='justify-center md:justify-start flex gap-1'>
                    <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>{bookingDetails.genre}</span>
                    {/* <span className='rounded-lg px-2 bg-abu/40 text-abuMuda'>Adventure</span> */}
                  </div>
                  <div className='flex flex-col lg:flex-row md:justify-between justify-center items-center gap-5'>
                    <div className='text-sm md:text-base'>{bookingDetails.selectedTime}</div>
                    <button className='w-24 md:w-28 h-8 bg-oren text-white rounded-md'>Change</button>
                  </div>
                </div>
              </div>
              {/* <Seat/> */} 
              
              <div className='flex flex-col gap-9'>
                                      <div className='text-2xl font-semibold'>Choose Your Seat</div>
                                      <div className='text-sm text-text1 font-semibold text-center'>Screen</div>
                                      <div className='flex flex-col gap-3 justify-center items-center'>
                                          <div className='md:hidden w-[295px] h-1.5 rounded-full bg-biru'></div>
                                          <div className='flex justify-center'>
              
                                              <div className='flex flex-col gap-2'>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>A</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>B</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>C</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>D</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>E</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>F</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>G</div>
                                              </div>
                                              <div className='md:hidden h-340 w-[1px] rounded-full bg-purple'></div>
                                              <div className='grid grid-cols-7 gap-2'>
                                                {/* {seat.map((s) => ())} */}
                                                  {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>A</button> */}
                                                  <button onClick={() => handleClick('A1')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('A1') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('A2')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('A2') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('A3')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('A3') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('A4')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('A4') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('A5')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('A5') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('A6')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('A6') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('A7')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('A7') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>B</button> */}
                                                  <button onClick={() => handleClick('B1')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('B1') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('B2')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('B2') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('B3')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('B3') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('B4')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('B4') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('B5')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('B5') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('B6')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('B6') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('B7')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('B7') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>C</button> */}
                                                  <button onClick={() => handleClick('C1')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('C1') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('C2')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('C2') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('C3')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('C3') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('C4')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('C4') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('C5')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('C5') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('C6')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('C6') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('C7')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('C7') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>D</button> */}
                                                  <button onClick={() => handleClick('D1')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('D1') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('D2')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('D2') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('D3')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('D3') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('D4')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('D4') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('D5')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('D5') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('D6')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('D6') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('D7')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('D7') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>E</button> */}
                                                  <button onClick={() => handleClick('E1')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('E1') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('E2')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('E2') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('E3')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('E3') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('E4')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('E4') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('E5')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('E5') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('E6')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('E6') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('E7')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('E7') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>F</button> */}
                                                  <button onClick={() => handleClick('F1')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('F1') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('F2')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('F2') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('F3')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('F3') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('F4')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('F4') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('F5')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('F5') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('F6')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('F6') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('F7')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('F7') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>G</button> */}
                                                  <button onClick={() => handleClick('G1')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('G1') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('G2')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('G2') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('G3')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('G3') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('G4')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('G4') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('G5')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('G5') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('G6')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('G6') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  <button onClick={() => handleClick('G7')} className={`w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2 ${seat.includes('G7') ? 'bg-gray-500' : 'bg-abuMuda2'}`}></button>
                                                  {/* <button className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'></button> */}
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>1</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>2</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>3</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>4</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>5</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>6</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>7</div>
                                                  
                                              </div>
                                              <div className='grid grid-cols-8 gap-2'>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md'></div>
                                                  <button onClick={() => handleClick('A8')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('A9')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('A10')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('A11')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('A12')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-[#6E7191]'></button>
                                                  <button onClick={() => handleClick('A13')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('A14')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md '></div>
                                                  <button onClick={() => handleClick('B8')}  className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('B9')}  className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('B10')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('B11')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('B12')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('B13')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('B14')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md '></div>
                                                  <button onClick={() => handleClick('C8')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('C9')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-[#6E7191]'></button>
                                                  <button onClick={() => handleClick('C10')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('C11')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('C12')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-[#6E7191]'></button>
                                                  <button onClick={() => handleClick('C13')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('C14')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md '></div>
                                                  <button onClick={() => handleClick('D8')}className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('D9')}className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-[#6E7191]'></button>
                                                  <button onClick={() => handleClick('D10')}className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('D11')}className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('D12')}className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-[#6E7191]'></button>
                                                  <button onClick={() => handleClick('D13')}className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('D14')}className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md '></div>
                                                  <button onClick={() => handleClick('E8')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('E9')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('E10')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('E11')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('E12')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('E13')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('E14')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md '></div>
                                                  <button onClick={() => handleClick('F8')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('F9')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('F10')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-[#F589D7]'></button>
                                                  <button onClick={() => handleClick('F11')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-[#F589D7]'></button>
                                                  <button onClick={() => handleClick('F12')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('F13')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-[#6E7191]'></button>
                                                  <button onClick={() => handleClick('F14')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md '></div>
                                                  <button onClick={() => handleClick('G8')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('G9')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('G10')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('G11')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('G12')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('G13')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <button onClick={() => handleClick('G14')} className='w-5 h-5 md:w-8 md:h-8 rounded-md hover:bg-[#6E7191] bg-abuMuda2'></button>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'></div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>8</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>9</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>10</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>11</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>12</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>13</div>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md hidden md:block'>14</div>
                                              </div>
                                          </div>
                                          <div className='flex pt-[-12px]'>
                                              <div className='md:hidden w-32 h-[1px] rounded-full bg-red'></div>
                                              <div className='md:hidden w-[80px] h-[1px] rounded-full bg-white'></div>
                                              <div className='md:hidden w-32 h-[1px] rounded-full bg-red'></div>
                                          </div>
                                      </div>
                                      <div className='text-lg font-medium px-4 md:px-11'>Seating key</div>
                                      <div className='flex flex-col gap-3'>
                                          <div className='md:hidden flex px-4 gap-28'>
                                              <div className='flex gap-2 items-center text-lg font-semibold'><FaArrowDown />A-G</div>
                                              <div className='flex gap-2 items-center text-lg font-semibold'><FaArrowRight />1-14</div>
                                          </div>
                                          <div className='grid grid-cols-2 md:flex gap-4 md:gap-10 px-4 md:px-11'>
                                              <div className='flex gap-4 items-center'>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-abuMuda2'></div>
                                                  <div>Available</div>
                                              </div>
                                              <div className='flex gap-4 items-center'>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#1D4ED8]'></div>
                                                  <div>Selected</div>
                                              </div>
                                              <div className='flex gap-4 items-center'>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#F589D7]'></div>
                                                  <div>Love nest</div>
                                              </div>
                                              <div className='flex gap-4 items-center'>
                                                  <div className='w-5 h-5 md:w-8 md:h-8 rounded-md bg-[#6E7191]'></div>
                                                  <div className='text-sm text-text1 font-semibold'>Sold</div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className='md:hidden flex flex-col gap-7'>
                                          <div className='flex justify-between'>
                                              <label htmlFor="choosed">Choosed</label>
                                              <div>C4</div>
                                          </div>
                                          <div className='flex justify-between px-6'>
                                              <div className='flex flex-col gap-2'>
                                                  <select className='py-3.5 px-6  w-28 rounded-md bg-abuMuda2 focus:outline-none' id='event' name='event'>
                                                      <option value=''>C</option>
                                                      <option value=''>A</option>
                                                      <option value=''>B</option>
                                                  </select>
                                              </div>
                                              <div className='flex flex-col gap-2'>
                                                 <select className='py-3.5 px-6  w-28 rounded-md bg-abuMuda2 focus:outline-none' id='event' name='event'>
                                                     <option value=''>4</option>
                                                     <option value=''>3</option>
                                                     <option value=''>2</option>
                                                  </select>
                                              </div>
                                          </div>
                                          <div className='justify-center items-center flex'>
                                              <button className='w-72 h-14 border border-orenMuda rounded-xl text-oren'>Add new seat</button>
                                          </div>
                                      </div>
                                  </div>
            </div>
          </div>
          <div className='hidden md:flex flex-col gap-10'>
              <div className='flex flex-col gap-10 pt-4 w-full lg:w-[358px] h-full lg:h-[413px] bg-white rounded-md'>
              {bookingDetails.cinemaName === "cineone21" &&(
                <div className='flex flex-col gap-3'>
                  <div className='flex justify-center px-24'>
                    <img className='justify-center' src={Cineone} alt="Cinema logo" />
                  </div>
                  <div className='text-xl md:text-2xl text-center '>{bookingDetails.cinemaName}</div>
                </div>
              )}
              {bookingDetails.cinemaName === "hiflix" &&(
                <div className='flex flex-col gap-3'>
                  <div className='flex justify-center px-24'>
                    <img className='justify-center' src={Hiflix} alt="Cinema logo" />
                  </div>
                  <div className='text-xl md:text-2xl text-center '>{bookingDetails.cinemaName}</div>
                </div>
              )}
              {bookingDetails.cinemaName === "ebu.id" &&(
                <div className='flex flex-col gap-3'>
                  <div className='flex justify-center px-24'>
                    <img className='justify-center' src={Ebv} alt="Cinema logo" />
                  </div>
                  <div className='text-xl md:text-2xl text-center '>{bookingDetails.cinemaName}</div>
                </div>
              )}
                <div className='px-5 flex flex-col gap-5'>
                  <div className='flex justify-between'>
                    <div className='text-sm text-[#6B6B6B]'>Movie selected</div>
                    <div className='text-sm text-[#14142B] font-semibold'>{bookingDetails.title}</div>    
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-sm text-[#6B6B6B]'>{bookingDetails.selectedDate}</div>
                    <div className='text-sm text-[#14142B] font-semibold'>{bookingDetails.selectedTime}</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-sm text-[#6B6B6B]'>One ticket price</div>
                    <div className='text-sm text-[#14142B] font-semibold'>Rp20.000</div>
                  </div>
                  <div className='flex justify-between'>
                    <div className='text-sm text-[#6B6B6B]'>Seat choosed</div>
                    <div className='text-sm text-[#14142B] font-semibold' value='seat' id='seat' {...register('seat')}>{seat.join(', ')}</div>
                  </div>
                </div>
                <div className='w-full h-1 bg-[#E6E6E6]'></div>
                <div className='px-5 flex justify-between'>
                  <div className='text-lg font-semibold'>Total Payment</div>
                  <div className='text-2xl text-[#1D4ED8] font-semibold' value='price' id='price' {...register('price')}>{formatRupiah(seat.length * 20000)}</div>
                </div>
              </div>
              <button className='py-3.5 w-full lg:w-[358px] h-14 bg-oren rounded-md text-white text-center' onClick={handleSubmit(onSubmit)}>Checkout now</button>
            </div>
          <div className='md:hidden'>
            <button onClick={() =>setShow(!isShow)} className='w-full h-14 rounded-lg bg-oren text-white'>Submit</button>
          </div>

          {isShow && ( <>
            <div className="px-6 md:block fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">  
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10 py-4 md:pt-4 px-5 w-full lg:w-[358px] h-full lg:h-[413px] bg-white rounded-md'>
                  <div className='flex flex-col gap-3'>
                    <div className='flex justify-center px-24'>
                      <img className='justify-center' src={Cineone} alt="Cinema logo" />
                    </div>
                    <div className='text-xl md:text-2xl text-center '>CineOne21 Cinema</div>
                  </div>
                  <div className='px-5 flex flex-col gap-5'>
                    <div className='flex justify-between'>
                      <div className='text-sm text-[#6B6B6B]'>Movie selected</div>
                      <div className='text-sm text-[#14142B] font-semibold'>Spider-Man: Homecoming</div>    
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-sm text-[#6B6B6B]'>Tuesday, 07 July 2020</div>
                      <div className='text-sm text-[#14142B] font-semibold'>13:00pm</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-sm text-[#6B6B6B]'>One ticket price</div>
                      <div className='text-sm text-[#14142B] font-semibold'>$10</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className='text-sm text-[#6B6B6B]'>Seat choosed</div>
                      <div className='text-sm text-[#14142B] font-semibold'>C4, C5, C6</div>
                    </div>
                  </div>
                  <div className='w-full h-1 bg-[#E6E6E6]'></div>
                  <div className='px-5 flex justify-between'>
                    <div className='text-lg font-semibold'>Total Payment</div>
                    <div className='text-2xl text-[#1D4ED8] font-semibold'>$30</div>
                  </div>
                  <Link to='/payment' className='py-3.5 w-full lg:w-[358px] h-14 bg-oren rounded-md text-white text-center'>Checkout now</Link>
                </div>
                
              </div>
            </div>
          </>
                        
        )}
        <form onSubmit={handleSubmit()}></form>
        </section>
      </main>
        <div className='md:px-52 px-10'>
            <Footer/>
        </div>
      
    </div>
  )
}

export default App
