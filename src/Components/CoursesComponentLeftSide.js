import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
const CoursesComponentLeftSide = ({ setSideBar }) => {

    return (
        <section>
            <div onClick={() => setSideBar(false)} className="lg:hidden cursor-pointer  absolute top-0 right-8 text-[#1b689c]">
                <ImCross />
            </div>
            <div className='mt-7 border-2 border-black/20 mr-3 py-4 rounded-2xl pl-3 text-lg ml-4 ' onClick={() => setSideBar(false)} >
                <NavLink to={`/category/all`} className={({ isActive }) => isActive ? 'text-[#1b689c] font-bold' : 'bg-white'}>
                    <span className='flex items-center '>
                        <div>
                            ALL Courses
                        </div>
                        <div className='mt-1 ml-2'>
                            <FaChevronRight className='w-5 text-black/40 rounded-full' />
                        </div>
                    </span>
                </NavLink>
            </div>
            <div className='mt-7 border-2 border-black/20 mr-3 py-4 rounded-2xl pl-3 text-lg ml-4 ' onClick={() => setSideBar(false)}>
                <NavLink to={`/category/1`} className={({ isActive }) => isActive ? 'text-[#1b689c] font-bold' : 'bg-white'}>
                    <span className='flex items-center '>
                        <div>
                            FullStack Developing
                        </div>
                        <div className='mt-1 ml-2'>
                            <FaChevronRight className='w-5 text-black/40 rounded-full' />
                        </div>
                    </span>
                </NavLink>
            </div>
            <div className='mt-7 border-2 border-black/20 mr-3 py-4 rounded-2xl pl-3 text-lg ml-4 ' onClick={() => setSideBar(false)}>
                <NavLink to={`/category/3`} className={({ isActive }) => isActive ? 'text-[#1b689c] font-bold' : 'bg-white'}>
                    <span className='flex items-center '>
                        <div>
                            App Developing
                        </div>
                        <div className='mt-1 ml-2'>
                            <FaChevronRight className='w-5 text-black/40 rounded-full' />
                        </div>
                    </span>
                </NavLink>
            </div>
            <div className='mt-7 border-2 border-black/20 mr-3 py-4 rounded-2xl pl-3 text-lg ml-4 ' onClick={() => setSideBar(false)}>
                <NavLink to={`/category/4`} className={({ isActive }) => isActive ? 'text-[#1b689c] font-bold' : 'bg-white'}>
                    <span className='flex items-center '>
                        <div>
                            Designing & Blog Writting
                        </div>
                        <div className='mt-1 ml-2'>
                            <FaChevronRight className='w-5 text-black/40 rounded-full' />
                        </div>
                    </span>
                </NavLink>
            </div>
            <div className='mt-7 border-2 border-black/20 mr-3 py-4 rounded-2xl pl-3 text-lg ml-4 ' onClick={() => setSideBar(false)}>
                <NavLink to={`/category/2`} className={({ isActive }) => isActive ? 'text-[#1b689c] font-bold' : 'bg-white'}>
                    <span className='flex items-center '>
                        <div>
                            Software Engineering
                        </div>
                        <div className='mt-1 ml-2'>
                            <FaChevronRight className='w-5 text-black/40 rounded-full' />
                        </div>
                    </span>
                </NavLink>
            </div>
            <div className='mt-7 border-2 border-black/20 mr-3 py-4 rounded-2xl pl-3 text-lg ml-4 ' onClick={() => setSideBar(false)}>
                <NavLink to={`/category/5`} className={({ isActive }) => isActive ? 'text-[#1b689c] font-bold' : 'bg-white'}>
                    <span className='flex items-center '>
                        <div>
                            Basic To Advance PC
                        </div>
                        <div className='mt-1 ml-2'>
                            <FaChevronRight className='w-5 text-black/40 rounded-full' />
                        </div>
                    </span>
                </NavLink>
            </div>
        </section>
    );
};

export default CoursesComponentLeftSide;