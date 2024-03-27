import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, InboxIcon, MapIcon, MapPinIcon, PhoneIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import "./JobDetails.css"
const JobDetails = () => {
    const friendDetails = useLoaderData();
    console.log(friendDetails);

    return (
        <div className='m-5'>
            <h2 className='text-3xl font-bold'>Job Details</h2>
            {/* mother div  */}
            <div className='details-job text-left mt-5 p-5'>
                {/* description div  */}
                <div>
                    <p><span className='tagName'>Job Description: </span>
                        {friendDetails.job_description}
                    </p>

                    <p><span className='tagName'>Job Responsibility: </span>
                        {friendDetails.job_responsibility}
                    </p>
                    <p><span className='tagName'>Educational Requirements: </span>
                        {friendDetails.educational_requirements}
                    </p>
                    <p><span className='tagName'>Experiences: </span>
                        {friendDetails.experiences}
                    </p>
                </div>
                {/* cart div  */}
                <div className='text-left mt-5 p-5'>
                    <h2 className='text-2xl font-bold'>Job Details</h2>
                    <div className='flex p-2 m-3'>
                        <span> <CurrencyDollarIcon className="h-6 w-6 text-blue-500" /></span>
                        <p>Salary:{friendDetails.salary}(Per Month)</p>
                    </div>
                    <div className='flex p-2 m-3'>
                        <span> <ShoppingBagIcon className="h-6 w-6 text-blue-500" /></span>
                        <p>Job Title:{friendDetails.job_title}</p>
                    </div>
                    <h2 className='text-2xl font-bold'>Contact Information</h2>
                    <div className='flex p-2 m-3'>
                        <span> <PhoneIcon className="h-6 w-6 text-blue-500" /></span>
                        <p>Phone:{friendDetails.contact_information.phone}</p>
                    </div>
                    <div className='flex p-2 m-3'>
                        <span> <InboxIcon className="h-6 w-6 text-blue-500" /></span>
                        <p>Email:{friendDetails.contact_information.email}</p>
                    </div>
                    <div className='flex p-2 m-3'>
                        <span> <MapPinIcon className="h-6 w-6 text-blue-500" /></span>
                        <p>Phone:{friendDetails.contact_information.address}</p>
                    </div>
                    <Link to={'/home'} className='details-button'>Apply Now</Link>
                </div>
            </div>
        </div>

    );
};

export default JobDetails;
