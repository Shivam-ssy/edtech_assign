import React,{useState, useEffect, useContext} from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import ShowContext from '../../contextApi/Showcontext';

const HomeLayout = ({ children }) => {
    const {userData}=useContext(ShowContext)
    
    return(
        <>
                {userData &&
            <main className='w-[90vw] md:w-full h-screen min-h-fit md:h-full flex md:flex-row flex-col'>
                <div className='md:w-60 h-fit rounded-2xl pt-3 md:h-full md:border-2 items-center flex flex-col md:border-[#e06641]'>
                    <div className='w-36 h-36 rounded-full p-1 bg-[#e06641]'>

                        <img className='rounded-full bg-black p-2' src="/user-fill.svg" alt="" />
                    </div>
                    <div className='flex flex-row md:flex-col rounded-b-2xl mt-3 bg-[#222145] h-full  w-full'>
                        <NavLink  className='py-2 cursor-pointer border border-b-0 hover:bg-[#e06641] border-[#e06641] text-white font-bold text-center w-full' to="/home/explore"><span>Explore</span></NavLink>
                        <NavLink className='py-2 cursor-pointer border hover:bg-[#e06641] border-[#e06641] text-white font-bold text-center w-full' to="/home/dashboard"> <span >Dashboard</span></NavLink>
                    </div>
                </div>
                <div className='md:w-[calc(100%-15rem)] w-full md:h-full flex flex-col justify-center items-center'>
                    <span className="text-3xl">Welcome</span>
                    <span className="text-xl  text-green-400">{userData?.displayName} </span>
                    <div className='md:w-[calc(100%-15rem)] w-full  h-full md:border md:border-[#e06641] md:ml-5 mt-5'>
                        {children}
                    </div>
                </div>
            </main>}
        </>
    )
  
};

export default HomeLayout;
