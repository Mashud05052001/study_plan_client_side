import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from './Header';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../LottieAnimation/errorLottie.json";
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <Header />
            {
                error &&
                <section className='md:flex mt-20 lg:mt-0 items-center text-center md:text-left justify-center'>
                    <div className='md:mr-10'>
                        <Lottie animationData={groovyWalkAnimation} loop={true} className=' lg:w-96 rounded-xl lg:mt-20 mt-8 lg:h-[500px] h-[300px] w-full' />
                    </div>
                    <div className='w-full md:w-6/12 lg:w-4/12'>
                        <p className='text-[#1b689c] text-4xl font-semibold mb-3'>Sorry, an unexpected error has occurred.</p>
                        <p className='text-red-600 text-3xl font-medium'>{error.statusText || error.message}</p>
                        <p className='text-red-600 text-3xl font-medium'>{error.status}</p>
                    </div>

                </section>
            }
        </div>
    );
};

export default ErrorPage;