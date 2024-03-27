import React from 'react';
import "./Job.css";
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='single-jobs-container'>
            <div>
                <img src={logo} className='w-20 h-20 ' alt="LOGO" />
                <h2 className='text-3xl'>{job_title}</h2>
                <p className='text-2xl'>{company_name}</p>
                <div className='flex  justify-evenly'>
                    <p className='remote'>{remote_or_onsite}</p>
                    <p className='remote'>{job_type}</p>
                </div>
                <div className='flex justify-evenly'>
                    <div className='flex justify-evenly p-4'>
                        <span> <MapPinIcon className="h-6 w-6 text-blue-500" /></span>
                        <p>{location}</p>
                    </div>
                    <div className='flex justify-evenly p-2'>
                        <span> <CurrencyDollarIcon className="h-6 w-6 text-blue-500" /></span>
                        <p>Salary:{salary}</p>
                    </div>
                    
                </div>
                {/* <button className='details-button '>Show Details</button> */}
                <Link to={`/job/${id}`} className='details-button'>Show Details</Link>
                
            </div>
        </div>
    );
};

export default Job;