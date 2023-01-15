import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/new-logo.jpg'
import menu from '../../assets/icons/menu-button.png'

function Header() {
    return (
        <div className='header'>
            <div className='header__image-banner--1'></div>
            <div className='header__container'>
                <div className='header__subcontainer--1'>
                    <Link className='header__logo-link'>
                        <img className='header__logo' src={logo} alt='Seamus Naaykens Logo' />
                    </Link>
                </div>
                <div className='header__subcontainer--2'>
                    <img className='header__menu-button' src={menu} alt='menu button' />
                    <Link className='header__link'>HOME</Link>
                    <Link className='header__link'>ABOUT</Link>
                    <Link className='header__link'>PROJECTS</Link>
                    <Link className='header__link'>RESUME</Link>
                    <Link className='header__link'>CONTACT</Link>
                </div>
            </div>
            <div className='header__image-banner--2'></div>
        </div>
    )
}
export default Header