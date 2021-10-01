import React, {Component, useEffect} from 'react';
import classes from "./AboutMe.module.css"
import myPhoto  from './images/me.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
    useEffect(() =>{
        Aos.init({duration:2000});
    },[]);



    return (  
        <div className={classes.whole} id="about">
            <div data-aos="fade-right" className={classes.box}>
            <h1 className={classes.heading}>About Me</h1>
            <p className={classes.paragraphs}> 
            I am a Computer Science Student whose constantly learning 
and improving my skills daily.</p>

<p className={classes.paragraphs}>As far as I can remember I have been interested in technology 
and love the ever-growing nature of it, There’s no other industry id rather be in.</p>

<p className={classes.paragraphs}>I taught myself to Code during vacations after High School as a hobby. But this hobby has completely taken over my life and is now a passion.</p>

<p className={classes.paragraphs}>Speaking of hobbies, I also like clicking pictures every now and then 
you can find some of them here. </p>

<p className={classes.paragraphs}>I have an eye for design and enjoy the beauty in all things </p>


            </div>

            <div data-aos="fade-left"> 
            <img src={myPhoto} className={classes.myImage} />
            </div>

        </div>
    );
}
 
export default AboutMe;
