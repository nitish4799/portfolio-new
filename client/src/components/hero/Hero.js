import React from 'react'
import "./Hero.css";
import hero from "../images/hero.png";
import scroll from "../images/scroll.png";
import {motion} from "framer-motion"

const textVariants = {
    initial : {
        x:-500,
        opacity:0,
    },
    animate : {
        x:0,
        opacity:1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton : {
        opacity: 0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
};

const sliderVariants = {
    initial:{
        x:0
    },
    animate:{
        x:"-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
  return (
    <div className='hero overflow-hidden relative'>
        <div className='wrapper h-full m-auto'>
            <motion.div className='textContainer h-full flex flex-col justify-center gap-10 w-1/2' variants={textVariants}
            initial="initial" animate="animate">
                <motion.h2 className='' variants={textVariants}>NITISH AGARWAL</motion.h2>
                <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                <motion.div className='buttons' variants={textVariants}>
                    <motion.button variants={textVariants} className='p-5 bg-transparent mr-5 cursor-pointer font-light'>See the latest work</motion.button>
                    <motion.button variants={textVariants} className='p-5 bg-transparent mr-5 cursor-pointer font-light'>Contact me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" className="scrollimg" src={scroll} alt=""></motion.img>
            </motion.div>
        </div>

        <motion.div className='slidingTextContainer absolute whitespace-nowrap w-1/2 font-bold' variants={sliderVariants} initial="initial" animate="animate">
            Developer Designer Photographer
        </motion.div>


        <div className='imageContainer h-full absolute top-0 right-0 '>
            <img className='h-full w-full' src={hero} alt=''></img>
        </div>
    </div>
  )
}

export default Hero
