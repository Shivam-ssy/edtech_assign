import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup } from "../../BackendAsService/Services";

function SignUp() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleSign=async(e)=>{
    e.preventDefault()
    console.log("started sign in");
    toast.warn("sign started")
      const response=await signup(name,email,password)
      if(response.user){
        // console.log(userData.user)
        toast.success("Register Successfully ")
      }
      else{
        if(response?.customData?._tokenResponse.code =="400" || response.code==="auth/email-already-in-use"){

          toast.warn("Email Alredy Exist")
        }else{
          toast.error("Something went wrong ")
          // console.log(response.code
          // );
        }
      }

  }
  return (
    <main className="w-full flex justify-center items-center h-[calc(100vh-80px)] relative bg-[url('/Home2.jpg')] bg-cover bg-center bg-no-repeat">
      <ToastContainer
        className="mt-14"
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex flex-col gap-3 bg-opacity-85 rounded-3xl py-10 bg-[#222145] px-5 md:px-20">
        <div className="flex justify-center flex-col items-center text-white font-bold font-serif">
          <span className="text-3xl">Register To</span>
          <span className="text-2xl">EdTech </span>
        </div>
        
       
        <form className="w-full h-full flex flex-col gap-5">
        <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-80 md:w-80 h-10 rounded-xl py-2 px-5"
          type="name"
          name="name"
          placeholder="Name"
          id="name"
          />
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-80 md:w-80 h-10 rounded-xl py-2 px-5"
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          />
        <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-80 md:w-80 h-10 rounded-xl py-2 px-5"
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          />
        <input
        onClick={(e)=>handleSign(e)}
        className="text-white cursor-pointer font-bold text-xl bg-[#16233E] w-fit px-5 py-2 rounded-xl self-center"
        type="submit"
        value="Submit"
        />
        </form>        
        <div className="text-white self-center">
          Already Have Account ?{" "}
          <Link className="text-blue-700 font-bold text-lg" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
