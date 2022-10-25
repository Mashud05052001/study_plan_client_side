import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesComponentLeftSide from './CoursesComponentLeftSide';
import CoursesComponentRightSide from './CoursesComponentRightSide';

const Courses = () => {
    const coursesData = useLoaderData();
    return (
        <section className='w-10/12 mx-auto flex min-h-[86vh]'>
            <div className='w-[700px]  border-black border-r-0 flex flex-col  pt-3 max-h-96 sticky top-0'>
                {
                    coursesData.map(item => <CoursesComponentLeftSide
                        key={item._id}
                        information={item}
                    />)
                }
            </div>
            <div className='col-span-4  flex-col grid lg:grid-cols-2 gap-8 p-6'>
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