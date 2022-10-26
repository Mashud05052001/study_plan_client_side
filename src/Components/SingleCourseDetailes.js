import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { GiChessKing } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";


const SingleCourseDetailes = () => {
    const information = useLoaderData();
    const { _id, detailes, image, tools, name } = information;
    const ref = React.createRef();
    return (
        <section className='mx-auto'>

            <div className='min-h-[90.1vh] flex items-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image})` }}>
                <div className=' text-white'>
                    <div ref={ref} className='relative border-2  lg:w-10/12 w-[90%] mx-auto lg:rounded-3xl rounded-xl  bg-black/80'>
                        <h1 className='font-[serif] text-3xl lg:text-5xl font-bold text-center text-white mt-3'>{name}</h1>
                        <div className='absolute right-6 top-5'>
                            <button className='btn tooltip tooltip-top' data-tip="I tried so much but could not capture full page pdf">
                                <Pdf targetRef={ref} filename="code-example.pdf">
                                    {({ toPdf }) => <button onClick={toPdf} className='flex items-center'>Download PDF
                                        <FaDownload className='ml-3' />
                                    </button>}
                                </Pdf>
                            </button>
                        </div>
                        <aside className='flex flex-col lg:flex-row mt-5 gap-x-10 font-medium' >
                            <p className='lg:w-6/12 text-justify leading-8 px-4 pb-8 lg:mt-5 mt-0'>{detailes}</p>
                            <div className='pr-3 py-5'>
                                <h1 className='text-2xl mb-3 text-center lg:text-left'>We will teach in our course :</h1>
                                <div className='grid grid-cols-2 lg:grid-cols-1  ml-5  rounded-xl'>
                                    {
                                        tools.map((item, index) =>
                                            <p className='flex items-center' key={index}>
                                                <FaCheck className='mr-2' />
                                                {item}
                                            </p>
                                        )
                                    }
                                </div>
                            </div>
                        </aside>
                        <div className='w-full  flex justify-center mb-5'>
                            <Link to='/courses'>
                                <button className='btn h-16  sm:h-auto mx-3 bg-[#1b689c] hover:bg-[#0d3b5a]'>Click to back</button>
                            </Link>
                            <Link to={`/cart/${_id}`}>
                                <button className='btn h-16 sm:h-auto mx-3 bg-[#1b689c] hover:bg-[#0d3b5a]'><GiChessKing className='mr-2 -mt-1 text-yellow-500 w-6 h-6' /> Purchased This Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SingleCourseDetailes;