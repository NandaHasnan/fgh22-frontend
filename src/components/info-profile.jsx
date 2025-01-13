import React, { useState } from 'react';
// import Profile from '../assets/gambar/P-profile.png'
import { SlOptions } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import * as profile from "../redux/reducers/profile"
import { useDispatch, useSelector  } from 'react-redux';



function InfoProfile() {
    const [isShow, setShow] = useState(false);
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth)
    const userProfile = useSelector(state => state.profile.users)


    async function getProfil(token) {
      const data = await (await fetch("http://localhost:8888/profile", {
        // mode: 'no-cors',
        headers: {
          "Authorization" : `Bearer ${token.token}`
        }
      })).json()
        dispatch(profile.setProfile(data.result))
    }
    
    React.useEffect(() => {
      if (token?.token !== "") {
        getProfil(token)
      }
    }, [token])
  
    return (
        <div className='flex flex-col gap-8 w-80 md:h-[783px] px-10 pt-10 pb-24 rounded-lg bg-white'>
            <div className='flex justify-between'>
                <div>INFO</div>
                <div className="hidden md:block"><SlOptions /></div>
            </div>
            <div className='flex flex-col gap-8'>
                <div className='px-14'>
                    <img className='w-32 h-32 rounded-full bg-gray-200' src={`http://localhost:8888/users/image/${userProfile.image}`} alt={userProfile.image} />
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-center text-xl font-semibold text-[#14142B]'>{userProfile.firstname}</div>
                    <div className='text-center text-sm text-[#4E4B66]'>{userProfile.lastname}</div>
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
            <button onClick={() =>setShow(!isShow)} className="md:hidden w-60 h-14 border border-orenMuda rounded-lg text-oren">Edit Profile</button>

            {isShow && ( <>
            <div className=" md:block fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">  
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10 py-4 md:pt-4 px-5 w-[358px] h-full lg:h-[413px] bg-white rounded-xl'>
                  <div className="text-2xl font-semibold">Account Settings</div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div>Details Information</div>
                        <div className="w-full h-[1px] bg-[#DEDEDE]"></div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="f-name">First Name</label>
                          <input className='px-6 w-full h-14 border border-[#DEDEDE] rounded-lg' type="text" id='f-name' name='f-name' placeholder={userProfile.firstname}/>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="email">E-mail</label>
                          <input className='px-6 w-full h-14 border border-[#DEDEDE] rounded-lg' type="text" id='email' name='email' placeholder={userProfile.email}/>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="number">Phone Number</label>
                          <input className='px-6 w-full h-14 border border-[#DEDEDE] rounded-lg' type="text" id='number' name='number' placeholder={userProfile.phone_number}/>
                        </div>
                      </div>   
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div>Account and Privacy</div>
                        <div className="w-full h-[1px] bg-[#DEDEDE]"></div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="new-pass">New Password</label>
                          <div className="relative w-full">
                            <span className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                              <IoEyeOutline className="text-[#A0A3BD]" />
                            </span>
                            <input className='px-6 w-full h-14 border border-[#DEDEDE] rounded-lg focus:outline-none' type="text" id='con-pass' name='con-pass' placeholder='Write your password'/>
                          </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="con-pass">Confirm Password</label>
                          <div className="relative w-full">
                            <span className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                              <IoEyeOutline className="text-[#A0A3BD]" />
                            </span>
                            <input className='px-6 w-full h-14 border border-[#DEDEDE] rounded-lg focus:outline-none' type="text" id='con-pass' name='con-pass' placeholder='Confirm your password'/>
                          </div>
                        </div>
                      </div>   
                  </div>
                  <button onClick={() =>setShow(!isShow)} className='py-3.5 w-full lg:w-[358px] h-14 bg-oren rounded-md text-white text-center'>Update changes</button>
                </div>
                
              </div>
            </div>
          </>
        
        )} 
        </div>

        
  
    );
  }
  
  export default InfoProfile;
  