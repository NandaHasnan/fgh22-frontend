import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../assets/gambar/logo2.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginFormScema = yup.object({
  email: yup
    .string()
    .email('email in valid')
    .min(8, 'email harus 8 karakter')
    .required('email is requared'),
  password: yup
    .string()
    .min(8, 'password harus 8 karakter')
    .required('password is requared')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  'agree-tos': yup.string().required().is(['true'], 'anda belum centang'),
});

function App() {
  useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormScema),
  });
  const onSubmit = (value) => console.log(value);
  return (
    <div className="bg-bg-marvel bg-cover h-screen bg-center flex items-center justify-center px-4 sm:px-8">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <img className="w-32 sm:w-40" src={Logo} alt="Tickitz Logo" />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <div className="md:flex justify-between items-center mb-6 hidden">
            <div className="flex flex-col gap-3 sm:gap-5 items-center">
              <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-orenMuda rounded-full text-white">1</div>
              <div className="text-xs sm:text-sm">Fill Form</div>
            </div>
            <div className="w-12 sm:w-16 border border-abu border-dashed"></div>
            <div className="flex flex-col gap-3 sm:gap-5 items-center">
              <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[#A0A3BD] rounded-full text-white">2</div>
              <div className="text-xs sm:text-sm text-[#A0A3BD]">Activate</div>
            </div>
            <div className="w-12 sm:w-16 border border-abu border-dashed"></div>
            <div className="flex flex-col gap-3 sm:gap-5 items-center">
              <div className="flex justify-center items-center w-10 h-10 sm:w-12 sm:h-12 bg-[#A0A3BD] rounded-full text-white">3</div>
              <div className="text-xs sm:text-sm text-[#A0A3BD]">Done</div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input
                className="py-2 sm:py-3 px-3 sm:px-4 rounded-md border border-abu focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                id="email"
                {...register('email')}
                placeholder="Enter your email"
              />
              <div>
                {errors.email?.message && <span>{errors.email?.message}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-600">Password</label>
              <div className="relative w-full">
                <button className="absolute py-5 right-4 flex items-center pointer-events-none">
                  <IoEyeOutline className="text-[#A0A3BD]" />
                </button>
                <input
                  className="px-4 py-2 sm:py-3 w-full h-12 sm:h-14 border border-[#DEDEDE] rounded-lg focus:outline-none"
                  type="password"
                  id="password"
                  {...register('password', { required: true })}
                  placeholder="Write your password"
                />
                <div>
                  {errors.password?.message && <span>{errors.password?.message}</span>}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" {...register('agree-tos')}/>
              <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600">I agree to terms & conditions</label>
              <div>
                {errors['agree-tos']?.message && (
                  <span>{errors['agree-tos']?.message}</span>
                )}
              </div>
            </div>
            <div>
              <button className="w-full py-3 sm:py-4 rounded-md bg-oren hover:bg-orenMuda text-center text-white font-semibold">
                Join For Free Now
              </button>
            </div>
            <div className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
              Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
            </div>
            <div className="flex gap-2 items-center justify-between mt-4 sm:mt-6">
              <div className="flex-1 h-px bg-abu"></div>
              <div className="text-xs sm:text-sm">or</div>
              <div className="flex-1 h-px bg-abu"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
              <Link
                to="https://www.google.com/"
                className="flex items-center justify-center gap-2 py-2 px-4 shadow-lg rounded-lg w-full hover:bg-gray-100"
              >
                <FcGoogle className="text-lg sm:text-xl" />Google
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="flex items-center justify-center gap-2 py-2 px-4 shadow-lg rounded-lg w-full hover:bg-gray-100"
              >
                <FaFacebook className="text-biru text-lg sm:text-xl" />Facebook
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
