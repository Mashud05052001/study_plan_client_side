import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cartsection = () => {
    const data = useLoaderData();
    console.log(data);
    const { image, name } = data;
    return (
        <section>
            <div>
                <h1>Your Courses</h1>
                <aside>
                    <h2>{name}</h2>
                    <span><img src={image} className='w-40 h-40' alt="" /></span>
                </aside>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Cartsection;