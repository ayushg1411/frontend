import React from 'react'
import map from '../assets/Images/map.jpg'

function MapCard() {
  return (
    <div>
       <section className=' min-h-[700px] py-4 px-4 flex justify-center   '>
    <div className=' px-auto w-full h-64 max-sm:h-auto bg-white rounded-lg flex max-sm:flex-col  '>
     
      <div className="flex-col w-[45%] max-sm:w-full p-4">
        <h1 className='text-gray-700 text-2xl font-bold  py-2'> Find your way to the parking easily</h1>
        <p className='font-palanquin justify-center p-4 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nobis culpa labore possimus ullam delectus nemo? Velit eligendi, reprehenderit eos necessitatibus pariatur quisquam distinctio, voluptates expedita molestias quas ducimus animi!</p>

        <h1 className='text-gray-700 text-2xl font-bold  py-2'> Get Multiple Parking Suggestion at Once</h1>
        <p className='font-palanquin justify-center p-4 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nobis culpa labore possimus ullam delectus nemo? Velit eligendi, reprehenderit eos necessitatibus pariatur quisquam distinctio, voluptates expedita molestias quas ducimus animi!</p>
      </div>
      <img src={map} alt="image"
       className='w-[55%] h-[600px] max-sm:w-full max-sm:h-auto rounded-l-lg'
      />

    </div>

   </section>
    </div>
  )
}

export default MapCard
