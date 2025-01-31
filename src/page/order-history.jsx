import { useState } from 'react'
import { useEffect } from 'react';
import InfoProfile from '../components/info-profile'
import Navbar from '../components/navbar'
import HistoryOrder from '../components/history-order';
import TicketActive from '../components/ticket-active';
// import TicketPaid from '../components/ticket-paid';
import OrderMobile from '../components/order-mobile';
import { useSelector } from 'react-redux';


function App() {
  const [history, setHistory] = useState([]);
    const token = useSelector((state) => state.auth?.token);
  
    useEffect(() => {
      fetch('http://localhost:8888/order/history', {
        headers: {
          Authorization: `Bearer ${token}`,
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
            setHistory(data.result);
          } else {
            console.error('Invalid data structure:', data);
          }
        })
        .catch((error) => {
          console.error('Error fetching movies:', error);
        });
    }, [token]);


   useState(0)
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=''>
      <Navbar/>
      <div className='md:hidden'>
        <OrderMobile status='not' content='Account Profile' status2='active' content2='Order History'/>
      </div>
      <main>
        <section className='px-16 py-14 h-full bg-[#A0A3BD20]'>
          <div className='flex gap-8 justify-center items-start'>
            <div className='hidden md:block'>
              <InfoProfile/>
            </div>
                <div className='justify-center items-center md:justify-center md:items-center flex flex-col gap-12'>
                  <div className='hidden md:block'>
                    <HistoryOrder status='not' content='Account Profile' status2='active' content2='Order History'/>
                  </div>
                  <TicketActive history={history}/>
                  {/* <TicketPaid title='Hiflix'/>
                  <TicketPaid title='Ebv.id'/> */}
                </div>
          </div>
        </section>
      </main>     
      
    </div>
  )
}

export default App
