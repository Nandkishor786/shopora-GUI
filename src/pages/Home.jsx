import Collection from '../components/Collection'
import HeroSection from '../components/HeroSection'
import LimitedCollection from '../components/LimitedCollection'
import MostCoveted from '../components/MostCoveted'
import React from 'react'
  
const Home = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto sm:px-8">
       <HeroSection/>
       <Collection/>  
       <LimitedCollection/>
       <MostCoveted/>
    </div>
  )
} 
export default Home 
