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
    let name = user?.auth?.currentUser?.displayName;
    if (name === null) name = 'No UserName'
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
                <section className='flex items-center'>
                    {/* profile picture showing in small mode */}
                    <div className=' lg:hidden mr-4 tooltip tooltip-bottom' data-tip={`${name}`}>
                        {
                            photo ?
                                <img src={photo} alt="...Sorry" className='w-8 h-8 rounded-full ml-5 cursor-pointer' />
                                :
                                <CgProfile className='w-8 h-8 rounded-full ml-5 cursor-pointer' />
                        }
                    </div>
                    <div className='lg:hidden text-[#1b689c]' onClick={() => setHeaderShow(!headerShow)}>
                        <Hamburger toggled={headerShow} />
                    </div>
                </section>

                <div className={`${headerShow ?
                    'text-sm absolute right-0 top-20 block opacity-100 duration-300 z-10  bg-gray-300 rounded-bl-2xl lg:static lg:flex items-center'
                    :
                    'text-sm absolute right-0 top-20 block opacity-0 lg:opacity-100 -z-10 lg:z-10 duration-300  bg-gray-300 lg:static lg:flex items-center'
                    }`}>





                    <div onClick={() => setHeaderShow(false)} className='w-36 my-5 text-xl lg:text-base lg:w-auto lg:my-0 ml-8 lg:ml-0'>
                        <NavLink to='/home' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                            <span className=' mx-2'>Home</span>
                        </NavLink>
                    </div>

                    <div onClick={() => setHeaderShow(false)} className='w-36 my-5 text-xl lg:text-base lg:w-auto lg:my-0 ml-8 lg:ml-0'> <NavLink to='/courses' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                        <span className=' mx-2 '>Courses</span>
                    </NavLink></div>

                    <div onClick={() => setHeaderShow(false)} className='w-36 my-5 text-xl lg:text-base lg:w-auto lg:my-0 ml-8 lg:ml-0'>
                        <NavLink to='/faq' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                            <span className=' mx-2 '>FAQ</span>
                        </NavLink>
                    </div>

                    <div onClick={() => setHeaderShow(false)} className='w-36 my-5 text-xl lg:text-base lg:w-auto lg:my-0 ml-8 lg:ml-0'>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                            <span className=' mx-2 '>Blog</span>
                        </NavLink>
                    </div>

                    <div onClick={() => setHeaderShow(false)} className='w-36 my-5 text-xl lg:text-base lg:w-auto lg:my-0 ml-8 lg:ml-0'>
                        {
                            user ?
                                <span className=' mx-2 cursor-pointer pl-2 lg:pl-0' onClick={handleLogout}>Logout</span>
                                :
                                <NavLink to='/login' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                                    <span className=' mx-2 '>Login</span>
                                </NavLink>
                        }
                    </div>



                    <input type="checkbox" className="toggle toggle-xs lg:ml-3  mb-5  w-8 h-5 lg:my-0 ml-12 " />
                    {
                        user?.uid &&
                        <div className='hidden lg:block tooltip tooltip-bottom' data-tip={`${name}`}>
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