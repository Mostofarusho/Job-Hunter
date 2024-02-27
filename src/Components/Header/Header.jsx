import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav className='nav-container'>
            <h2 className='title'>JobHunter</h2>
            <ActiveLink to="home">Home</ActiveLink>
            <ActiveLink to="stat">Statistics</ActiveLink>
            <ActiveLink to="appliedJobs">Applied Jobs</ActiveLink>
            <ActiveLink to="blog">Blog</ActiveLink>
            <button className='nav-button'>Start Applying</button>

        </nav>
    );
};

export default Header;