import React from 'react'
import Navbar from '../components/dashboard/navbar/Navbar'
import Footer from '../components/dashboard/footer/Footer'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>

    <Footer/>
    </>
  )
}

export default DashboardLayout