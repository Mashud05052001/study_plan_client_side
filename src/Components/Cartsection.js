import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './CartSection.Module.css'
const Cartsection = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    console.log(data);
    const { image, name } = data;
    const handleCheckout = () => {
        toast.success('You have successfully confirm this order.');
        navigate('/')
    }

    return (
        <section className='min-h-screen mt-10'>
            <div className='border-2 border-black/10 w-[90vw] lg:w-8/12 xl:w-6/12 mx-auto p-5 rounded-xl shadow-2xl'>
                <h1 className='text-2xl md:text-4xl font-mono font-semibold text-center text-[#1b689c]'>
                    <span className='cartTag px-7 pb-2'>Your Selected Item</span>
                </h1>
                <div className="hero mt-10  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={image} alt="..." className='w-80 h-52 rounded-2xl' />
                        <div>
                            <h1 className="text-3xl font-bold">{name}</h1>
                            <button className="btn bg-[#1b689c] hover:bg-[#0d3b5a] mt-10" onClick={handleCheckout}>Click here to begin checkout process</button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </section>
    );
};

export default Cartsection;