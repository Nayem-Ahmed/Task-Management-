import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/Authprovider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import axios from 'axios';

const image_hosting_api = import.meta.env.VITE_img_Api;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

const Signup = () => {
  const { signupUser, signingoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Upload the image to ImgBB
      const formData = new FormData();
      formData.append('image', data.photo[0]);

      const response = await axios.post(image_upload_api, formData, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });

      // Extract the URL of the uploaded image from the ImgBB response
      const imageUrl = response.data.data.url;

      signupUser(data.email, data.password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: data.firstName,
            photoURL: imageUrl,
          })
            .then(() => console.log('Profile uploaded'))
            .catch((profileError) => console.error('Error updating profile:', profileError));

          toast('User created successfully');
          navigate('/');
        })
        .catch((error) => {
          console.error(error);
          toast(error.message);
        });
    } catch (error) {
      console.error('Error uploading image to ImgBB:', error);
      toast('Error uploading image');
    }
  };

  const googleLogin = () => {
    signingoogle();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white mt-6 p-8 rounded shadow-md w-[500px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-2">
            Name
          </label>
          <input
            id="firstName"
            className="border border-gray-300 p-2 mb-4 w-full"
            type="text"
            placeholder="Enter your name"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span className="text-red-500">Name is required</span>}

          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
            Email
          </label>
          <input
            id="email"
            className="border border-gray-300 p-2 mb-4 w-full"
            type="email"
            placeholder="Enter your email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="text-red-500">Valid Email is required</span>}

          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
            Password
          </label>
          <input
            id="password"
            className="border border-gray-300 p-2 mb-4 w-full"
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <span className="text-red-500">Password must be at least 6 characters</span>}

          <label htmlFor="photo" className="block text-sm font-medium text-gray-600 mb-2">
            Photo
          </label>
          <input id="photo" className="border border-gray-300 p-2 mb-4 w-full" type="file" accept="image/*" {...register('photo')} />

          <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600">
            Sign Up
          </button>
          <i className="divider">OR</i>
          <button onClick={googleLogin} className="btn btn-block btn-outline">
            <FcGoogle className="text-2xl" /> Continue With Google
          </button>

          <p className="my-3">
            Already have an account? <a className="underline text-blue-500" href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

