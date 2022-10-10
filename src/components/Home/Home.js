import NavBar from "../NavBar/NavBar";
import classes from "./Home.module.css";
import { CgArrowLongDown } from 'react-icons/cg';
import Typical from "react-typical";
import React, {Component} from 'react';





const Home = () => {
    




    return (
        <div className={classes.whole} id="home"> 
            <NavBar/>
            <div className={classes.Home}>
            <div className={classes.Container}>
            <h1 className={classes.Hello} > Hey There,<span> I'm</span></h1>
                <h1 className={classes.Name}>Muhammed Fathah Munawar</h1>
                <h1 className={classes.Hobbies}><Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Full Stack Engineer',
                    1000,
                    'UI/UX Designer',
                    1000,
                    'Tech Enthusiast',
                    1000,
                    'Computer Science Student',
                    1000,
                    'Programmer',
                    1000,
                    
                ]}
                /></h1>
                <h1  className={classes.arrow}><CgArrowLongDown/></h1> 
            </div>
            </div>

        </div>
      );
}
 
export default Home;