import React, { useState } from 'react'
import contact from "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from "react";


const Contact = () => {

  const form = useRef();

  const [done, setDone] =useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fakbro8', 'template_rko77pg', form.current, '0Q0y34D6sB5C1V8sE')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="Title">
      <h1>Contact Me</h1>
    <div className="contact-form">
    <div className="c-right">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className='user' placeholder="Name"/>
        <input type="Email" name="user_email" className='user' placeholder='Email' />
        <textarea name="message" className='user' placeholder='Message'/>
        <input type="submit" value="Send" className='button'/>
        <span>{done && "Thanks for contacting me!"}</span>
      </form>
    </div>
    </div>
 </div>
  )
}

export default Contact