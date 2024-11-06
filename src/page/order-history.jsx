import { useState } from 'react'
import { useEffect } from 'react';
import InfoProfile from '../components/info-profile'
import Navbar from '../components/navbar-profile'
import HistoryOrder from '../components/history-order';
import TicketActive from '../components/ticket-active';
import TicketPaid from '../components/ticket-paid';
import OrderMobile from '../components/order-mobile';


function App() {
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
        <section className='px-16 py-14 h-[1400px] bg-[#A0A3BD20]'>
          <div className='flex gap-8 justify-center'>
            <div className='hidden md:block'>
              <InfoProfile/>
            </div>
                <div className='justify-center items-center md:justify-center md:items-center flex flex-col gap-12'>
                  <div className='hidden md:block'>
                    <HistoryOrder status='not' content='Account Profile' status2='active' content2='Order History'/>
                  </div>
                  <TicketActive/>
                  <TicketPaid title='Hiflix'/>
                  <TicketPaid title='Ebv.id'/>
                </div>
          </div>
        </section>
      </main>     
      
    </div>
  )
}

export default App
