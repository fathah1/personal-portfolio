import React, {Component} from 'react'
import {motion } from 'framer-motion'
const NavLinks = (props) => {



        const animateFrom = {opacity:0, y:-40}
        const animateTo ={opacity:1,y:0}

    return ( 

        <ul>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.05}}
        onClick={() => props.isMobile && props.closeMobileMenu() } className="logo">
            <a href="/#home">fathah</a>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.10}}
        onClick={() => props.isMobile && props.closeMobileMenu() }>
            <a href="#about" className="normalLink">About Me</a>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.15}}
        onClick={() => props.isMobile && props.closeMobileMenu() }>
            <a href="/#skills" className="normalLink">Skills</a>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.20}}
        onClick={() => props.isMobile && props.closeMobileMenu() }>
            <a href="/#projects" className="normalLink" > Projects</a>
        </motion.li>
        <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.25}}
        onClick={() => props.isMobile && props.closeMobileMenu() }>
            <a href="/#contactMe" className="normalLink" >Contact Me</a>
        </motion.li>
    </ul>
     );
}
 
export default NavLinks;