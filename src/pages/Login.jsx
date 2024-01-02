import React from 'react'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import ph1 from '../assets/Images/ph1.webp'

function Login() {
  return (
    <Layout>
   

    <div  className='flex max-sm:flex-col w-full min-h-[80%] px-10 max-sm:px-5 py-10'>
   <div className='w-[40%] max-sm:w-[90%]'>
   <img 
   className='m-4  rounded-md  h-[500px] max-sm:h-[300px]'
      src={ph1}

   />
   </div>
    <div className='w-[60%] max-sm:w-full m-4 '>
    <LoginForm />
    </div>
    </div>


  </Layout>
  )
}

export default Login
