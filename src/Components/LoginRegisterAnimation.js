import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../LottieAnimation/loginAnimation.json";
const LoginRegisterAnimation = () => {
    return (
        <div className='fixed'>
            <Lottie animationData={groovyWalkAnimation} loop='false' className='mt-5 w-[900px]' />
        </div>
    );
};

export default LoginRegisterAnimation;