import Navbar from '../components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto sm:px-2 '>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
