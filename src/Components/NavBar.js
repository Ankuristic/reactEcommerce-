import React from 'react'
import '../Components/NavBar.css'
import { IoHome } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";

const NavBar = () => {
  return (
    <>
        <nav className='navbar'>
        <div className="BuyBusy"> BuyBusy</div>
        <ul className="nav-links">
        <li><a href="#home">Home </a> <IoHome /></li>
        <li><a href="#SignIn">SignIn</a> <PiSignInBold /></li>
       
      </ul>

        </nav>
    </>
  )
}

export default NavBar