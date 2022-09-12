import React from 'react'
import Navbar from './navbar.component'

const Layout = ({children}) => {
  return (
    <>
    <Navbar />
    <div className='w-full min-h-screen' >
        {children}
    </div>
    </>
    
  )
}

export default Layout