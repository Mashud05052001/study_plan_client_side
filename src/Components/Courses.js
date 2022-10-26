import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesComponentLeftSide from './CoursesComponentLeftSide';
import CoursesComponentRightSide from './CoursesComponentRightSide';
import { FaBars } from 'react-icons/fa';

const Courses = () => {
    const [sidebar, setSideBar] = useState(false);
    const coursesData = useLoaderData();
    return (
        <section className='min-h-screen'>
            <div className='lg:w-10/12 mx-auto flex  relative'>
                {/* show it when display side is under lg */}
                <div className='lg:hidden absolute right-20 top-3'>
                    <FaBars className='text-[#1b689c] w-8 h-8 cursor-pointer' onClick={() => setSideBar(!sidebar)} />
                </div>
                {/* showing category when onclick the hamburger */}
                <div className={`lg:hidden absolute bg-gray-300 w-full ${sidebar ? 'opacity-100 z-10 duration-300' : 'opacity-0 -z-10 duration-500'}`}>

                    <CoursesComponentLeftSide setSideBar={setSideBar} />
                </div>


                <div className='hidden w-0 md:w-[650px]  border-black border-r-0 lg:flex flex-col  pt-3 max-h-96 '>
                    <CoursesComponentLeftSide />
                </div>
                <div className='w-10/12 mx-auto lg:w-full col-span-4 mt-10 lg:mt-0 flex-col grid md:grid-cols-2  gap-8 p-6'>
                    {
                        coursesData.map(item => <CoursesComponentRightSide
                            key={item._id}
                            information={item}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Courses;