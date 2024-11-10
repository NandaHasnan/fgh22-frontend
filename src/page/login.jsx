import { useState, useEffect } from 'react';
import Logo from '../assets/gambar/logo2.png';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/reducers/users';
// import { login as loginAction } from '../redux/reducers/auth';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const loginFormSchema = yup.object({
  email: yup
    .string()
    .email('Email tidak valid')
    .min(8, 'Email minimal 8 karakter')
    .required('Email harus diisi'),
  password: yup
    .string()
    .min(8, 'Password minimal 8 karakter')
    .required('Password harus diisi')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password harus memiliki setidaknya 8 karakter, satu huruf besar, dan satu karakter spesial"
    ),
    
});

function Login() {
  // const [showError, setShowError] = useState(false);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(loginFormSchema),
  // });

  const [showPassword, setShowPassword] = useState(false);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  
  // const loggedInUser = useSelector((state) => state.profile.loggedInUser);

  // const onSubmit = (value) => {
  //   const found = loggedInUser.find((e) => e.email === value.email);
  //   if (value.email !== found.email) {
  //     window.alert('yes email');
  //     return;
      
  //   }
  //   if (value.password !== found.password) {
  //     window.alert('yes pass');
  //     return;
  //   }
  //   // setShowError(false);
  //   navigate('/home');
  //   dispatch(loginUser());
  // };
  
  // useEffect(() => {
  //   console.log('isLoggedIn status:', loggedInUser);
  //   if (loggedInUser) {
  //     navigate('/home');
  //   }
  // }, [loggedInUser]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.profile.loginUser);
  // const token = useSelector((state) => state.auth.token);

  // Gunakan useForm dengan resolver Yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    navigate('/home');
  };

  useEffect(() => {
    // console.log('isLoggedIn status:', isLoggedIn);
    if (isLoggedIn) {
      return
    }
  }, [isLoggedIn]);
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
              <label htmlFor="email" className="text-gray-600">Email</label>
              <input 
                className="py-2 md:py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                type="email"
                id="email"
                {...register('email')}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
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
                  {...register('password')}
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
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