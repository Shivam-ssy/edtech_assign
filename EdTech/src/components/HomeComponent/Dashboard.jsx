import React, { useContext } from 'react' 
import ShowContext from '../../contextApi/Showcontext'
import { Link } from 'react-router-dom'
import Card from './Card'

function Dashboard() {
  const {purchasedCourses}=useContext(ShowContext)
  console.log("purchase",purchasedCourses[0]);

  return (
    <main>
    <div className='text-white text-center font-bold'>Welcome to Dashboard</div>
    <div className='md:p-5 p-1 items-center flex flex-col md:flex-row gap-5 overflow-x-auto justify-center hide-scrollbar'>

        { purchasedCourses ? purchasedCourses.map((cource,index) => (
        <Card key={index} details={cource?.details?.details} price={cource?.details?.price} image={cource?.details?.image} isPurchased={true} />
      )):
       <Link to="/home/explore"><div className=' text-center p-5 font-bold text-lg bg-[#e06641]'>Go to Explore Cources</div></Link> 
      }

    </div>
    </main>
  )
}

export default Dashboard
