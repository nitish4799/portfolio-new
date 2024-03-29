import React from 'react';
import "../Sidebar.css"
import {motion} from "framer-motion"

const ToggleButton = ({setOpen}) => {
  return (
    <button 
    type='button'
    className='w-12 h-12 fixed top-6 left-6 bg-transparent border-none cursor-pointer'
    onClick={() => setOpen((prev)=>!prev)}>
      <svg width="23" height="23" viewBox='0 0 23 23' style={{margin: "14px", padding: "2px", marginTop: "15px"}}>
        <motion.path strokeWidth="3" stroke='black' strokeLinecap='round'
        variants={{
            closed: {d: "M 2 2.5 L 20 2.5"},
            open: {d: "M 3 16.5 L 17 2.5"}
        }}/>
        <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' d="M 2 9.423 L 20 9.423"
        variants={{
            open: {opacity:0},
            closed: {opacity:1},
        }}
        />
        <motion.path strokeWidth="3" stroke='black' strokeLinecap='round'
        variants={{
            closed: {d: "M 2 16.346 L 20 16.346"},
            open: {d: "M 3 2.5 L 17 16.346"}
        }}/>
      </svg>
    </button>
  )
}

export default ToggleButton
