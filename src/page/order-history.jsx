import { useState } from 'react'
import InfoProfile from '../components/info-profile'
import Navbar from '../components/navbar-profile'
import HistoryOrder from '../components/history-order';
import TicketActive from '../components/ticket-active';
import TicketPaid from '../components/ticket-paid';


function App() {
   useState(0)
  
  return (
    <div className=''>
      <Navbar/>

      <main>
        <section className='px-16 py-14 h-[1400px] bg-[#A0A3BD20]'>
          <div className='flex gap-8 justify-center'>
                <InfoProfile/>
                <div className='flex flex-col gap-12'>
                  <HistoryOrder status='not' content='Account Profile' status2='active' content2='Order History'/>
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
