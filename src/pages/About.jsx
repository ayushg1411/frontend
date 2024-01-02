import React from 'react'
import Layout from '../components/Layout'
import Cards from '../components/Cards'

function About() {
  return (
    <Layout>
        <div className='flex px-10 py-32 place-content-center  max-sm:flex-col '>
    <Cards/>
    <Cards/>

    </div>
    </Layout>
  )
}

export default About
