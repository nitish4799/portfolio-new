import React from 'react'
import "../Sidebar.css";

const Links = () => {

    const items = ["Home" , "Projects", "Contact" , "About"]
  return (
    <div className='Links absolute w-full h-full flex flex-col items-center justify-center gap-5'>
      {items.map((item) =>(
        <a href={`#${item}`} key={item}> {item}</a>
      ))}
    </div>
  )
}

export default Links
