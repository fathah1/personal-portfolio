import React, {Component} from 'react'
import classes from './Contact.module.css'
import { GoDash } from 'react-icons/go';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
    return (  
        <div className={classes.wholeContacts} id="contactMe">
             <div className={classes.contactForm}>

                <h1 className={classes.ContactMe} > Contact</h1> 
                <h1 className={classes.text}>Me</h1>
                <div className={classes.line}></div>
              
                



              <form action="https://formspree.io/f/xbjqbgvd" method="POST">
              <div className={classes.form}>
              
                <input id="name" type="text" placeholder="Your Name" name="name" className={classes.formItems} required/>
                <input id="email "type="email" placeholder="Your Email"  name="email" className={classes.formItems} required/>
                <textarea id="message" placeholder="Your Message" name="message" className={classes.formItems}  required></textarea>
                
    
                <button type="submit" className={ classes.formButton}>Submit</button>
              </div>
              </form>


            </div>


         

             <div className={classes.socialMedia}>
                    <h1>socials</h1>
             </div>

        </div>
    );
}
 
export default Contact;