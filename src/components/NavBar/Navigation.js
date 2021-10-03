import NavLinks from './NavLinks'
import React, {Component} from 'react'
import classes from "./NavBar.module.css"

const Navigation = () => {
    return (
    <nav className={classes.Navigation}>
    <NavLinks/>
    </nav>
    );
}
 
export default Navigation;