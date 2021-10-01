import React, {Component} from 'react';
import classes from "./Card.module.css";


function Card (props)  {
    return(
  
        <div className={classes.card}>
         <a href={props.liveUrl} target= "_blank" className={classes.normal}>
          <img src={props.img} />
          <div className={classes.cardBody}>
            <div  className={classes.a}>
              <h2>{props.title}</h2>
              <p>{props.desc}</p>
            </div>

            <div  className={classes.b}>
              <a href={props.liveUrl} target= "_blank" className={classes.links}>Live</a>
              <a href={props.gitHubUrl} target= "_blank" className={classes.links}>Code</a>
            </div>
          </div>
          </a>
        </div>
      
    
    )
}

export default Card;