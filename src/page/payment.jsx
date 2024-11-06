import { useState } from 'react';
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

function App() {
   const [isShow, setShow] = useState(false);
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            <div className="flex flex-col gap-9 w-full md:w-[732px] bg-white px-6 md:px-8 py-8 md:py-12 rounded-md">
              <div className="text-xl md:text-2xl text-[#14142B] font-semibold">Payment Info</div>
              <div className="flex flex-col gap-6 md:gap-8">
                <div className="text-sm text-[#8692A6]">DATE & TIME</div>
                <input className="text-base placeholder:text-[#000000]" type="text" id="date" name="date" placeholder="Tuesday, 07 July 2020 at 02:00pm" />
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
                <div className="text-sm text-[#8692A6]">MOVIE TITLE</div>
                <input className="text-base placeholder:text-[#000000]" type="text" id="date" name="date" placeholder="Spider-Man: Homecoming" />
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
                <div className="text-sm text-[#8692A6]">CINEMA NAME</div>
                <input className="text-base placeholder:text-[#000000]" type="text" id="date" name="date" placeholder="CineOne21 Cinema" />
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
                <div className="text-sm text-[#8692A6]">NUMBER OF TICKETS</div>
                <input className="text-base placeholder:text-[#000000]" type="text" id="date" name="date" placeholder="3 pieces" />
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
                <div className="text-sm text-[#8692A6]">TOTAL PAYMENT</div>
                <input className="text-base placeholder:text-[#1D4ED8] placeholder:font-semibold" type="text" id="date" name="date" placeholder="$30,00" />
                <div className="w-full h-[1px] bg-[#E6E6E6]"></div>
              </div>

              <div className="text-xl md:text-2xl text-[#14142B] font-semibold">Personal Information</div>
              <form className="flex flex-col gap-4 md:gap-3.5">
                <label className="text-sm md:text-base text-[#696F79]" htmlFor="full-name">Full Name</label>
                <input className="w-full md:w-[665px] h-12 md:h-16 border rounded-md px-4 md:px-11 border-[#DEDEDE]" type="text" id="full-name" name="full-nama" placeholder="Jonas El Rodriguez" />
                <label className="text-sm md:text-base text-[#696F79]" htmlFor="email">Email</label>
                <input className="w-full md:w-[665px] h-12 md:h-16 border rounded-md px-4 md:px-11 border-[#DEDEDE]" type="email" id="email" name="email" placeholder="jonas@mail.com" />
                <label className="text-sm md:text-base text-[#696F79]" htmlFor="phone">Phone Number</label>
                <input className="w-full md:w-[665px] h-12 md:h-16 border rounded-md px-4 md:px-11 border-[#DEDEDE]" type="tel" id="phone" name="phone" placeholder="+1 234 567 890" />
              </form>

              <div className="text-xl md:text-2xl text-[#14142B] font-semibold">Payment Method</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[Google, Visa, Gopay, Paypal, Dana, Bca, Bri, Ovo].map((imgSrc, index) => (
                  <div key={index} className="flex justify-center items-center py-3 px-6 w-full h-12 md:w-36 md:h-14 border border-[#DEDEDE] rounded-md">
                    <img src={imgSrc} alt="" />
                  </div>
                ))}
              </div>

              <button onClick={() => setShow(!isShow)} className="w-full md:w-[665px] h-12 md:h-14 bg-oren text-center rounded-md text-white">
                Pay your order
              </button>
            </div>
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
