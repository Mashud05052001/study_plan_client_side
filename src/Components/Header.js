import React from 'react';
import './Header.Module.css'
import { Link, NavLink } from 'react-router-dom';
import websiteLogo from '../Images/logo.jpg'
import Toggle from 'react-toggle'

const Header = () => {
    return (
        <section className='h-20 bg-gray-300'>
            <div className='flex justify-between items-center md:w-10/12 px-3 md:px-0 mx-auto h-full'>
                <div className='flex items-center '>
                    <img src={websiteLogo} className='w-12 rounded-full' alt="" />
                    <h1 className='font-[cursive] text-xl text-[#1b689c] font-semibold md:ml-4'><Link to='/home'>M4 Learning</Link></h1>
                </div>
                <div className='text-sm  flex items-center'>
                    <NavLink to='/home' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                        <span className=' mx-2'>Home</span>
                    </NavLink>
                    <NavLink to='/courses' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                        <span className=' mx-2 '>Courses</span>
                    </NavLink>
                    <NavLink to='/faq' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                        <span className=' mx-2 '>FAQ</span>
                    </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                        <span className=' mx-2 '>Blog</span>
                    </NavLink>


                    <input type="checkbox" className="toggle toggle-xs ml-3" />

                </div>
            </div>
        </section>
    );
};

export default Header;