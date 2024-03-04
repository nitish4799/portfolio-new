import React from 'react';
import "./Navbar.css";
import logo from "../images/logo.png"
import linkedin from "../images/Linkedin.png"
import gtihub from "../images/GitHub.png";
import Email from "../images/Email.png";
import {motion} from "framer-motion";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Slider */}
      <Sidebar/>

      <div className='wrapper flex items-center justify-between h-full p-5'>
        <motion.img 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}} 
        className='nitish-logo ml-12 pl-5' 
        src={logo}></motion.img>
        <div className='social flex' >
            <a href='/'><motion.img initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}} src={linkedin}></motion.img></a>
            <a href='/'><motion.img initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}} src={gtihub}></motion.img></a>
            <a href='/'><motion.img initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}} src={Email}></motion.img></a>
        </div>
      </div>

    </div>
  )
}

export default Navbar
