import React, {Component} from 'react'
import classes from "./Projects.module.css"
import Card from "./cards/Card.js"
import { FaGithub } from 'react-icons/fa'
import covidTracker from "./projectImages/covidTracker.PNG"
import calc from "./projectImages/calculator.PNG"
import form from "./projectImages/survey form.PNG"

const Projects = () => {
    return (  
        <div className={classes.whole} id="projects">
            <h1 className={classes.title}>Projects</h1>

            <h2 className={classes.subHead1}>These are some of the stuff I built ... </h2>
            <div className={classes.cardHolder}>
                <Card img={calc}
                title='React js Calculator'
                desc='A simple calculator project made using Reactjs'
                liveUrl="https://codepen.io/fathah_/full/BazKLym"
                gitHubUrl="https://codepen.io/fathah_/pen/BazKLym"/>

                <Card img={covidTracker}
                title='Covid Tracker'
                desc='Get the latest data about the covid pandemic by fetching data from an api (api.covid19api.com) and rendering them '
                liveUrl="https://fathah1.github.io/covid-tracker-project/"
                gitHubUrl="https://github.com/fathah1/covid-tracker-project"/>

              

                <Card img={form}
                title='Survery Form'
                desc='A survey form made with vanilla HTML and JS  '
                liveUrl="https://codepen.io/fathah_/full/XWXGxGp"
                gitHubUrl="https://codepen.io/fathah_/pen/XWXGxGp"/>
            </div>
            <div className={classes.subHead2} >
            <h2 >find more on my github profile     </h2> 
        <a href="http://github.com/fathah1" target= "_blank" ><FaGithub className={classes.icon}/></a>
            </div>
        </div>
    );
}
 
export default Projects;