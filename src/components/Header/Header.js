import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/sn-logo.jpg'
import menu from '../../assets/icons/menu-button.png'
import { useState } from 'react'
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
                    <Link to={'/'} className='header__logo-link'>
                        <img className='header__logo' src={logo} alt='Seamus Naaykens Logo' />
                    </Link>
                </div>
                <div className='header__subcontainer--2'>
                    <img onClick={() => {
                        openModal()
                    }}
                        className='header__menu-button' src={menu} alt='menu button' />
                    <Link to={'/'} className='header__link'>HOME</Link>
                    <a href='../components/About/About.js' className='header__link'>ABOUT</a>
                    <a className='header__link'>PROJECTS</a>
                    <Link to={'/resume'} className='header__link'>RESUME</Link>
                    <a className='header__link'>CONTACT</a>
                </div>
            </div>
            <div className='header__image-banner--2'></div>
        </div>
    )
}
export default Header