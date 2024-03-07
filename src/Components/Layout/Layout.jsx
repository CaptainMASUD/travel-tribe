import React from 'react'
import Nav from './../Nav';
import Footer from './../Footer/Footer';
import {Outlet} from 'react-router-dom'
import '../Components.css'

function Layout() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
