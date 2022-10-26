import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesComponentLeftSide from './CoursesComponentLeftSide';
import CoursesComponentRightSide from './CoursesComponentRightSide';
import { FaBars } from 'react-icons/fa';

const Courses = () => {
    const coursesData = useLoaderData();
    return (
        <section className='lg:w-10/12 mx-auto flex min-h-[86vh] relative'>
            {/* show it when display side is under lg */}
            <div className="drawer lg:hidden absolute ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className='absolute h-14 w-10/12  lg:w-10/12'>

                    <div className=" drawer-conte absolute -right-4
                    lg:right-[120px] top-4">

                        <label htmlFor="my-drawer" ><FaBars className='text-[#1b689c] w-8 h-8 cursor-pointer' /></label>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu  overflow-y-auto w-72 pr-5 bg-gray-300 ">
                        {
                            coursesData.map(item => <CoursesComponentLeftSide
                                key={item._id}
                                information={item}
                            />)
                        }

                    </ul>
                </div>
            </div>
            <div className='hidden w-0 md:w-[650px]  border-black border-r-0 lg:flex flex-col  pt-3 max-h-96 sticky -top-10'>
                {
                    coursesData.map(item => <CoursesComponentLeftSide
                        key={item._id}
                        information={item}
                    />)
                }
            </div>
            <div className='w-10/12 mx-auto lg:w-full col-span-4 mt-10 lg:mt-0 flex-col grid md:grid-cols-2  gap-8 p-6'>
                {
                    coursesData.map(item => <CoursesComponentRightSide
                        key={item._id}
                        information={item}
                    />)
                }
            </div>
        </section>
    );
};

export default Courses;