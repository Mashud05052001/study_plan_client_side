import React, { useState } from 'react';
const SingleBlog = ({ info }) => {
    const [show, setShow] = useState(false);
    const { question, answer, id } = info;
    console.log(show);
    return (
        <div className='relative border-2 border-gray-500 rounded-2xl mt-4 pt-2' >
            <h2 className='  py-2 pl-4 w-10/12' ><span className='pr-1 font-semibold '>Q{id}.</span>{question}
                <span className='absolute right-10 cursor-pointer' onClick={() => setShow(!show)}>
                    {
                        show ? '➖' : '➕'
                    }
                </span>
            </h2>
            <p className={show ? 'max-h-96 lg:max-h-56 duration-1000 ease-linear pl-3 pb-2 overflow-hidden' : 'max-h-0 overflow-hidden duration-300 ease-linear pl-3 pb-2 '}> <hr className='mr-6 border-2 border-black bg-black opacity-30 rounded-full mt-2 mb-1' /> <span className='font-semibold'>Answer: </span>{answer}</p>
        </div>
    );
};

export default SingleBlog;