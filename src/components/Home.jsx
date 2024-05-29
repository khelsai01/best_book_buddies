import React from 'react'
import Navbar from './Navbar'
import Header1 from './Header1'
import MiddleCard from './MiddleCard'
import KeyFeatures from './KeyFeatures'
import Beautiful from './Beautiful'



const Home = () => {
  return (
    <div className='font-[Poppins]'>
      <Navbar />
      <Header1 />
      <MiddleCard />
      <KeyFeatures />
      <Beautiful />
    </div>
  )
}

export default Home
