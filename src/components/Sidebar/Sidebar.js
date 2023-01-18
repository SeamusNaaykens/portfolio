import './Sidebar.scss'
import linkedin from '../../assets/icons/linkedin-orange.png'
import github from '../../assets/icons/github-orange.png'
import instagram from '../../assets/icons/instagram-orange.png'

function Sidebar() {
    return (
        <div className='sidebar'>
            <a href='https://www.linkedin.com/in/seamus-naaykens/' className='sidebar__link'>
                <img className='sidebar__icon' src={linkedin} alt='LinkedIn'/>
            </a>
            <a href='https://github.com/SeamusNaaykens' className='sidebar__link'>
                <img className='sidebar__icon' src={github} alt='GitHub'/>
            </a>
            <a href='https://www.instagram.com/adventuresofthesea/' className='sidebar__link'>
                <img className='sidebar__icon--other' src={instagram} alt='Instagram'/>
            </a>
        </div>
    )
}
export default Sidebar