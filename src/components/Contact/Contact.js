import React, {Component} from 'react'
import classes from './Contact.module.css'
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram  } from 'react-icons/ai';
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
                    <h1 className={classes.MySocials}>My Socials</h1>

              <div className={classes.emailContainer}>
                  <HiOutlineMail className={classes.emailLogo}/>
                  <h1 className={classes.myEmail}>Fathah1@gmail.com</h1>
              </div>


              <div className={classes.socialMediaContainer}>
                  
                <div className={classes.socialMediaIconsContainer}>
                <a href=" https://twitter.com/__fathah__" target="_blank"><AiFillTwitterCircle /></a>
                <a href=" https://www.linkedin.com/in/muhammedfathah/" target="_blank"><AiFillLinkedin/></a>
                <a href=" https://www.instagram.com/__fathah__/" target="_blank">< AiFillInstagram /></a>
                </div>



              </div>

            
             </div>

        </div>
    );
}
 
export default Contact;