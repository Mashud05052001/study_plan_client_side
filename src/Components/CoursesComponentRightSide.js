/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

const CoursesComponentRightSide = ({ information }) => {
    const { image, name, detailes, _id } = information;
    // console.log(information);
    return (
        <div className="">
            <div className="">
                <div className=' border-black p-1 rounded-xl bg-blue-200'>
                    <img src={image} className='w-full rounded-xl h-52' />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mt-3">{name}</h1>
                    <p className="mb-3 mt-1">{detailes.slice(0, 120)}...</p>
                    <Link to={`/courses/${_id}`} className='w-full'>
                        <button className="btn  bg-[#1b689c] hover:bg-[#0d3b5a] w-full">Detailes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesComponentRightSide;