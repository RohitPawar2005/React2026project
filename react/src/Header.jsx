import React from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className="bg-blue-200 text-white p-4 flex justify-between items-center">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4 gap-10 justify-center ">
            <img className='h-10 w-22 object-contain  ' src="IndiGo_logo_2x (1).avif" ></img>
            <li><Link to="/">Book</Link></li>
            <li><Link to="/Trips">Trips</Link></li>
            <li><Link to="/Deals">Deals and Offers</Link></li>
            <li><Link to="/Checkin">Check-in</Link></li>
            <li><Link to="/IndiGo">IndiGo BluChcd ip</Link></li>
            <li><Link to="/Tariff ">Tariff Sheet</Link></li>
            <li><Link to="/Login"><button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 ">Login</button></Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
export default Header