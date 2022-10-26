import React, { useContext } from 'react';
import './Header.Module.css'
import { Link, NavLink } from 'react-router-dom';
import websiteLogo from '../Images/logo.jpg'
import Toggle from 'react-toggle'
import { AuthContext } from '../Firebase/UserContext';
import toast, { Toaster } from 'react-hot-toast';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user.auth.currentUser);
    const photo = user?.auth?.currentUser?.photoURL;
    const name = user?.auth?.currentUser?.displayName;
    const handleLogout = () => {
        logOut().then(() => toast.success('Logout successfully done.'))
    }
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

                    {
                        user?.uid ?
                            <span className=' mx-2 cursor-pointer' onClick={handleLogout}>Logout</span>
                            :
                            <NavLink to='/login' className={({ isActive }) => isActive ? 'active-navlink' : 'deactive-navlink'}>
                                <span className=' mx-2 '>Login</span>
                            </NavLink>

                    }



                    <input type="checkbox" className="toggle toggle-xs ml-3" />
                    {
                        user?.uid &&
                        <div title={`${name}`}>
                            {
                                photo ?
                                    <img src={photo} alt="" className='w-8 h-8 rounded-full ml-5 cursor-pointer' />
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