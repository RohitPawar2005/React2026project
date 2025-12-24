import React from 'react'
import './App.css'
import Footer from './Footer.jsx'
import Session from './Session.jsx'



const Header = () => {

  return (
    <>
      <header className="bg-blue-200 text-white p-4 flex justify-between items-center">
        <nav className="container mx-auto flex justify-between items-center">

          <ul className="flex space-x-4 gap-13">
            <img className='h-10 w-19 ' src="IndiGo_logo_2x (1).avif" />

            <li>Book</li>
            <li>Trips</li>
            <li>Deals and Offers</li>
            <li>Check-in</li>
            <li>IndiGo BluChcd ip</li>
            <li>Tariff Sheet</li></ul>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">Login</button>
        </nav>

      </header>
      <div className="bg-blue-100 text-center p-10 h-40 text-4xl  font-semibold">
        <h1 >Hi there, plan your journey with ease - Flights</h1>
      </div>
      <Session />
      <Footer />
    </>



  )
}

export default Header