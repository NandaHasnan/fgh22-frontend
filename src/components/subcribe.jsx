import { useState } from "react";

function Subscribe() {
    useState(0)
    return (
        <section className='px-9 w-full md:h-80 h-full bg-oren py-20 flex flex-col gap-12 rounded-lg'>
          <div className='text-3xl md:text-5xl text-white text-center'>Subscribe to our newsletter</div>
          <div className='flex flex-col sm:flex-row gap-2.5 justify-center'>
            <input className='p-4 border-white border bg-oren text-white placeholder:text-white rounded-lg' type="text" placeholder='First name'/>
            <input className='p-4 border-white border bg-oren text-white placeholder:text-white rounded-lg' type="text" placeholder='Email address'/>
            <button className='bg-white py-4 px-11 rounded-lg text-oren'>Subscribe Now</button>
          </div>
        </section>
    )   
  }
  
  export default Subscribe;