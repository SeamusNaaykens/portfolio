import './Header.scss'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import logo from '../../assets/icons/sn-logo.jpg'
import menu from '../../assets/icons/menu-button.png'
import Modal from 'react-modal'
import React from 'react'
import NavModal from '../Modal/NavModal'



function Header() {

    // Logic used to open and close delete modal
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }


    return (
        <div className='header'>
            <Modal
                isOpen={modalIsOpen}
                className="modal">
                {<NavModal
                    toClose={closeModal} />}
            </Modal>
            <div className='header__image-banner--1'></div>
            <div className='header__container'>
                <div className='header__subcontainer--1'>
                    <NavLink to={'/'} className='header__logo-link'>
                        <img className='header__logo' src={logo} alt='Seamus Naaykens Logo' />
                    </NavLink>
                </div>
                <div className='header__subcontainer--2'>
                    <img onClick={() => {
                        openModal()
                    }}
                        className='header__menu-button' src={menu} alt='menu button' />
                    <NavLink to={'/'} className='header__link'>HOME</NavLink>
                    <Link to='about' spy={true} smooth={true} className='header__link'>ABOUT</Link>
                    <Link to='projects'  spy={true} smooth={true}className='header__link'>PROJECTS</Link>
                    <NavLink to={'resume'} className='header__link'>RESUME</NavLink>
                    <Link to='contact' spy={true} smooth={true}  className='header__link'>CONTACT</Link>
                </div>
            </div>
            <div className='header__image-banner--2'></div>
        </div>
    )
}
export default Header