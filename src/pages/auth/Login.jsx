import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Logo from "../../assets/happy-friends-looking-out-window.jpg";
import { login } from '../../utils/auth/auth';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const response = await login(values.email, values.password);
      if (response.data && response.data.access_token) {
        localStorage.setItem('token', response.data.access_token); // Store the token
        window.location.reload(); 
        navigate('/'); // Navigate to dashboard
        
      } else {
        setLoginError(response.message || 'Login failed');
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid grid-cols-2 divide-x p-8 h-[100vh]">
      <div>
        <img className="h-[100vh] w-full object-cover rounded-md" src={Logo} alt="loginimg" />
      </div>

      <div className="h-[100%] p-8">
        <div className="flex justify-between">
          <h3 className="text-3xl font-bold text-[#02208D]">Orbut</h3>

          <div className="flex">
            <p className="text-1xl mt-2 mr-2">Don't have an account yet?</p>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-purple-600 rounded-[50px] border border-[#A293FF]">
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Sign up now
              </span>
            </button>
          </div>
        </div>

        <div className="justify-center flex flex-col items-center gap-5 h-[85%] pt-20 w-[70%] ml-24">
          <p className="text-[#222222] text-4xl font-bold mb-6">Welcome Back</p>
          <p className="text-[#222222] text-1xl font-normal mb-10">Sign in to manage your Campaigns</p>

          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mb-6 w-full">
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-600 block w-full p-2.5"
                placeholder="Email address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-6 w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-purple-600 block w-full p-2.5"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
              ) : null}
            </div>
            {loginError && (
              <div className="text-red-600 text-sm mt-1 mb-3">{loginError}</div>
            )}
            <button
              type="submit"
              className={`text-white focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 w-full ${
                formik.isValid ? 'bg-[#3F20FF]' : 'bg-[#A293FF]'
              }`}
              disabled={!formik.isValid}
            >
              Login
            </button>
          </form>

          <a href="#www" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
