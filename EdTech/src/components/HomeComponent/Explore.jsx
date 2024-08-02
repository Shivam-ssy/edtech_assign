import React, { useContext } from 'react'
import Card from './Card'
import "../../App.css"
import ShowContext from '../../contextApi/Showcontext';
function Explore() {
    const {allCourses}=useContext(ShowContext)
    console.log("alll cources",allCourses);
    
  return (
    <main>
    <div className='text-white text-center font-bold'>Explore the Cources to buy</div>
    <div className='md:p-5 p-1 items-center flex flex-col md:flex-row gap-5 overflow-x-auto hide-scrollbar'>

        {allCourses && allCourses.map((cource, index) => (
        <Card key={index} details={cource.details} price={cource.price} image={cource.image} id={cource.id}/>
      ))}

    </div>
    </main>
  )
}

export default Explore
