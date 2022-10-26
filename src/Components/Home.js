import React, { useContext } from 'react';
import image from '../Images/homepageimg.jpg'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../LottieAnimation/homeAnimation2.json";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HomeTypewritter from './HomeTypewritter';
import Counting from './Countdown';
import { AuthContext } from '../Firebase/UserContext';
const Home = () => {
    const { user } = useContext(AuthContext);
    console.log('mahi', user);
    return (
        <div className="hero min-h-[90.1vh]" style={{ backgroundImage: `url(${image})` }} >

            <div className="hero-overlay bg-opacity-75"></div>

            <div className="text-center text-neutral-content mt-28 lg:mt-5">
                <h1 className='text-4xl font-[poppins]'>EnrolMent Deadline</h1>
                <div className=' py-4 flex justify-center'>
                    <Counting /></div>
                <div className=' flex flex-col lg:-mt-20 lg:flex-row items-center lg:px-10'>

                    <div className="max-w-3xl sm:text-left text-center ">
                        <h1 className="text-3xl md:text-5xl font-bold">Welcome to Meta4 Learning</h1>
                        <p className="mb-5  absolute h-20 mx-5 sm:mx-0"><HomeTypewritter className='text-3xl absolute' /></p>
                        <Link to='/courses' ><button className="btn bg-[#1b689c] hover:bg-[#0d3b5a] w-52 text-xl mt-28 lg:mt-20">Get Started <FaArrowRight className='ml-3 mt-1 font-semibold' /></button></Link>
                    </div>
                    <div className='my-10 lg:my-0 ml-10'>
                        <Lottie animationData={groovyWalkAnimation} loop={true} className=' lg:w-96 rounded-xl lg:mt-20 mt-8 lg:h-[500px] h-[300px] w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;