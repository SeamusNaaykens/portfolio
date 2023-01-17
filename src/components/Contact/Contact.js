import './Contact.scss'
import linkedin from '../../assets/icons/linkedin-orange.png'
import github from '../../assets/icons/github-orange.png'
import instagram from '../../assets/icons/instagram-orange.png'

function Contact() {
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
            <form className='contact__form'>
                <h3 className='contact__heading'>SEND ME AN EMAIL</h3>
                <div className='contact__form-input-container'>
                    <h4 className='contact__form-heading'>NAME</h4>
                    <input className='contact__form-input'></input>
                </div>
                <div className='contact__form-input-container'>
                    <h4 className='contact__form-heading'>EMAIL</h4>
                    <input className='contact__form-input'></input>
                </div>
                <div className='contact__form-input-container'>
                    <h4 className='contact__form-heading'>MESSAGE</h4>
                    <input className='contact__form-input--message'></input>
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