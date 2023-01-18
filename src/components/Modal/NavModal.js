import './NavModal.scss'
import close from '../../assets/icons/close-icon.png'
import { Link } from 'react-router-dom'
import linkedin from '../../assets/icons/linkedin-orange.png'
import github from '../../assets/icons/github-orange.png'
import instagram from '../../assets/icons/instagram-orange.png'

function NavModal({ toClose }) {
    return (
        <div className='nav-modal'>
            <div className='nav-modal__close-container'>
                <img className='nav-modal__close-icon' src={close} alt='orange close' onClick={toClose} />
            </div>
            <div className='nav-modal__link-container'>
                <Link to={'/'} className='nav-modal__link' >HOME</Link>
                <a href='' className='nav-modal__link' >ABOUT</a>
                <a href='' className='nav-modal__link'>PROJECTS</a>
                <Link to={'/resume'} className='nav-modal__link'>RESUME</Link>
                <a href='' className='nav-modal__link'>CONTACT</a>
            </div>
            <div className='nav-modal__icon-container'>
                <a className='nav-modal__icon-link' href='https://www.linkedin.com/in/seamus-naaykens/'>
                    <img className='nav-modal__icon' src={linkedin} alt='LinkedIn' />
                </a>
                <a className='nav-modal__icon-link' href='https://github.com/SeamusNaaykens'>
                    <img className='nav-modal__icon' src={github} alt='GitHub' />
                </a>
                <a className='nav-modal__icon-link' href='https://www.instagram.com/adventuresofthesea/'>
                    <img className='nav-modal__icon' src={instagram} alt='Instagram' />
                </a>
            </div>
        </div>
    )
}
export default NavModal