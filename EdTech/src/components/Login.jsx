import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {signin} from "../../BackendAsService/Services"
import { useNavigate } from 'react-router-dom';
import ShowContext from '../contextApi/Showcontext';
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const Navigate=useNavigate()
  const {setUserData}=useContext(ShowContext)
  const handleClick=async()=>{
    const res=await signin(email,password)
    console.log(res);
    if(res.user){
      setUserData(res.user)
      const data=JSON.stringify(res)
      localStorage.setItem('user',data)
      Navigate("/home/explore")
    }
    else{
      if(res.message){
        toast.warn("Invalid user credential")
      }
      else{
        toast.error("Something went wrong please try again ")
      }
    } 
    console.log(res.user)
    console.log(res.message);
  }
  return (
    <main className="w-full flex justify-center items-center h-[calc(100vh-80px)] relative bg-[url('/Home2.jpg')] bg-cover bg-center bg-no-repeat">
      <ToastContainer position="top-right" autoClose={5000} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

    <div className="flex flex-col gap-3 bg-opacity-85 rounded-3xl py-10 bg-[#222145] px-5 md:px-20">
      <div className="flex justify-center flex-col items-center text-white font-bold font-serif">
        <span className="text-3xl">Login To</span>
        <span className="text-2xl">EdTech </span>
      </div>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-80 h-10 rounded-xl py-2 px-5" type="email" name="email" placeholder="Email" id="" />
      <input value={password} onChange={(e)=>setPassword(e.target.value)} className="w-80 h-10 rounded-xl py-2 px-5" type="password" name="password" placeholder="Password" id="" />
      <Link className='text-lg px-2 text-red-500'>Forget Password?</Link>
      <input onClick={(e)=>handleClick(e)} className="text-white font-bold text-xl cursor-pointer mt-3 bg-[#16233E] w-fit px-5 py-2 rounded-xl self-center" type="submit" value="Submit" />
      <div className="text-white self-center">
          Did'N Have Account ?{" "}
          <Link className="text-blue-700 font-bold text-lg" to="/signup">
            Sign Up
          </Link>
        </div>
    </div>
  </main>
  )
}

export default Login
