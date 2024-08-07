import './Contact.css'
import React from 'react'

const Contact = () => {
    return (
        <section className="contact-container">
            <div className="dialog">
                <p><span>Let's talk!</span>I'm excited to hear about your photography needs. Whether it's a portrait, event, or creative project, I'm here to help.</p>
                <p><span>Let's capture</span> something amazing together! I will try my best to deliver.</p>
            </div>
            <div className="contact-form">
                <h1>Contact Me</h1>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                </form>
                <button type="submit">Send</button>
            </div>
        </section >
    )
}

export default Contact
