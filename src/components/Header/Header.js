import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='header__container--1'>
                <Link className='header__logo-link'>
                    <img alt='Seamus Naaykens Logo'/>
                </Link>
            </div>
            <div className='header__container--2'>
                <Link className='header__link'>HOME</Link>
                <Link className='header__link'>ABOUT</Link>
                <Link className='header__link'>PROJECTS</Link>
                <Link className='header__link'>RESUME</Link>
                <Link className='header__link'>CONTACT</Link>
            </div>
        </div>
    )
}
export default Header