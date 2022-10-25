import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourseDetailes = () => {
    const information = useLoaderData();
    const { _id, detailes, image, tools, name } = information;

    return (
        <div className={`bg-[url('https://www.mindinventory.com/blog/wp-content/uploads/2021/03/frontend-development-tools.png')]`} >
            <h1>mahi</h1>
        </div >
    );
};

export default SingleCourseDetailes;