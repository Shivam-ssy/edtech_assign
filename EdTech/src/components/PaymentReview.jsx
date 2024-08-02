import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StripeCheckout from "react-stripe-checkout"
import { useLocation } from "react-router-dom";
import ShowContext from "../contextApi/Showcontext";
import { write_to_database } from "../../BackendAsService/Services";
import { useNavigate } from "react-router-dom";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function PaymentReview() {
  const navigate=useNavigate()
  const {allCourses,isLoading}=useContext(ShowContext)

  const query = useQuery();
  const paramValue = query.get("Param");
  const data=allCourses.filter((cource)=>cource.id==paramValue)
  console.log(data[0]?.details);
  
  
  const key=import.meta.env.VITE_STRIPE_PUB_KEY
  const base=import.meta.env.VITE_Backend_url
    const value={
        "courceName":"Explore the AI",
        "price":"100"
    }
    
    const [finalPrice,setFinalPrice]=useState(Number(value.price))
    const [coupon,setCoupon]=useState("")
    const [checked,setChecked]=useState(false)
    // this can also be fetch by the server by sending an call 
    const [product,setProduct]=useState({
      name:data[0]?.details,
       price:data[0]?.price,
       image:data[0]?.image
    })
  //   if(!isLoading)
  //  { setFinalPrice((prevProduct)=>({
  //     ...prevProduct,
  //     name:data[0]?.details,
  //     price:data[0]?.price
  //   }))}
  
    const handleCheck=()=>{
            const check=import.meta.env.VITE_coupons
            if(!checked){

                if (coupon===check){
                    setChecked(true)
                    setProduct((prevProduct) => ({
                      ...prevProduct,
                      price: product.price-10,
                    }));
                    toast.success("Successfully applied")
                }
                else{
                    toast.error("Coupon do not match")
                }
            }
            else{
                toast.warn("Aready applied")
            }
    }
    const handleClick= async(token)=>{
      const body={
        token,
        product,
      }
      const headers={
        "Content-type":"application/json"
      }
      return fetch(`${base}/payment`,{
        method:"POST",
        headers,
        body:JSON.stringify(body)
      }).then(res=>{
        console.log("RESPONSE",res)
        if(res.ok){
          // console.log("ok");
         write_to_database("/purchase",data[0])
         navigate("/home/dashboard")
          
        }
      }).catch(error=>console.log(error))
        
    }
  return (
    
    <main className="w-full  flex justify-center items-center h-[calc(100vh-80px)] relative bg-[url('/Home2.jpg')] bg-cover bg-center bg-no-repeat">
                  <ToastContainer className="mt-[80px]" position="top-right" autoClose={5000} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <div className="flex flex-col text-white gap-3 bg-opacity-85 rounded-3xl py-3 md:py-10 bg-[#222145] px-5 md:px-20">
        <h3 className="text-2xl text-center">Edtech</h3>
        <img className="w-52 h-40 self-center" src={product.image} alt="" /> 
        {/* it can be dynamic when getting with database */}
       
          <div className="flex flex-col gap-3 bg-opacity-85 rounded-3xl">
            <div className="flex flex-col">
              <label htmlFor="courceName">Cource :</label>
              <input value={product.name} disabled className="w-80 h-10  rounded-xl py-2 px-5" type="text"  name="cource" id="courceName" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Price">Price :$</label>
              <input value={product.price} disabled className="w-80 h-10  rounded-xl py-2 px-5" type="text"  name="price" id="Price" />
            </div>
            <div className="flex flex-col">
              <label  htmlFor="coupon">Apply coupon :</label>
            <div className="flex justify-between">
               <input value={coupon} onChange={(e)=>setCoupon(e.target.value)} className="w-40 text-black h-10 rounded-xl py-2 px-5" type="text"  name="coupon" id="coupon" />
                <div onClick={handleCheck} className="font-bold text-green-500 cursor-pointer py-2">Check</div>
            </div>
            </div> 
            {/* <input onClick={(e)=>handleClick(e)} 
            className="text-white font-bold text-xl cursor-pointer mt-3 bg-[#16233E] w-fit px-5 py-2 rounded-xl self-center" type="submit" value="Continue Your Payment" /> */}
            <StripeCheckout
            stripeKey={key}
            token={handleClick}
            name={product.name}
            image={product.image}
            amount={product.price*100}
            
            >
            <button 
            className="text-white font-bold text-xl cursor-pointer mt-3 bg-[#16233E] w-fit px-5 py-2 rounded-xl self-center"> Continue to Pament</button>
            </StripeCheckout>
          </div>
      </div>
    </main>
  );
}

export default PaymentReview;
