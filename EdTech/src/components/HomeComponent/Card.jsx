import React from 'react'
import { useNavigate } from 'react-router-dom'
function Card({details="name of the cource",price=0.0,image="/home.jpg",id,isPurchased=false}) {
  const params = new URLSearchParams({ Param: id });

  const navigate=useNavigate()
  return (
    <main className='w-44 h-60 rounded-xl bg-[#222145] flex-none'>
        <div className='w-full h-full flex flex-col'>
        <img className='w-full h-1/2 rounded-xl' src={image} alt="" />
        <span className='text-white px-2 mt-1'>{details}</span>
        <span className='text-green-500 px-2'>Price: ${price}</span>
      {!isPurchased?
      <div onClick={()=>navigate(`/payment?${params.toString()}`)} className='bg-[#e06641] cursor-pointer text-white text-lg font-bold hover:bg-black px-5 py-1 w-fit rounded-lg self-end mt-3 mr-3'>Buy</div>
      :
      <div className='bg-[#e06641] cursor-pointer text-white text-lg font-bold hover:bg-black px-5 py-1 w-fit rounded-lg self-end mt-3 mr-3'>Go to Cource</div>
    }  
        </div>
    </main>
  )
}

export default Card
