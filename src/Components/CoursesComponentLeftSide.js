import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleRight, FaChevronRight } from 'react-icons/fa';
const CoursesComponentLeftSide = ({ information }) => {
    // console.log(information);
    const { _id, name } = information;
    // console.log(name, _id);
    return (
        <div className='mt-4 text-lg ml-4 '>
            <NavLink to={`/courses/${_id}`} className='underlingShow'>
                <span className='flex items-center '>
                    {name}
                    <div className='mt-1 ml-2'>
                        <FaChevronRight className='w-5 text-black/40 rounded-full' />
                    </div>
                </span>
            </NavLink>
        </div>
    );
};

export default CoursesComponentLeftSide;