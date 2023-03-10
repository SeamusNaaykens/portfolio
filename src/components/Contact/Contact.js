import './Contact.scss'
import linkedin from '../../assets/icons/linkedin-orange.png'
import github from '../../assets/icons/github-orange.png'
import instagram from '../../assets/icons/instagram-orange.png'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function Contact() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_7q6tkba', 'template_7i1zjmc', form.current, 'seaV_v1WnYf8qtHhT')
            .then((result) => {
                // show the user a success message
                alert('Email sent successfully. Thank you!')
            }, (error) => {
                // show the user an error
                alert('Email could not be sent, please try again.')
            });

        e.target.reset();
    };


    return (
        <section className='contact'>
            <div className='contact__content'>
                <div className='contact__container'>
                    <h2 className='contact__heading'>CONTACT</h2>
                    <p className='contact__copy'>Get in touch via social media or by email.</p>
                </div>
                <div className='contact__container--2'>
                    <a href='https://www.linkedin.com/in/seamus-naaykens/'>
                        <div className='contact__link-container'>
                            <img className='contact__icon' src={linkedin} alt='LinkedIn' />
                            <p className='contact__link-name'>LinkedIn</p>
                        </div>
                    </a>
                    <a href='https://github.com/SeamusNaaykens'>
                        <div className='contact__link-container'>
                            <img className='contact__icon' src={github} alt='GitHub' />
                            <p className='contact__link-name'>GitHub</p>
                        </div>
                    </a>
                    <a href='https://www.instagram.com/adventuresofthesea/'>
                        <div className='contact__link-container'>
                            <img className='contact__icon' src={instagram} alt='Instagram' />
                            <p className='contact__link-name'>Instagram</p>
                        </div>
                    </a>
                </div>
            </div>
            <form className='contact__form' ref={form} onSubmit={sendEmail}>
                <h3 className='contact__heading'>SEND ME AN EMAIL</h3>
                <div className='contact__form-input-container'>
                    <h4 className='contact__form-heading'  >NAME</h4>
                    <input className='contact__form-input' id='from_name' name='from_name'></input>
                </div>
                <div className='contact__form-input-container'>
                    <h4 className='contact__form-heading' >EMAIL</h4>
                    <input className='contact__form-input' id='reply_to' name='reply_to'></input>
                </div>
                <div className='contact__form-input-container'>
                    <h4 className='contact__form-heading' >MESSAGE</h4>
                    <textarea className='contact__form-input--message' id='message' name='message'></textarea>
                </div>
                <button className='email-button'>
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">SEND EMAIL</span>
                </button>
            </form>
        </section>
    )
}
export default Contact