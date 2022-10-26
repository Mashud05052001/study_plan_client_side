import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cartsection = () => {
    const data = useLoaderData();
    console.log(data);
    const { image, name } = data;
    return (
        <section>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center">
                    <div className='flex items-center'>
                        <span><img src={image} className='w-40 h-40 rounded-full border-black/50 border-4' alt="" /></span>
                        <div className=''>
                            <h1>Your Courses</h1>
                            <h2>{name}</h2>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            </div>
        </section>
    );
};

export default Cartsection;