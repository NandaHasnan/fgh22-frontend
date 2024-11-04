import { useState } from "react";
import Profile from '../assets/gambar/P-profile.png'
import { SlOptions } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
function InfoProfile() {
    useState(0)
  
    return (
        <div className='flex flex-col gap-8 w-80 h-[783px] px-10 pt-10 pb-24 rounded-lg bg-white'>
            <div className='flex justify-between'>
                <div>INFO</div>
                <div><SlOptions /></div>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='px-9'>
                    <img className='' src={Profile} alt="" />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-center text-xl font-semibold text-[#14142B]'>Jonas El Rodriguez</div>
                    <div className='text-center text-sm text-[#4E4B66]'>Moviegoers</div>
                </div>
            </div>
            <div className='w-60 h-[1px] bg-[#DEDEDE]'></div>
            <div className='text-base'>Loyalty Points</div>
            <div className='rounded-xl py-4 px-4 flex flex-col gap-5 w-[235px] h-32 bg-oren'>
            <div className='text-lg text-white font-medium flex items-center justify-between'>Moviegoers<FaStar className='w-10 h-10 rotate-45 text-[#FFC107]' /></div>
            <div className='text-2xl text-white font-medium'>320<span className='text-[10px] text-white font-medium items-end'>points</span></div>
            </div>
            <div className='justify-center flex flex-col gap-2'>
            <div className='text-center'>180 points become a master</div>
            <div className='w-[248px] h-4 bg-[#F5F6F8] rounded-full'><div className='w-[126px] h-4 bg-orenMuda rounded-full'></div></div>
            </div>
        </div>
  
    );
  }
  
  export default InfoProfile;
  