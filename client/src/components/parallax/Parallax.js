import React, { useRef } from 'react';
import "./Parallax.css";
import {motion, useScroll, useTransform} from "framer-motion"

const Parallax = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref ,
        offset: ["start start" , "end start"]
    })

    const yBg = useTransform(scrollYProgress, [0,1] , ["0%" , "100%"]);
    const yText = useTransform(scrollYProgress, [0,1] , ["0%", "500%"])

  return (
    <div className='parallax w-full h-full relative flex items-center justify-center overflow-hidden' 
    style={{background: "linear-gradient(180deg, #111132, #0c0c1d)"}}
    ref={ref}>
      <motion.h1 style={{y:yText}}>What we do ?</motion.h1>
      <motion.div className='mountains bg-cover bg-bottom w-full h-full absolute'></motion.div>
      <motion.div style={{y:yBg}}className='planets bg-cover bg-bottom w-full h-full absolute'></motion.div>
      <motion.div style={{x:yBg}} className='stars bg-cover bg-bottom w-full h-full absolute'></motion.div>
    </div>
  )
}

export default Parallax
