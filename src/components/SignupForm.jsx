import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'




const validate = values =>{

     let errors={}

    if(!values.name )
    {
        errors.name="this field is required"
    }
    if(!values.email )
    {
        errors.email="this field is required"
    }
    if(!values.phone )
    {
        errors.phone="this field is required"
    }
    if(!values.password )
    {
        errors.password="this field is required"
    }


    return errors;
}



const SignupForm = () => {
 
        const formik =useFormik({
            initialValues:{
                name: '',
                email: '',
                phone:'',
                password: ''
            },
            onSubmit: values=>{
                console.log(values);
            },
            validate
        });


        console.log(formik.touched);


  return (
    <div className='m-4'>
        <h1 className='text-center  text-gray-500 font-bold text-2xl '>Sign Up</h1>
        <form className='flex-col justify-start max-sm:w-full ' onSubmit={formik.handleSubmit}>
           <div className='w-full mt-4 mb-4'>
           <label htmlFor='name' className='w-[150px] max-sm:w-[90px]'>Name</label>
           <input type='text' id="name" name="name" className='bg-gray-100 p-1 w-[65%] border-1 border-gray-300 max-sm:w-[50vw] max-md:w-[80vw]   rounded-lg'    onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}></input>
           {  formik.touched.name && formik.errors.name? <div><p className='text-red-500 text-[16px] lg:ml-32 '>{formik.errors.name}</p></div>:null}
           </div>

          <div className="w-full  mt-4 mb-4">
          <label htmlFor='email'  className='w-[150px] max-sm:w-[90px]'>Email</label>
          <input type='text' id="email" name="email" className='bg-gray-100 p-1 w-[65%] border-1 border-gray-300 max-sm:w-[50vw] max-md:w-[80vw]   rounded-lg' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}></input>
          {  formik.touched.email && formik.errors.email? <div><p className='text-red-500 text-[16px] lg:ml-32  '>{formik.errors.email}</p></div>:null}

          </div>

          <div className="w-full mt-4 mb-4">
          <label  htmlFor='phone'  className='w-[150px] max-sm:w-[90px]'>Phone</label>
            <input type='text' id="phone" name="phone" className='bg-gray-100 p-1 w-[65%] border-1 border-gray-300 max-sm:w-[50vw] max-md:w-[80vw]   rounded-lg' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone}></input>
            {formik.touched.phone&& formik.errors.phone? <div><p className='text-red-500 text-[16px] lg:ml-32 '>{formik.errors.phone}</p></div>:null}

          </div>

       <div className="w-full mt-4 mb-4">
       <label htmlFor='password'  className='w-[150px] max-sm:w-[90px]'>Password</label>
       <input type='password' id="password" name="password" className='bg-gray-100 p-1 w-[65%] border-1 border-gray-300 max-sm:w-[50vw] max-md:w-[80vw]   rounded-lg' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}></input>
       {  formik.touched.password &&  formik.errors.password? <div><p className='text-red-500 text-[16px] lg:ml-32 '>{formik.errors.password}</p></div>:null}

       </div>
       <button type='submit' className='p-2 rounded-lg text-white mr-20 float-right bg-blue-600 h-10 w-20 place-content-center hover:bg-blue-300 hover:text-gray-900 hover:transition-colors  max-sm:h-9 '>submit</button>
        </form>
    </div>
  )
}

export default SignupForm