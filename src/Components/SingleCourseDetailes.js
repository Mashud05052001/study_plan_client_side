import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { GiChessKing } from "react-icons/gi";
import { setToLS } from './fakeDB';


// import Pdf from "react-to-pdf";
const SingleCourseDetailes = () => {
    const information = useLoaderData();
    const { _id, detailes, image, tools, name } = information;
    const pdfRef = React.createRef();
    // const handleCart = () => {
    //     setToLS(_id, image, name, 2000);
    // }
    return (
        <section className='mx-auto'>
            {/* <Pdf targetRef={pdfRef} filename="div-blue.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='btn btn-primary'>Generate Pdf</button>} */}
            {/* </Pdf> */}
            <div pdfRef={pdfRef} className='min-h-[90.1vh] flex items-center bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image})` }}>
                <div className=' text-white'>
                    <div className='border-2  lg:w-10/12 w-[98%] mx-auto lg:rounded-3xl rounded-xl  bg-black/80'>
                        <h1 className='font-[serif] text-3xl lg:text-5xl font-bold text-center text-white mt-3'>{name}</h1>
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
                                <button className='btn mx-3 bg-[#1b689c] hover:bg-[#0d3b5a]'>Click to back</button>
                            </Link>
                            <Link to={`/cart/${_id}`}>
                                <button className='btn  mx-3 bg-[#1b689c] hover:bg-[#0d3b5a]'><GiChessKing className='mr-2 -mt-1 text-yellow-500 w-6 h-6' /> Purchased This Course</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default SingleCourseDetailes;