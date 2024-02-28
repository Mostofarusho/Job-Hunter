import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blog from './Components/Blog/Blog.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import { fetchJobDetails } from './utils/JobDetailsLoader.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: ([
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch('products.json'),
      },
      {
        path: "/job/:jobId",
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          try {
            return await fetchJobDetails(params.jobId);
          } catch (error) {
            throw error; // Rethrow the error to be caught by the error boundary
          }
        },
      },


      {
        path: "/stat",
        element: <Statistics></Statistics>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />

  </>
)