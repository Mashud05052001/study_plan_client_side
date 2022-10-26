import React from 'react';
import data from '../../public/blog.json'
import SingleBlog from './SingleBlog';
const Blog = () => {
    return (
        <div className='my-12 lg:w-10/12 mx-auto select-none'>
            mahi
            {/* <h1 className='text-3xl text-center text-[#601c7b] font-bold'>Answering Question</h1>
            <div className='border-2 rounded-xl mx-auto mt-5 p-4'>
                {
                    data.map(item => <SingleBlog key={item.id} info={item} />)
                }
            </div> */}
        </div>
    );
};

export default Blog;