import React from 'react'
import Navbar from '../components/web/navbar/Navbar'
import Footer from '../components/web/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
        
   
    </>
  )
}

export default Layout