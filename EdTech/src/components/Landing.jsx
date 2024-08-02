import React from 'react'

function Landing() {
  return (
    <>
       <main className="w-full flex justify-center items-center h-[calc(100vh-80px)] relative bg-[url('/Home2.jpg')] bg-cover bg-center bg-no-repeat">
        
          <div className='flex bg-opacity-85 rounded-3xl items-center flex-col w-full md:w-3/5 px-10 md:px-20 py-10 justify-center text-white bg-[#222145]'>
            <span className='font-bold font-serif md:text-6xl'>Welome To</span>
            <span className='font-bold font-serif text-5xl'>EdTech</span>
            <span className=' mt-5'>Dive into our comprehensive courses, led by industry experts, and discover a world where learning meets innovation. From coding and development to cutting-edge tech trends, we're here to guide you every step of the way.</span>
          </div>
       </main>
    </>
  )
}

export default Landing
