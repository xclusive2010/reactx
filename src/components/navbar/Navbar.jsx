import React from 'react'
import "./navbar.css"
import {RiMenu3Line, RiCloseLin} from "react-icons";
import logo from "../../assets/logo.svg"


const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='gpt3__navbar-links_container'>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar