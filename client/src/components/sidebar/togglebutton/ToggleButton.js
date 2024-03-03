import React from 'react';
import "../Sidebar.css"

const ToggleButton = ({setOpen}) => {
  return (
    <button 
    type='button'
    className='w-12 h-12 fixed top-6 left-6 bg-transparent border-none cursor-pointer'
    onClick={() => setOpen((prev)=>!prev)}>
      Button
    </button>
  )
}

export default ToggleButton
