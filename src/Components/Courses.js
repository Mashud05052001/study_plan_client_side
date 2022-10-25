import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesComponentLeftSide from './CoursesComponentLeftSide';
import CoursesComponentRightSide from './CoursesComponentRightSide';

const Courses = () => {
    const coursesData = useLoaderData();
    return (
        <section className='w-10/12 mx-auto grid grid-cols-6 min-h-[86vh]'>
            <div className='col-span-2 border-2 border-black border-r-0 flex flex-col  pt-20 '>
                {
                    coursesData.map(item => <CoursesComponentLeftSide
                        key={item._id}
                        information={item}
                    />)
                }
            </div>
            <div className='col-span-4 border-2 border-black  flex-col grid lg:grid-cols-2 gap-6 p-6'>
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