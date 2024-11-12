import React from 'react'
// import { useEffect } from 'react';
// import { Link} from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import Navbar from '../components/navbar';
import InfoProfile from '../components/info-profile';
import AccountProfile from '../components/account-profile';
import AccountMobile from '../components/account-mobile';
// import { useDispatch, useSelector } from 'react-redux';
// import { editUser } from './redux/reducers/users';
// import { setProfile } from './redux/reducers/profile';
import {  useDispatch, useSelector } from 'react-redux';
import { editUser } from '../redux/reducers/profile';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { logoutUser } from '../redux/reducers/profile';
// import { useNavigate } from 'react-router-dom';

function App() {
  //  useState(0)
  //  useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const user = useSelector(state => state.users.data);
  const token = useSelector((state) => state.auth); 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target);
    const firstName = form.get('f-name');
    const lastName = form.get('l-name');
    const email = form.get('email');
    const phoneNumber = form.get('number');
    const password = form.get('password');
    
    dispatch(editUser({
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    }))
  }

  React.useEffect(() => {
    if (token?.token === "") {
      navigate('/login');
    }
    
  }, [token]);

  return (
    <div className='flex-wrap'>
      <Navbar/>
      <div className='md:hidden'>
        <AccountMobile status='active' content='Account Profile' status2='not' content2='Order History'/>
      </div>
      <main>
        <section className='px-16 py-14 h-[1400px] bg-[#A0A3BD20]'>
          <div className='flex gap-8 justify-center'>
                <InfoProfile/>  
                <div className='hidden md:flex flex-col gap-12'>
                  <AccountProfile status='active' content='Account Profile' status2='not' content2='Order History'/>
                  <div className='py-10 px-12 w-[950px] h-[418px] rounded-lg bg-white'>
                    <form onSubmit={onSubmit} className='flex flex-col gap-12'>
                      <div className='flex flex-col gap-4'>
                        <div className='text-base text-[#14142B]'>Details Information</div>
                        <div className='px-6 w-[825px] h-[1px] bg-[#DEDEDE]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-8 justify-between'>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="f-name">First Name</label>
                          <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg' type="text" id='f-name' name='f-name' placeholder='Jonas'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="l-name">Last Name</label>
                          <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg' type="text" id='l-name' name='l-name' placeholder='El Rodriguez'/>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="email">E-mail</label>
                          <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg' type="text" id='email' name='email' placeholder='jonasrodrigu123@gmail.com' defaultValue={user.email}/>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="number">Phone Number</label>
                          <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg' type="text" id='number' name='number' placeholder='81445687121'/>
                        </div>
                      </div>   
                    </form>        
                  </div>
                  <div className='py-10 pb-16 px-12 w-[950px] rounded-lg bg-white'>
                    <div className='flex flex-col gap-12'>
                      <div className='flex flex-col gap-4'>
                        <div className='text-base text-[#14142B]'>Account and Privacy</div>
                        <div className='px-6 w-[825px] h-[1px] bg-[#DEDEDE]'></div>
                      </div>
                      <div className='grid grid-cols-2 gap-8 justify-between'>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="new-pass">New Password</label>
                          <div className="relative w-full">
                            <span className="absolute inset-y-0 right-12 flex items-center pointer-events-none">
                              <IoEyeOutline className="text-[#A0A3BD]" />
                            </span>
                            <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg focus:outline-none' type="text" id='con-pass' name='con-pass' placeholder='Write your password' />
                          </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                          <label className='text-base text-[#4E4B66]' htmlFor="con-pass">Confirm Password</label>
                          <div className="relative w-full">
                            <span className="absolute inset-y-0 right-12 flex items-center pointer-events-none">
                              <IoEyeOutline className="text-[#A0A3BD]" />
                            </span>
                            <input className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg focus:outline-none' type="text" id='con-pass' name='con-pass' placeholder='Confirm your password'/>
                          </div>
                        </div>
                      </div>   
                    </div>
                  </div>
                  <button type='submit' className='py-3 w-80 h-14 bg-oren text-center text-white rounded-2xl'>Update changes</button>         
                </div>
          </div>
        </section>
      </main>     
      
    </div>
  )
}

export default App
