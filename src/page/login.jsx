import React, { useState } from 'react';
import Logo from '../assets/gambar/logo2.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import * as authAction  from '../redux/reducers/auth';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { registerUser } from '../redux/reducers/profile';
// import { setProfile } from '../redux/reducers/users';
// import { login } from '../redux/reducers/auth';

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

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const regis = useSelector((state) => state.profile.users); 
  const token = useSelector((state) => state.auth); 
  // const user = useSelector((state) => state.users.data); 
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(loginFormSchema), });
  const [isOpen, setIsOpen] = useState(false);
  
  const onSubmit = async (value) => {
    const query = new URLSearchParams(value)
    const queryString = query.toString()
    const res = await (await fetch("http://localhost:8888/auth/login", {
      method: "POST",
      body: queryString,
      mode: "no-cors",
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
      // ,mode: 'no-cors' 
    })).json();
    
    if (res.success === true) {
      dispatch(authAction.login(res.result));
    } else {
      setIsOpen(!isOpen, res.message)
      // window.alert(res.message);
    }
    
    

    // const found = regis.find(user => user.email === value.email)
    //   if(!found){
    //     window.alert('anda belum register')
    //     navigate('/register')
    //     return
    //   }
    //   if(value.password !== found.password){
    //     window.alert('password invalid')
    //     return
    //   }

    //   dispatch(login())
    //   dispatch(registerUser(value))
    //   dispatch(setProfile(found))
      // navigate('/');
    
  };
// console.log(token?.token)
  React.useEffect(() => {
    if (token?.token !== "") {
      navigate('/home');
    }
  }, [token, navigate]);

  return (
    <div className="bg-bg-marvel bg-no-repeat bg-cover h-screen bg-center flex items-center justify-center">
      <div className="w-full max-w-md mx-4 md:mx-auto">
        <div className="flex justify-center mb-8">
          <img className="w-32 md:w-40" src={Logo} alt="Tickitz Logo" />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className='text-2xl md:text-3xl font-bold'>Welcome Back👋</div>
            <div className='text-base md:text-lg text-gray-500'>Sign in with your data that you entered during your registration</div>
            
            <div className="flex flex-col gap-2">
            {isOpen && (
                <div className='py-3.5 w-full h-14 rounded-md bg-red text-center font-semibold text-white'>Invalid Email or Password</div>
            )}
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input 
                className="py-2 md:py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                id="email"
                {...register('email', {required:true})}
                placeholder="Enter your email"
              />
              {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-gray-600">Password</label>
              <div className="relative w-full">
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className=" absolute inset-y-0 right-4 md:right-6 flex items-center"
                >
                  <IoEyeOutline className="text-gray-400" />
                </button>
                <input
                  className="py-2 md:py-3 px-4 w-full rounded-lg border border-gray-300 focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register('password', {required:true})}
                  placeholder="Enter your password"
                />
                {errors.password && <span>{errors.password.message}</span>}
              </div>
            </div>
            <a className="text-right text-sm text-gray-600 mt-2 md:mt-6">Forgot your password?</a>
            <button type="submit" className="w-full py-3 md:py-4 rounded-md bg-orange-500 hover:bg-orange-400 text-center text-white font-semibold">
              Login
            </button>
            <div className='flex items-center justify-between mt-6'>
              <div className='w-1/4 h-px bg-gray-300'></div>
              <div className='text-gray-500 text-sm'>or</div>
              <div className='w-1/4 h-px bg-gray-300'></div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="https://www.google.com/"
                className="flex items-center justify-center gap-2 py-2 md:py-3 px-4 shadow-md rounded-lg w-full hover:bg-gray-100"
              >
                <FcGoogle className="text-xl" /> Google
              </Link>
              <Link
                to="https://www.facebook.com/"
                className="flex items-center justify-center gap-2 py-2 md:py-3 px-4 shadow-md rounded-lg w-full hover:bg-gray-100"
              >
                <FaFacebook className="text-blue-600 text-xl" /> Facebook
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;