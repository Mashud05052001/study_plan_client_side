import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="grid grid-cols-2 md:grid-cols-4 footer p-10  bg-black text-white">
                <div >
                    <span className="footer-title ">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title -mb-2">Follow Us In</span>
                    <div className='flex flex-wrap'>
                        <Link className="mr-8 mt-5 "><FaFacebook className='w-6 h-6' /></Link>
                        <Link className="mr-8 mt-5 "><FaInstagram className='w-6 h-6' /></Link>
                        <Link className="mr-8 mt-5 "><FaTwitter className='w-6 h-6' /></Link>
                        <Link className="mr-8 mt-5 "><FaGithub className='w-6 h-6' /></Link>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;