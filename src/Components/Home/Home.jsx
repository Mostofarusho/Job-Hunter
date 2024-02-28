import React, { useState } from 'react';
import "./Home.css";
import { BookOpenIcon, LightBulbIcon, ShareIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useLoaderData } from 'react-router-dom';
import Job from '../Job/Job';
import JobDetails from '../JobDetails/JobDetails';
const Home = () => {
    const jobs = useLoaderData();
    const [showAllData, setShowAllData] = useState(false);
    const handleShowAllData = () => {
        setShowAllData(true);
    }
    return (
        <div className="home-container">
            {/* Main Description  */}
            <div className='description-body'>
                {/* main description  */}
                <div className="description text-left">
                    <h1 className='description-header text-5xl'>One Step Closer To Your
                        <br></br>
                        <span className='color-blue'>Dream Job</span></h1>
                    <p className='description-paragraph text-sm'>Explore 1000 of oppurtunity from my site.Both onsite and remote jobs are available in my site.I am not a job provider and I am also looking for a job Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate laudantium similique fugiat dignissimos accusantium impedit provident, numquam hic eaque nihil autem? Deserunt vel, veniam eos cumque nesciunt ullam necessitatibus hic?</p>
                    <button className='description-button'>Get Started</button>
                </div>
                <div>
                    <img src="./my-model.jpg" className='model' alt="Description of the image" />

                </div>
            </div>
            {/* Job category List  */}
            <div className="job-category">
                <h2 className='description-header text-5xl my-4'>Job Category List </h2>
                <p className='my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, tempora!</p>
                <div className='available-jobs'>
                    <div>
                        <ul className='text-left'>
                            <li><BookOpenIcon className="h-6 w-6 text-blue-500" /></li>
                            <li >Account & Finance</li>
                            <li>300 Jobs Available</li>
                        </ul>

                    </div>
                    <div>
                        <ul className='text-left'>
                            <li><LightBulbIcon className="h-6 w-6 text-blue-500" /></li>
                            <li>Creative Design</li>
                            <li>1000 Jobs Available</li>
                        </ul>

                    </div>
                    <div>
                        <ul className='text-left'>
                            <li><ShoppingBagIcon className="h-6 w-6 text-blue-500" /></li>
                            <li>Marketing and Sales</li>
                            <li>500 Jobs Available</li>
                        </ul>

                    </div>
                    <div>
                        <ul className='text-left'>
                            <li><ShareIcon className="h-6 w-6 text-blue-500" /></li>
                            <li>Engineering JObs</li>
                            <li>100 Jobs Available</li>
                        </ul>

                    </div>
                </div>
            </div>
            {/* Featured Jobs  */}
            <div className='job-featured m-y-6'>
                <h1 className='text-5xl '>Featured Jobs </h1>
                <p>Explore thousand of jobs.Its your future take it.</p>
                <div className="job-container text-left m-4 p-4 ">
                    {showAllData ? (
                        // If showAllData is true, show all data
                        jobs.map(job => <Job key={job.id} job={job}></Job>
                      
                        )
                    ) : (
                        // If showAllData is false, show only the first four items
                        jobs.slice(0, 4).map(job => <Job key={job.id} job={job}></Job>)
                    )}
                   
                </div>
                {!showAllData && (
                        // Render the button only if showAllData is false
                        <button onClick={handleShowAllData} className='showAllData-button'>See All Jobs</button>
                    )}
            </div>
        </div>

    );
};

export default Home;