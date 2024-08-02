import React, { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../BackendAsService/Services";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ShowContext from "../contextApi/Showcontext";
function NavBar() {
    const {userData}=useContext(ShowContext) ;
    const handleClick= async()=>{
      const res = await logout()
      if(res){       
        window.location.href="/"
      }
      else{
        toast.error("Error while logout please try again")
      }
    }
  return (
    <>
          <ToastContainer position="top-right" autoClose={5000} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <main className="w-full h-[80px] bg-[#16233E] flex justify-between items-center px-5 py-2">
        <div className=" flex gap-5">
          <span className="w-5 h-5 rounded-full bg-white"></span>
          <span className="w-5 h-5 rounded-full bg-white"></span>
          <span className="w-5 h-5 rounded-full bg-white"></span>
        </div>
        {userData ?
        <div className="flex gap-5">
        <Link to="/home/dashboard"> <div  className="px-5  cursor-pointer hover:bg-transparent h-fit py-2 rounded-xl font-bold bg-[#300872]">DASHBOARD</div></Link>
        <div onClick={handleClick} className="px-5  cursor-pointer hover:bg-transparent h-fit py-2 rounded-xl font-bold bg-[#300872]">Log Out</div>
        </div>
        :
        <Link to="/signin"> <div className="px-5 cursor-pointer h-fit py-2 rounded-xl font-bold bg-[#300872]">Sign In</div>
       </Link> 
      }
       
      </main>
    </>
  );
}

export default NavBar;
