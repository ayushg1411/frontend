import React from 'react'

import Layout from '../components/Layout'
import ph1 from '../assets/Images/ph1.webp'
import Cards from '../components/Cards'
import MapCard from '../components/MapCard'
import CardsHorizontal from '../components/CardsHorizontal'
import Contact from './Contact'
function Home() {
  
  return (
  
         <Layout>
          {/* <div className=' h-screen grid place-content-center '>
          <img
        src={ph1}
        alt="Description of the image"
        // Set the desired height
   className='rounded-lg w-1/2 md:w-1/2'
        height="500"
      />

  
          </div>

          <div className='  flex py-10 flex-row place-content-center'>
          <img
        src={ph1}
        alt="Description of the image"
        // Set the desired height
      
          className='px-4  w-48 md:w-96  rounded-lg'
      // Set the desired width
        height="400"
      />
        <img
        src={ph1}
        alt="Description of the image"
        // Set the desired height
   className='px-4  w-48 md:w-1/4  rounded-lg' 
        // Set the desired width
        height="400"
      />
      
  
          </div> */}

        <section className=''>
        <div className="flex px-10 py-10 max-sm:flex-col max-sm:w-full ">
      {/* Content on the left */}
      <div className="w-1/2 p-4 max-sm:w-full">
        <h1 className="text-2xl font-bold mb-4">Welcome to the ParkMe</h1>
       <h2  className="text-xl font-semibold mb-4"> Your Hassle-Free Parking Solution</h2>
        <p className='text-justify'>
        At ParkMe, we understand the challenges of finding a convenient and secure parking space for your vehicle. Whether you're a daily commuter, weekend shopper, or event-goer, our platform is designed to make your parking experience seamless and stress-free.

        </p>
      </div>

      {/* Image on the right */}
      <div className="w-1/2 max-sm:w-full">
        <img
          src={ph1}
          alt="Description of the image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
        </section>
        
       
        <CardsHorizontal/>
  


        <div className='flex px-10 py-32 place-content-center  max-sm:flex-col '>
          <Cards/>
          <Cards/>
          <Cards/>

        </div>


        <MapCard/>

    
   </Layout>

  )
}

export default Home

