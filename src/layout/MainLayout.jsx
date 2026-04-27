import Navbar from '../components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default MainLayout
