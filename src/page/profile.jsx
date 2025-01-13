import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import InfoProfile from '../components/info-profile';
import AccountProfile from '../components/account-profile';
import AccountMobile from '../components/account-mobile';
import { editUser } from '../redux/reducers/profile';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const Tipe_file = ["image/jpeg", "image/jpg", "image/png"];

const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Email tidak valid')
    .min(8, 'Email minimal 8 karakter')
    .required('Email harus diisi'),
  password: yup
    .string()
    // .min(8, 'Password minimal 8 karakter')
    .required('Password harus diisi')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password harus memiliki setidaknya 8 karakter, satu huruf besar, dan satu karakter spesial"
    ),
});

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProfile = useSelector((state) => state.profile.users);
  const token = useSelector((state) => state.auth?.token);
  const {  formState: { errors }, } = useForm({ resolver: yupResolver(loginFormSchema), });
  const [file, setFile] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const selectFile = (f) => {
    const selected = f.target.files[0];
    if (selected.size > 2 * 1024 * 1024) {
      setIsOpen(true);
      f.target.value = '';
      setFile({});
      return;
    }

    if (!Tipe_file.includes(selected.type)) {
      setIsOpen2(true);
      f.target.value = '';
      setFile({});
      return;
    }

    setFile(selected);
  };

  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      firstname: userProfile.firstname,
      lastname: userProfile.lastname,
      email: userProfile.email,
      phone_number: userProfile.phone_number,
      password: '',
    },
  });

  React.useEffect(() => {
    if (userProfile) {
      setValue("firstname", userProfile.firstname);
      setValue("lastname", userProfile.lastname);
      setValue("email", userProfile.email);
      setValue("phone_number", userProfile.phone_number);
    }
  }, [userProfile, setValue]);

  const onSubmit = async (data) => {
    if (data.password !== confirmPassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    const form = new FormData();
    form.append('firstname', data.firstname);
    form.append('lastname', data.lastname);
    form.append('email', data.email);
    form.append('phone_number', data.phone_number);

    if (data.password && data.password.trim() !== "") {
      form.append('password', data.password);
    }

    if (file.name) {
      form.append('image', file);
    }

    const headers = {};

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await fetch("http://localhost:8888/users", {
        method: "PATCH",
        body: form,
        headers,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response dari server:", result);

        dispatch(editUser(result));
        alert("Profile updated successfully!");
      } else {
        const error = await response.text();
        console.error("Error dari server:", error);
        setIsOpen3(true);
        // alert("Failed to update profile!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      // alert("Profile update success");
      setIsOpen4(true);
    }
  };

  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div className='flex-wrap'>
      <Navbar />
      <div className='md:hidden'>
        <AccountMobile status='active' content='Account Profile' status2='not' content2='Order History' />
      </div>
      <main>
        <section className='px-16 py-14 h-[1400px] bg-[#A0A3BD20]'>
          <div className='flex gap-8 justify-center'>
            <InfoProfile />
            <div className='hidden md:flex flex-col gap-12'>
              
      {isOpen3 && (
                        <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>Failed to update profile</div>
                      )}
                      {isOpen4 && (
                        <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>Profile update success</div>
                      )}
              <AccountProfile status='active' content='Account Profile' status2='not' content2='Order History' />
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-12'>
                <div className='py-10 px-12 w-[950px] h-[418px] rounded-lg bg-white'>
                  <div className='flex flex-col gap-4'>
                    <div className='text-base text-[#14142B]'>Details Information</div>
                    <div className='px-6 w-[825px] h-[1px] bg-[#DEDEDE]'></div>
                  </div>
                  <div className='grid grid-cols-2 gap-8 justify-between'>
                    <div className='flex flex-col gap-3'>
                      <label className='text-base text-[#4E4B66]' htmlFor="firstname">First Name</label>
                      <input
                        className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg'
                        type="text"
                        id='firstname'
                        {...register("firstname")}
                      />
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label className='text-base text-[#4E4B66]' htmlFor="lastname">Last Name</label>
                      <input
                        className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg'
                        type="text"
                        id='lastname'
                        {...register("lastname")}
                      />
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label className='text-base text-[#4E4B66]' htmlFor="email">E-mail</label>
                      <input
                        className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg'
                        type="email"
                        id='email'
                        {...register("email")}
                      />
                      {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label className='text-base text-[#4E4B66]' htmlFor="phone_number">Phone Number</label>
                      <input
                        className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg'
                        type="text"
                        id='phone_number'
                        {...register("phone_number")}
                      />
                    </div>
                    <div className='flex flex-col gap-3'>
                      {isOpen && (
                        <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>File max 2 mb</div>
                      )}
                      {isOpen2 && (
                        <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>File harus jpg dan png</div>
                      )}
                      <input className='file:w-96 w-[828px] file:h-14 file:bg-white border border-[#DEDEDE] file:border-none  file:text-lg file:cursor-pointer  rounded-lg ' type="file" id='image' onChange={selectFile} />
                    </div>
                  </div>
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
                          <input
                            className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg focus:outline-none'
                            type={isPasswordVisible ? "text" : "password"}
                            id='password'
                            {...register("password")}
                            placeholder='Write your password'
                          />
                          {errors.password && <span>{errors.password.message}</span>}
                          <span
                            className="absolute inset-y-0 right-9 flex items-center cursor-pointer"
                            onClick={() => setPasswordVisible(!isPasswordVisible)}
                          >
                            <IoEyeOutline className={isPasswordVisible ? "text-[#A0A3BD]" : "text-[#4E4B66]"} />
                          </span>
                        </div>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <label className='text-base text-[#4E4B66]' htmlFor="con-pass">Confirm Password</label>
                        <div className="relative w-full">
                          <input
                            className='px-6 w-96 h-14 border border-[#DEDEDE] rounded-lg focus:outline-none'
                            type={isConfirmPasswordVisible ? "text" : "password"}
                            id='con-pass'
                            placeholder='Confirm your password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          {errors.password && <span>{errors.password.message}</span>}
                          <span
                            className="absolute inset-y-0 right-9 flex items-center cursor-pointer"
                            onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
                          >
                            <IoEyeOutline className={isConfirmPasswordVisible ? "text-[#A0A3BD]" : "text-[#4E4B66]"} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className='cursor-pointer py-3 w-80 h-14 bg-oren text-center text-white rounded-2xl'>
                  Update changes
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
