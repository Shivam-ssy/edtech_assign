import { useState,useEffect } from 'react'
import React from 'react'
import { useLocation } from 'react-router-dom'
import HomeLayout from './HomeComponent/Layout'
import { Routes, Route, Link } from 'react-router-dom';
import Explore from './HomeComponent/Explore';
import Dashboard from './HomeComponent/Dashboard';

function Home() {
  
  return (
    <main className="w-full  flex justify-center items-center h-auto md:h-[calc(100vh-80px)] relative bg-[url('/Home2.jpg')] bg-cover bg-center bg-no-repeat">

    <div className="flex  my-5 md:my-0 md:w-5/6 h-auto md:h-3/4 flex-col gap-3 bg-opacity-85 rounded-3xl py-10 bg-[#222145] px-0 md:px-20">
    <Routes>
        <Route path="dashboard" element={
          <HomeLayout children={<Dashboard/>}/>
        } />
        <Route  index path="explore" element={
          <HomeLayout children={<Explore/>}/>

        } />
      </Routes>
      {/* <div className="flex justify-center flex-col items-center text-white font-bold font-serif">
        
      </div> */}
    </div>
  </main>
  )
}

export default Home
