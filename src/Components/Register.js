import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../LottieAnimation/LoginAnimation3.json";
import { AuthContext } from '../Firebase/UserContext';

const Register = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { user, setUser, darkMode, setDarkMode, loading, setLoading, register, googleLogin, githubLogin } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value, photo = form.photo.value, email = form.email.value,
            password = form.password.value, confirmPassword = form.confirmPassword.value;

    }
    const handleGoogle = () => {
        googleLogin().then(result => {
            const user = result.user;
            if (user.emailVerified) {
                navigate('/courses');
            }
        }).catch(err => setError(err)).finally(() => setLoading(false))
    }
    return (
        <section className='lg:w-10/12  w-full mx-auto  flex flex-col lg:flex-row justify-center items-center'>

            <div className='xl:mr-10 lg:-mt-20'>
                <Lottie animationData={groovyWalkAnimation} loop='true' className='  lg:w-96 rounded-xl lg:mt-20 mt-8 lg:h-[500px] h-[300px] w-full' />
            </div>

            <div className='lg:mt-2  xl:ml-10 md:w-96  w-full mx-auto lg:mx-0'>
                <form className='select-none' onSubmit={handleRegister}>
                    <div className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100 border-4">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter your photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <div className='relative'>
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={showPassword1 ? 'text' : 'password'} name='password' placeholder="Enter your password" className="input input-bordered w-full" required />

                                </div>
                                <div className='relative'>
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type={showPassword1 ? 'text' : 'password'} name='confirmPassword' placeholder="Re-enter your password" className="input input-bordered w-full" required />
                                    {
                                        showPassword1 ?
                                            <FaRegEyeSlash className='absolute top-[65px] right-2 w-6 opacity-50 cursor-pointer z-10'
                                                onClick={() => setShowPassword1(!showPassword1)} />
                                            :
                                            <FaRegEye className='absolute top-[65px] right-2 w-6 opacity-50 cursor-pointer z-10'
                                                onClick={() => setShowPassword1(!showPassword1)} />
                                    }
                                </div>
                                <label className="label">
                                    <p className="label-text-alt link link-hover mt-3">Forgot password?</p>
                                </label>
                                <label className="label mt-2">
                                    <p className='label-text-alt'>
                                        Already have an account?&nbsp;&nbsp;
                                        <Link to='/login' className='text-blue-600 underline hover:text-blue-600'>Login Here</Link>
                                    </p>
                                </label>
                                <div className='flex mt-3 items-center'>
                                    <span>Also Join with : </span>
                                    <div className='ml-4 flex'>
                                        <FcGoogle className='border-2 border-black/20 cursor-pointer hover:-translate-y-[1px] duration-200 rounded-full w-8 h-8 p-1 mx-2' onClick={handleGoogle} />
                                        <FaGithub className='border-2 border-black/20 cursor-pointer hover:-translate-y-[1px] duration-200 rounded-full w-8 h-8 p-1 mx-2' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-3">
                                <button type="submit" className="btn  bg-[#1b689c] hover:bg-[#0d3b5a]">Register Here</button>

                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Register;