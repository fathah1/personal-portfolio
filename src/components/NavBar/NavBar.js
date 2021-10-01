import classes from './NavBar.module.css'
import React, {Component} from 'react'


const NavBar = () => {
    return (  
        <div className={classes.NavBar} >
         
            <nav>
                <ul>
                    <li className="logo">
                        <a href="/#home">fathah</a>
                    </li>
                    <li>
                        <a href="#about" className="normalLink">About Me</a>
                    </li>
                    <li>
                        <a href="/#skills" className="normalLink">Skills</a>
                    </li>
                    <li>
                        <a href="/#projects" className="normalLink" > Projects</a>
                    </li>
                    <li>
                        <a href="/#contactMe" className="normalLink" >Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;

