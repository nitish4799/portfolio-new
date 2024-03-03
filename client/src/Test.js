import React from 'react';
import { useState } from 'react';
import "./Test.css";
import {motion} from "framer-motion"



const Test = () => {

    const variants ={
        visible : (i) => ({
        opacity:1, x:100 ,  transition:{delay: i*0.3}
    }),
        hidden : { opacity:0},
      };
    
    const [open, setOpen] = useState(false);

    const items = ["item1", "item2", "item3" , "item4"];

  return (
    <div className='course h-screen flex items-center justify-center'>
        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {items.map((item, i) => (
                <motion.li variants={variants} key={item} custom={i}>{item}</motion.li>
            ))}
        </motion.ul>
    </div>
  )
}

export default Test
