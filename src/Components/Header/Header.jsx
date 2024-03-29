import React, { useState } from 'react';
import "./Header.css";
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to='/home' className='inline-flex items-center'>
                <BoltIcon className='h-6 w-6 text-blue-500' />
                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                    jobHunter
                </span>
            </Link>

            {/* Nav Items Section */}
            <ul className='items-center hidden space-x-8 lg:flex'>
                <li>
                    <NavLink
                        to='/home'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/stat'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Statistics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/appliedJobs'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Applied Jobs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/blog'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                        Blogs
                    </NavLink>
                </li>
                <li>
                    
                       <button
                       to='/blog'
                       className='navButton'
                   >
                       Start Applying
                   </button>
                    
                </li>
            </ul>
            {/* Mobile Navbar Section */}
            <div className='lg:hidden'>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3BottomRightIcon className='w-5 text-gray-600' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* Logo & Button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <Link to='/home' className='inline-flex items-center'>
                                        <BoltIcon className='h-6 w-6 text-blue-500' />
                                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                            jobHunter
                                        </span>
                                    </Link>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <XMarkIcon className='w-5 text-gray-600' />
                                    </button>
                                </div>
                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/home' className='default'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/stat'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Statistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/appliedJobs'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Applied Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/blog'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Blogs
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            to='/blog'
                                            className='navButton'
                                        >
                                            Start Applying
                                        </button>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                        
                    </div>
                )}

            </div>
        </div>
    );
};

export default Header;