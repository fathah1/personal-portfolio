import React, {Component} from 'react'
import classes from './Skills.module.css'
import { FaHtml5,FaCss3,FaReact,FaSass,FaNodeJs,FaGitAlt,FaGithub,FaFigma } from 'react-icons/fa'
import {SiMongodb,SiMysql, SiJavascript,SiPython,SiJava,SiAdobepremiere,SiAdobelightroomcc} from 'react-icons/si';;


const Skills = () => {
    return (
        <div className={classes.whole} id="skills">
            <div >
            <h1 className={classes.title}>Skills</h1>
            </div>

            <div className={classes.skillsContainer}>

                <div className={classes.skillsBox}>
                    <h1 className={classes.sectionNames}>Front End </h1>
                    <FaHtml5  title="HTML5" className={classes.skillscons}/>
                    <FaCss3 title="CSS3" className={classes.skillscons}/>
                    <FaReact title="Reactjs" className={classes.skillscons}/>
                    <FaSass title="sass" className={classes.skillscons}/>

                </div>

                <div className={classes.skillsBox }>
                    <h1 className={classes.sectionNames}>Back End</h1>
                    <FaNodeJs title="nodejs" className={classes.skillscons}/>
                    <SiMongodb title="mongodb" className={classes.skillscons}/>
                    <SiMysql title="MySQl" className={classes.skillscons}/>
                </div>

                <div className={classes.skillsBox }>
                    <h1 className={classes.sectionNames}>Languages</h1>   
                    <SiJavascript title="JavaScript" className={classes.skillscons}/>
                    <SiPython title="Python" className={classes.skillscons}/>
                    <SiJava title="Java" className={classes.skillscons}/>
                </div>

                <div className={classes.skillsBox }>
                    <h1 className={classes.sectionNames}>Others</h1>
                    <FaFigma title="Figma" className={classes.skillscons}/>
                    <SiAdobepremiere title="Premiere Pro" className={classes.skillscons}/>
                    <SiAdobelightroomcc title="Light room" className={classes.skillscons}/>
                    <FaGitAlt title="git" className={classes.skillscons}/>
                    <FaGithub title="gitHub" className={classes.skillscons}/>
                </div>


            </div>


        </div>
      );
}
 
export default Skills;