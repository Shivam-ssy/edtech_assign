import React, { useContext } from 'react' 
import ShowContext from '../../contextApi/Showcontext'
import { Link } from 'react-router-dom'
import Card from './Card'

function Dashboard() {
  const {purchasedCourses,userData}=useContext(ShowContext)
  const purchase=purchasedCourses.filter((cources)=>cources.details.user==userData.email)
  console.log("purchase",purchasedCourses);

  return (
    <main>
    <div className='text-white text-center font-bold'>Welcome to Dashboard</div>
    <div className='md:p-5 p-1 items-center flex flex-col md:flex-row gap-5 overflow-x-auto justify-center hide-scrollbar'>

        { purchasedCourses ? purchase.map((cource,index) => (
        <Card key={index} details={cource?.details?.data?.name} price={cource?.details?.data?.price} image={cource?.details?.data?.image} isPurchased={true} />
      )):
       <Link to="/home/explore"><div className=' text-center p-5 font-bold text-lg bg-[#e06641]'>Go to Explore Cources</div></Link> 
      }

    </div>
    </main>
  )
}

export default Dashboard
