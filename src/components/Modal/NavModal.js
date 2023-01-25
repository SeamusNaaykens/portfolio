import './NavModal.scss'
import close from '../../assets/icons/close-icon.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
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
                <NavLink to={'/'} className='nav-modal__link' onClick={toClose}>HOME</NavLink>
                <Link to='about' className='nav-modal__link' onClick={toClose}>ABOUT</Link>
                <Link to='projects' className='nav-modal__link' onClick={toClose}>PROJECTS</Link>
                <NavLink to={'resume'} className='nav-modal__link' onClick={toClose}>RESUME</NavLink>
                <Link to='contact' className='nav-modal__link' onClick={toClose}>CONTACT </Link>
            </div>
            <div className='nav-modal__icon-container'>
                <a className='nav-modal__icon-link' href='https://www.linkedin.com/in/seamus-naaykens/' target='_blank' rel="noreferrer noopener">
                    <img className='nav-modal__icon' src={linkedin} alt='LinkedIn' />
                </a>
                <a className='nav-modal__icon-link' href='https://github.com/SeamusNaaykens' target='_blank' rel="noreferrer noopener">
                    <img className='nav-modal__icon' src={github} alt='GitHub' />
                </a>
                <a className='nav-modal__icon-link' href='https://www.instagram.com/adventuresofthesea/' target='_blank' rel="noreferrer noopener">
                    <img className='nav-modal__icon' src={instagram} alt='Instagram' />
                </a>
            </div>
        </div>
    )
}
export default NavModal