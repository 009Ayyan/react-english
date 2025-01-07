import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
   <>
  <Header />     {/* this assures that the header and footer will always be there on the display */}
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout