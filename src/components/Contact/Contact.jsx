import './Contact.css'
import React from 'react'
import { useForm } from '@formspree/react'

const Contact = () => {

    // using formspree.io for contact submit
    const [state, handleSubmit] = useForm('mpwarkkj')
    if (state.succeeded) {
        console.log('successful login')
    }

    return (
        <section className="contact-container">
            <div className="dialog">
                <p><span>Let's talk!</span>I'm excited to hear about your photography needs. Whether it's a portrait, event, or creative project, I'm here to help.</p>
                <p><span>Let's capture</span> something amazing together! I will try my best to deliver.</p>
            </div>
            <div className="contact-form">

                {state.succeeded ?
                    <div className="message">
                        <p>Thank you for sending a message! I will reply soon.</p>
                    </div> : null
                }

                {state.succeeded ? null :
                    <form onSubmit={handleSubmit}>
                        <h1>Contact Me</h1>
                        <input type="text" name="name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <button type="submit" disabled={state.submitting}>Send</button>
                    </form>
                }

            </div>
        </section >
    )
}

export default Contact
