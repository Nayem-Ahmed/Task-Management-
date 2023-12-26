import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/Authprovider';
import { toast } from 'react-toastify';

const Login = () => {
  const { signinUser } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log('Form data submitted:', data);
    signinUser(data.email,data.password)
      .then((result) => {
        console.log(result.user);
        toast('Login Successful')
      })
      .catch((error) => {
        console.error(error);
        toast('Envalid Password')
      })
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96 text-left">
        <h1 className="text-2xl font-bold mb-6">Login Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
            email
          </label>
          <input
            id="email"
            className="border border-gray-300 p-2 mb-4 w-full"
            type="text"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-red-500">email is required</span>}

          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
            Password
          </label>
          <input
            id="password"
            className="border border-gray-300 p-2 mb-4 w-full"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500">Password is required</span>}
          <p className='my-3'>Not a Member ? <a className='underline text-blue-500' href="/signup">Signup</a></p>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
