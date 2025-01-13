import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Google from '../assets/gambar/logos_google-pay.png';
import Visa from '../assets/gambar/logos_visa.png';
import Gopay from '../assets/gambar/Logo GoPay (SVG-240p) - FileVector69 1.png';
import Paypal from '../assets/gambar/logos_paypal.png';
import Dana from '../assets/gambar/Logo DANA (PNG-240p) - FileVector69 1.png';
import Bca from '../assets/gambar/Bank BCA Logo (SVG-240p) - FileVector69 1.png';
import Bri from '../assets/gambar/bri.png';
import Ovo from '../assets/gambar/ovo.png';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaTimes } from 'react-icons/fa';
import Step from '../components/step-active';
import Step2 from '../components/step-oren';
import { useSelector, useDispatch } from 'react-redux';
import * as profile from "../redux/reducers/profile"
import { useForm } from 'react-hook-form';


function App() {
   const [isShow, setShow] = useState(false)
   const auth = useSelector(state => state.auth)
   const dispatch = useDispatch()
  //  const navigate = useNavigate()
   const { register, handleSubmit } = useForm()
  //  const [payment, setPayment] = useState([])
  const token = useSelector((state) => state.auth?.token);
   const userProfile = useSelector(state => state.profile.users)
   const bookingDetails = useSelector((state) => state.booking.movieDetails)
   const seatDetails = useSelector((state) => ({
    seat: state.seat.seat,
    price: state.seat.price,
  }));
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const handleClick = (s) => {
  //   if (!payment.includes(s)) {
  //     setPayment([...payment, s])
  //   }
  // }

  // console.log(payment)

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

    const onSubmit = (data) => {
      const headers = {};

      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
      const query = new URLSearchParams(data)
      const queryString = query.toString()
      fetch("http://localhost:8888/order", {
        method: "POST",
        body: queryString,
        headers,
      })
      // dispatch(registerUser({ 
      //   email: data.email,
      //   password: data.password 
      // }));
      // navigate('/login'); 
    };
  return (
    <div className="">
      <Navbar />
      <main className="py-8 px-4 md:px-16 lg:px-24 xl:px-48 flex flex-col gap-10 bg-[#A0A3BD20]">
        <div className="hidden gap-6 md:flex justify-center items-center mb-8">
          <Step status="active" content="Date and time" />
          <div className="w-16 border border-abu border-dashed"></div>
          <Step status="active" content="Seat" />
          <div className="w-16 border border-abu border-dashed"></div>
          <Step2 status="not" content="Payment" num="3" />
        </div>

        <section className="flex justify-center gap-4 flex-wrap">
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9 w-full md:w-[732px] bg-white px-6 md:px-8 py-8 md:py-12 rounded-md">
              <div className="text-xl md:text-2xl text-[#14142B] font-semibold">Payment Info</div>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="text-sm text-[#8692A6]">DATE & TIME</div>
                {/* <div className="text-base placeholder:text-[#000000]" {...register('date')} {...register('time')}>{bookingDetails.selectedDate} at {bookingDetails.selectedTime}</div> */}
                <input className="text-base placeholder:text-[#000000]" type="text" id="date" name="date" {...register('date')} {...register('time')} placeholder={`${bookingDetails.selectedDate} at ${bookingDetails.selectedTime}`} />
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
                <div className="text-sm text-[#8692A6]">MOVIE TITLE</div>
                <div className="text-base placeholder:text-[#000000]" {...register('movie_title')}>{bookingDetails.title}</div>
                {/* <input className="text-base placeholder:text-[#000000]" type="text" id="date" name="date" placeholder="Spider-Man: Homecoming" /> */}
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
                <div className="text-sm text-[#8692A6]">CINEMA NAME</div>
                <div className="text-base placeholder:text-[#000000]" {...register('cinema_name')}>{bookingDetails.cinemaName}</div>
                {/* <input className="text-base placeholder:text-[#000000]" type="text" id="date" name="date" placeholder="CineOne21 Cinema" /> */}
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
                <div className="text-sm text-[#8692A6]">NUMBER OF TICKETS</div>
                <div className="text-base placeholder:text-[#000000]" {...register('seat')}>{seatDetails.seat}</div>
                {/* <input className="text-base placeholder:text-[#000000]" type="text" id="date" name="date" placeholder="3 pieces" /> */}
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
                <div className="text-sm text-[#8692A6]">TOTAL PAYMENT</div>
                <div className="text-base text-[#1D4ED8] font-semibold" {...register('price')}>Rp{seatDetails.price}</div>
                {/* <input className="text-base placeholder:text-[#1D4ED8] placeholder:font-semibold" type="text" id="date" name="date" placeholder="$30,00" /> */}
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
              </div>

              <div className="text-xl md:text-2xl text-[#14142B] font-semibold">Personal Information</div>
              <div className="flex flex-col gap-4 md:gap-3.5">
                <label className="text-sm md:text-base text-[#696F79]" htmlFor="full-name">Full Name</label>
                <input className="w-full md:w-[665px] h-12 md:h-16 border rounded-md px-4 md:px-11 border-[#DEDEDE]" type="text" id="full_name" name="full_name" {...register('full_name')} placeholder={`${userProfile.firstname} ${userProfile.lastname}`} />
                <label className="text-sm md:text-base text-[#696F79]" htmlFor="email">Email</label>
                <input className="w-full md:w-[665px] h-12 md:h-16 border rounded-md px-4 md:px-11 border-[#DEDEDE]" type="email" id="email" name="email" {...register('email')} placeholder={userProfile.email} />
                <label className="text-sm md:text-base text-[#696F79]" htmlFor="phone">Phone Number</label>
                <input className="w-full md:w-[665px] h-12 md:h-16 border rounded-md px-4 md:px-11 border-[#DEDEDE]" type="tel" id="phone_name" name="phone_name" {...register('phone_number')} placeholder={userProfile.phone_number} />
              </div>
              
              
              <div className="text-xl md:text-2xl text-[#14142B] font-semibold">Payment Method</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {/* {[Google, Visa, Gopay, Paypal, Dana, Bca, Bri, Ovo].map((imgSrc, index) => (
                  <div key={index} className="flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={imgSrc} alt="" />
                  </div>
                ))} */}
                  <button value="83412979223138297" {...register('payment')} className="focus:bg-oren flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={Google} alt="" />
                  </button>
                  <button value="97123823923147289" {...register('payment')} className="focus:bg-oren flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={Visa} alt="" />
                  </button>
                  <button value="21893293127432981" {...register('payment')} className="focus:bg-oren flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={Gopay} alt="" />
                  </button>
                  <button value="79123912338217239" {...register('payment')} className="focus:bg-oren flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={Paypal} alt="" />
                  </button>
                  <button value="92781329821347921" {...register('payment')} className="focus:bg-oren flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={Dana} alt="" />
                  </button>
                  <button value="23918273942731982" {...register('payment')} className="focus:bg-oren flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={Bca} alt="" />
                  </button>
                  <button value="89127321948372931" {...register('payment')} className="focus:bg-oren flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={Bri} alt="" />
                  </button>
                  <button value="13287291293812973" {...register('payment')} className="focus:bg-oren flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={Ovo} alt="" />
                  </button>
              </div>
              

              <button type='submit' onClick={() => setShow(!isShow)} className="w-full md:w-[665px] h-12 md:h-14 bg-oren text-center rounded-md text-white">
                Pay your order
              </button>
            </form>
          </div>
        </section>
      </main>

      {isShow && (
        <div className="px-6 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col md:gap-8 gap-3 bg-white w-full max-w-lg md:w-[573px] h-auto md:h-[550px] p-6 rounded-lg shadow-lg">
            <button onClick={() => setShow(!isShow)}><FaTimes className="text-2xl" /></button>
            <div className="text-xl md:text-2xl font-semibold text-[#14142B] text-center">Payment Info</div>
            <div className="md:flex md:flex-row flex flex-col md:items-center gap-2.5 justify-between">
              <div className="flex">
                <label className="text-[#8692A6] text-sm">No. Rekening Virtual</label>
                <span className="ml-1 text-[#8692A6] text-sm">:</span>
              </div>
              <div className="flex gap-3 justify-between ">
                <input type="text" readOnly placeholder="1232132031829734" className="w-40 rounded-l-md focus:outline-none text-lg font-semibold" />
                <button className="border border-orenMuda text-oren px-3 py-2 rounded-lg text-sm">Copy</button>
              </div>
            </div>
            <div className="md:flex md:flex-row flex flex-col md:items-center gap-2.5 justify-between">
              <div className="flex">
                <label className="text-[#8692A6] text-sm">Total Payment</label>
                <span className="ml-1 text-[#8692A6] text-sm">:</span>
              </div>
              <input className="md:text-right text-lg placeholder:text-oren font-semibold" type="text" placeholder="$30" />
            </div>
            <div className="text-sm md:text-base text-[#A0A3BD] leading-7 md:leading-8">
              Pay this payment bill before it is due, on <span className="text-sm md:text-base text-[#D00707]">June 23, 2023</span>.
              If the bill has not been paid by the specified time, it will be forfeited.
            </div>
            <Link to="/ticket" className="py-3 w-full text-center font-semibold text-white bg-oren rounded-md">
              Check Payment
            </Link>
            <Link to="/" className="py-3 w-full text-center font-semibold text-oren">
              Pay Later
            </Link>
          </div>
        </div>
      )}

      <footer className="px-4 md:px-16 lg:px-24 xl:px-48">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
