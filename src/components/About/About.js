import './About.scss'
import Sidebar from '../Sidebar/Sidebar'
import AMT from '../SVG-Animations/NameAMT'
import avatar from '../../assets/images/seamus-pic2.jpg'


function About() {
    return (
        <section className='about'>
            <div className='about__container'>
                <div className='about__subcontainer'>
                    <p className='about__intro-copy'>Hi I'm</p>
                    <AMT />
                    <div className='about__image-container'>
                        <p className='about__copy'> I am Full Stack Web Developer based in Calgary, AB Canada. I deeply enjoy the creative side of web development and the satisfaction of making applications which make life a little bit easier. Outside of coding my biggest love is anything natural, I am an avid birder and photographer with a passion for contributing to the preservation of our planet. Please enjoy my portfolio and feel free to reach out to me if you have a project which suits my experience background!</p>
                        <img className='about__avatar' src={avatar} alt='cartoon portrait' />
                    </div>
                </div>
                <Sidebar className='about__sidebar' />
            </div>
        </section>
    )
}
export default About