import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
function Contact () {
    
    return(
        <div>
                <div className='contact'>
                <Link to='/' className="link-icons"><i className="bi bi-arrow-left icons"></i></Link>
                    <form>
                    <h1 className='contact-h'>Contact us</h1><br/>
                    <input  type="text" class="feedback-input" placeholder="Name" />
                    <input name="email" type="text" className="feedback-input" placeholder="Phone" /><br/>
                    <input name="email" type="text" className="feedback-input2" placeholder="Email" /><br/>
                    <textarea id="textarea" class="feedback-input" placeholder="Comment"></textarea><br/>
                    <button className='button-contact'>SUBMIT</button>
                    </form>
                
            </div>
            <Footer />
        </div>
    )
}

export default Contact