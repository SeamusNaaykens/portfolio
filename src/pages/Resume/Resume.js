import './Resume.scss'
import html5 from '../../assets/icons/html-5.png'
import css from '../../assets/icons/css.png'
import sass from '../../assets/icons/sass.png'
import javascript from '../../assets/icons/javascript.png'
import react from '../../assets/icons/react.png'
import node from '../../assets/icons/nodejs.png'
import express from '../../assets/icons/express-js.png'
import knex from '../../assets/icons/knex.png'
import mysql from '../../assets/icons/mysql.png'
import GH from '../../assets/icons/github.png'
import postman from '../../assets/icons/postman.png'
import netlify from '../../assets/icons/netlify.png'
import heroku from '../../assets/icons/heroku.png'

function Resume() {
    return (
        <main className='resume'>
            <h1 className='resume__heading'>TECH THAT I USE</h1>
            <div className='resume__container'>
                <h2 className='resume__container-heading'>FRONTEND</h2>
                <p className='resume__copy'>These are, the tech I use for building frontend applications</p>
                <div className='resume__subcontainer'>
                    <img className='resume__icon--html' src={html5} alt=' html 5'></img>
                    <img className='resume__icon' src={css} alt='css'></img>
                    <img className='resume__icon' src={sass} alt='sass compiler'></img>
                    <img className='resume__icon' src={javascript} alt='javascript'></img>
                    <img className='resume__icon--react' src={react} alt='react'></img>
                </div>
            </div>
            <div className='resume__container'>
                <h2 className='resume__container-heading'>BACKEND</h2>
                <p className='resume__copy'>These are, the tech I use for building backend applications</p>
                <div className='resume__subcontainer'>
                    <img className='resume__icon' src={node} alt=' node.js'></img>
                    <img className='resume__icon--express' src={express} alt=' express.js'></img>
                    <img className='resume__icon--knex' src={knex} alt=' knex.js'></img>
                    <img className='resume__icon' src={mysql} alt=' mySQL'></img>
                </div>
            </div>
            <div className='resume__container'>
                <h2 className='resume__container-heading'>AND MORE!</h2>
                <p className='resume__copy'>This is the other tech I use for building out full stack applications</p>
                <div className='resume__subcontainer'>
                    <img className='resume__icon' src={GH} alt='GitHub'></img>
                    <img className='resume__icon--postman' src={postman} alt='Postman'></img>
                    <img className='resume__icon--netlify' src={netlify} alt='netlify'></img>
                    <img className='resume__icon' src={heroku} alt=' heroku'></img>
                </div>
            </div>
            <h2 className='resume__education-heading'>EDUCATION</h2>
            <div className='resume__education-container'>
                <div>
                    <h3 className='resume__education-title'>BrainStation | Diploma, Web Development </h3>
                    <p className='resume__education-date'>SEPT 2022 - DEC 2022, ONLINE</p>
                </div>
                <div>
                    <h3 className='resume__education-title'>Southern Alberta Institute of Technology (SAIT) | Diploma, Hospitality Management </h3>
                    <p className='resume__education-date'>AUG 2015 - MAY 2017, CALGARY, AB</p>
                </div>
            </div>
            <button className='download-button'>
                <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">DOWNLOAD RESUME</span>
            </button>
        </main>
    )
}
export default Resume