import { useState } from 'react'
import NavbarAdmin from '../components/navbar-admin';
import GraphChart from '../components/chart-com';

function App() {
   useState(0)

  return (
    <div className=''>
      <NavbarAdmin/>

      <main className='flex flex-col gap-12 px-16 py-14 h-full bg-[#A0A3BD20]'>
        <section className='flex justify-center gap-4'>
                <div className='flex flex-col gap-9 w-full md:w-[1105px]  bg-white px-8 py-12 rounded-md'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-2xl font-semibold'>Sales Chart</div>
                        <div className='md:flex md:flex-row flex flex-col gap-5'>
                            <div className="flex flex-col gap-2">
                                <select className="py-3.5 px-5 md:w-56 w-full rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                    <option className='text-base text-[#4E4B66]' value="">Movies Name</option>
                                    <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                    <option className='text-base text-[#4E4B66]' value="">14.30</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <select className="py-3.5 px-5 md:w-40 w-full rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                    <option className='text-base text-[#4E4B66]' value="">Weekly</option>
                                    <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                    <option className='text-base text-[#4E4B66]' value="">14.30</option>
                                </select>
                            </div>
                            <button className='md:w-32 w-full h-12 text-white bg-oren rounded-md'>Filter</button>
                        </div>
                    </div>
                    <div className='text-sm text-[#151522]'>Avengers: End Game</div>
                    <GraphChart/>
                </div>
        </section>
        <section className='flex justify-center gap-4'>
                <div className='flex flex-col gap-9 w-full md:w-[1105px]  bg-white px-8 py-12 rounded-md'>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-semibold'>Ticket Sales</div>
                    <div className='md:flex md:flex-row flex flex-col gap-5'>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 md:w-56 w-full rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Category</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 md:w-40 w-full rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Location</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <button className='w-full md:w-32 h-12 text-white bg-oren rounded-md'>Filter</button>
                    </div>
                </div>
                <div className='text-sm text-[#151522]'>Adventure, Purwokerto</div>
                <GraphChart/>
                </div>
        </section>
      </main>      
      {/* <main className='px-16 py-14 h-[1400px] bg-[#A0A3BD20]'>
        <div className='flex flex-col gap-8 justify-center'>
            <section className='flex flex-col gap-11 py-10 px-12 w-[1050px] rounded-lg bg-white'>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-semibold'>Sales Chart</div>
                    <div className='flex gap-5'>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-56 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Movies Name</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-40 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Weekly</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <button className='w-32 h-12 text-white bg-oren rounded-md'>Filter</button>
                    </div>
                </div>
                <div className='text-sm text-[#151522]'>Avengers: End Game</div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-16'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    <div className='pt-16'>
                        <img src={Graph} alt="" />
                        <div className='flex gap-44 justify-center'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-col gap-11 py-10 px-12 w-[1050px] rounded-lg bg-white'>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-semibold'>Ticket Sales</div>
                    <div className='flex gap-5'>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-56 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Category</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <select className="py-3.5 px-5 w-40 rounded-md bg-abuMuda2 focus:outline-none " type="text" id="event" name="event" placeholder="New Born Expert">
                                <option className='text-base text-[#4E4B66]' value="">Location</option>
                                <option className='text-base text-[#4E4B66]' value="">010.30</option>
                                <option className='text-base text-[#4E4B66]' value="">14.30</option>
                            </select>
                        </div>
                        <button className='w-32 h-12 text-white bg-oren rounded-md'>Filter</button>
                    </div>
                </div>
                <div className='text-sm text-[#151522]'>Adventure, Purwokerto</div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-16'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    <div className='pt-16'>
                        <img src={Graph} alt="" />
                        <div className='flex gap-44 justify-center'>
                        <div className='text-xs text-[#999999]'>$800</div>
                        <div className='text-xs text-[#999999]'>$600</div>
                        <div className='text-xs text-[#999999]'>$400</div>
                        <div className='text-xs text-[#999999]'>$200</div>
                        <div className='text-xs text-[#999999]'>$0</div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
      </main>      */}
      
    </div>
  )
}

export default App
