import './About.scss'
import Sidebar from '../Sidebar/Sidebar'

function About() {
    return (
        <section className='about'>
            <Sidebar className='about__sidebar' />
            <div className='about__container'>
                <div className='about__subcontainer'>
                    <p className='about__intro-copy'>Hi I'm</p>
                    <h1 className='about__heading'>SEAMUS NAAYKENS</h1>
                    <p className='about__copy'>Full Stack Web Developer</p>
                    <img />
                </div>
            </div>
        </section>
    )
}
export default About