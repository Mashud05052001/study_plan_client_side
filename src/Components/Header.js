import React, { useContext, useState } from 'react';
import './Header.Module.css'
import { Link, NavLink } from 'react-router-dom';
import websiteLogo from '../Images/logo.jpg'
import Toggle from 'react-toggle'
import { AuthContext } from '../Firebase/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import { CgProfile } from 'react-icons/cg';
import Spinner from './Spinner';
import { FaBars } from 'react-icons/fa';
import { Fade as Hamburger } from 'hamburger-react'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [headerShow, setHeaderShow] = useState(false);
    console.log(headerShow);
    const photo = user?.auth?.currentUser?.photoURL;
    const name = user?.auth?.currentUser?.displayName;
    const handleLogout = () => {
        logOut().then(() => toast.success('Logout successfully done.'))
    }
    return (
        <section className='h-20 bg-gray-300 select-none'>
            <div className='flex justify-between items-center md:w-10/12 px-5 md:px-0 mx-auto h-full'>
                <div className='flex items-center '>
                    <img src={websiteLogo} className='w-12 rounded-full' alt="" />
                    <h1 className='font-[cursive] text-xl text-[#1b689c] font-semibold ml-3 md:ml-4'><Link to='/home'>M4 Learning</Link></h1>
                </div>
                <div className='lg:hidden text-[#1b689c]' onClick={() => setHeaderShow(!headerShow)}>
                    <Hamburger toggled={headerShow} />
                </div>
                <div className={`${headerShow ?
                    'text-sm absolute right-0 top-20 block opacity-100 duration-200 z-10  bg-gray-300 lg:static lg:flex items-center'
                    :
                    'text-sm absolute right-0 top-20 block opacity-0 -z-10 duration-200  bg-gray-300 lg:static lg:flex items-center'}`}>
                    <div onClick={() => setHeaderShow(false)}>
                        <NavLink to='/home' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                            <span className=' mx-2'>Home</span>
                        </NavLink>
                    </div>
                    <div onClick={() => setHeaderShow(false)}> <NavLink to='/courses' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                        <span className=' mx-2 '>Courses</span>
                    </NavLink></div>
                    <div onClick={() => setHeaderShow(false)}>
                        <NavLink to='/faq' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                            <span className=' mx-2 '>FAQ</span>
                        </NavLink>
                    </div>
                    <div onClick={() => setHeaderShow(false)}>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                            <span className=' mx-2 '>Blog</span>
                        </NavLink>
                    </div>

                    <div onClick={() => setHeaderShow(false)}>
                        {
                            user ?
                                <span className=' mx-2 cursor-pointer' onClick={handleLogout}>Logout</span>
                                :
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                                    <span className=' mx-2 '>Login</span>
                                </NavLink>
                        }
                    </div>



                    <input type="checkbox" className="toggle toggle-xs ml-3" />
                    {
                        user?.uid &&
                        <div title={`${name}`}>
                            {
                                photo ?
                                    <img src={photo} alt="...Sorry" className='w-8 h-8 rounded-full ml-5 cursor-pointer' />
                                    :
                                    <CgProfile className='w-8 h-8 rounded-full ml-5 cursor-pointer' />
                            }
                        </div>
                    }

                </div>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </section>
    );
};

export default Header;