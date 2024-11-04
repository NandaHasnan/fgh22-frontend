import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

function Step(props) {
    useState(0)
    return ( 
        <section className=''>
            <div className="gap-6 flex justify-center items-center mb-8">
               {props.status === 'active' && <div className='flex flex-col gap-5 justify-center items-center'>
                   <div className='flex justify-center items-center w-12 h-12 bg-[#008000] rounded-full text-center text-white'><FaCheck /></div>
                   <div className="text-green-500">{props.content}</div>
               </div>}
            </div>
        </section>
    )   
  }
  
  export default Step; 