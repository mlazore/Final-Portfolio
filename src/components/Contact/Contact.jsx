import React from 'react'
import contact from "./Contact.css"

const Contact = () => {
  return (
    <div className="Title">
      <h1>Contact Me</h1>
    <div className="contact-form">
    <div className="c-right">
      <form>
        <input type="text" name="user_name" className='user' placeholder="Name"/>
        <input type="Email" name="user_email" className='user' placeholder='Email' />
        <textarea name="message" className='user' placeholder='Message'/>
        <input type="submit" value="Send" className='button'/>
      </form>
    </div>
    </div>
 </div>
  )
}

export default Contact