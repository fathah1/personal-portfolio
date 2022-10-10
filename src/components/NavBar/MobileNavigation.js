import NavLinks from './NavLinks'
import React, {Component, useState} from 'react'
import classes from "./NavBar.module.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import {motion } from 'framer-motion'



const MobileNavigation = () => {
const [open, setOpen] = useState(false);
const hamburgerIcon =  <GiHamburgerMenu className={classes.Hamburger} size="2rem" color="white" onClick={() => setOpen(!open)}/>
const closeIcon =   <AiOutlineClose className={classes.Hamburger} size="2rem" color="white" onClick={() => setOpen(!open)}/>
    return (
        <nav className={classes.MobileNavigation}>
        {open? closeIcon : hamburgerIcon}
        {open && <NavLinks/>}
        </nav>
         );
}
 
export default MobileNavigation;