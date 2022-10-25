import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourseDetailes = () => {
    const information = useLoaderData();
    console.log('info', information);
    return (
        <div>
            this is single page application
        </div>
    );
};

export default SingleCourseDetailes;