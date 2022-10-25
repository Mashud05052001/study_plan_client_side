import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";


const SingleCourseDetailes = () => {
    const information = useLoaderData();
    const { _id, detailes, image, tools, name } = information;

    return (
        <section className='mx-auto'>
            <div className='relative'>
                <img src={image} alt="" className='opacity-[25%] absolute w-full h-[89.7vh]' />
                <div className='pt-20 text-white'>
                    <div className='border-2  lg:w-10/12 w-[98%] mx-auto lg:rounded-3xl rounded-xl  bg-black'>
                        <h1 className='font-[serif] text-3xl lg:text-5xl font-bold text-center text-white mt-3'>{name}</h1>
                        <aside className='flex flex-col lg:flex-row mt-5 gap-x-10 font-medium' >
                            <p className='lg:w-6/12 text-justify leading-8 px-4 pb-8 lg:mt-5 mt-0'>{detailes}</p>
                            <div className='pr-3 py-5'>
                                <h1 className='text-2xl mb-3 text-center lg:text-left'>We will teach in our course :</h1>
                                <div className='grid grid-cols-2 lg:grid-cols-1  ml-5  rounded-xl'>
                                    {
                                        tools.map(item =>
                                            <p className='flex items-center'>
                                                <FaCheck className='mr-2' />
                                                {item}
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCourseDetailes;