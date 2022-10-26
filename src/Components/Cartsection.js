import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cartsection = () => {
    const data = useLoaderData();
    console.log(data);
    const { image, name } = data;
    return (
        <section className='min-h-screen'>

        </section>
    );
};

export default Cartsection;