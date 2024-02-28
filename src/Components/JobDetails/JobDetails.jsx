import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const friendDetails=useLoaderData();
    console.log(friendDetails);

    return (
        <div>
         <h2>Hello</h2>
         <h2>{friendDetails.id}</h2>
         <h2>{friendDetails.company_name}</h2>
        </div>
    );
};

export default JobDetails;
