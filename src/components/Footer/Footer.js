import './Footer.scss'
import { Link } from 'react-router-dom'
import linkedin from '../../assets/icons/linkedin-orange.png'
import github from '../../assets/icons/github-orange.png'
import instagram from '../../assets/icons/instagram-orange.png'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <h2 className='footer__heading'>SEAMUS NAAYKENS</h2>
                <p className='footer__copy'>Full Stack Web Developer</p>
                <p className='footer__copyright'>© Copyright 2023. Made by Seamus Naaykens</p>
            </div>
            <div className='footer__container'>
                <h2 className='footer__heading'>SOCIALS</h2>
                <div className='footer__subcontainer'>
                    <Link to={'https://www.linkedin.com/in/seamus-naaykens/'} className='footer__link'>
                        <img  className='footer__icon' src={linkedin} alt='LinkedIn' />
                    </Link>
                    <Link to={'https://github.com/SeamusNaaykens'} className='footer__link'>
                        <img className='footer__icon' src={github} alt='GitHub' />
                    </Link>
                    <Link to={'https://www.instagram.com/adventuresofthesea/'} className='footer__link'>
                        <img className='footer__icon' src={instagram} alt='Instagram' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Footer