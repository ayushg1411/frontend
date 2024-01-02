import React from 'react'
import ph1 from '.././assets/Images/ph1.webp'

function CardsHorizontal() {
  return (
    
   <section className='bg-slate-400 min-h-[600px] py-4 px-4 flex justify-center items-center m-5 max-sm:m-1 rounded-lg  '>
    <div className=' px-auto w-[1000px] h-64 bg-white rounded-lg flex  '>
      <img src={ph1} alt="image"
       className='w-2/5  rounded-l-lg'
      />
      <div className="flex-col p-4">
        <h1 className='text-gray-700 text-2xl font-bold text-center py-2'> Heading 1</h1>
        <p className='font-palanquin justify-center max-sm:text-[10px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nobis culpa labore possimus ullam delectus nemo? Velit eligendi, reprehenderit eos necessitatibus pariatur quisquam distinctio, voluptates expedita molestias quas ducimus animi!</p>
        <button className='bg-yellow-300 rounded-lg h-10 w-32 mt-3 hover:bg-yellow-500 max-sm:h-7 max-sm:text-[10px]'><p className='font-semibold p-2 '>Press Me</p></button>
      </div>

    </div>

   </section>

  )
}

export default CardsHorizontal
