import React from 'react'
import './../css/lib/animate/animate.min.css'
import './../css/lib/owlcarousel/assets/owl.carousel.min.css'
import './../css/bootstrap.min.css'
import './../css/style.css'
import NavBar from './NavBar'

export default function Master({ children }) {
    return (
        <div className='container-xxl bg-white p-0'>
            <div className="container-fluid nav-bar bg-transparent"></div>
            <NavBar />
            {children}
        </div>
    )
}






