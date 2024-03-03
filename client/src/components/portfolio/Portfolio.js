import React, { useRef } from 'react';
import "./Portfolio.css";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.unsplash.com/photo-1682685797898-6d7587974771?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D",
        desc : "oubvsnvis  ishfoies  sfpseo soi g soh sp gsiehf spf osfh sepog ivjn urgh do hdoigj irg r"
    },
    {
        id: 2,
        title: "Spotify",
        img: "https://images.unsplash.com/photo-1709037813912-f2b0cfa924e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D",
        desc : "oubvsnvis  ishfoies  sfpseo soi g soh sp gsiehf spf osfh sepog ivjn urgh do hdoigj irg r"
    },
    {
        id: 3,
        title: "Netflix",
        img: "https://images.unsplash.com/photo-1709082804530-d588656ade88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D",
        desc : "oubvsnvis  ishfoies  sfpseo soi g soh sp gsiehf spf osfh sepog ivjn urgh do hdoigj irg r"
    },
    {
        id: 4,
        title: "Amazon",
        img: "https://images.unsplash.com/photo-1707305313174-6bd1374ce76a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
        desc : "oubvsnvis  ishfoies  sfpseo soi g soh sp gsiehf spf osfh sepog ivjn urgh do hdoigj irg r"
    },
]

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"] 
    });

    const y = useTransform(scrollYProgress, [0,1] , [-300, 300]);


    return (
    <section >
        <div className='container flex items-center justify-center w-full h-full overflow-hidden'>
            <div className='wrapper h-full m-auto flex items-center justify-center'>
                <div className='imageContainer h-1/2' ref={ref}>
                    <img className="h-full object-cover w-full" src={item.img} alt=''/>
                </div>
                <motion.div className='textContainer2 flex flex-col' style={{y}} >
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button className='bg-orange-400 border-none p-2.5 cursor-pointer'>Learn More</button>
                </motion.div>
            </div>
        </div>
    </section>
    )
};

const Portfolio = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target: ref, offset: ["end end" , "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30.
    });

  return (
    <div className='portfolio relative' ref={ref}>
        <div className='progress sticky top-0 left-0 pt-12 text-center text-orange-400'>
            <h1>Featured Works</h1>
            <motion.div style={{scaleX: scaleX }} className='progressBar h-2.5 bg-white'></motion.div>
        </div>
      {items.map ((item) => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
