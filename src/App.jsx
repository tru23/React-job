import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListing from './components/JobListing';
import ViewAllJobs from './components/ViewAllJobs';

import{Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';

const router=createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>}/>)
)

const App = () => {
  return (
    <>
   <Navbar/>

   <Hero/>

   <HomeCards/>
   
   <JobListing/>

   <ViewAllJobs/>
   
  
    
    </>
  )
}

export default App
