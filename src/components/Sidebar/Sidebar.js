import './Sidebar.scss'
import { Link } from 'react-router-dom'
import linkedin from '../../assets/icons/linkedin-orange.png'
import github from '../../assets/icons/github-orange.png'
import instagram from '../../assets/icons/instagram-orange.png'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to={'https://www.linkedin.com/in/seamus-naaykens/'} className='sidebar__link'>
                <img className='sidebar__icon' src={linkedin} alt='LinkedIn'/>
            </Link>
            <Link to={'https://github.com/SeamusNaaykens'} className='sidebar__link'>
                <img className='sidebar__icon' src={github} alt='GitHub'/>
            </Link>
            <Link to={'https://www.instagram.com/adventuresofthesea/'} className='sidebar__link'>
                <img className='sidebar__icon--other' src={instagram} alt='Instagram'/>
            </Link>
        </div>
    )
}
export default Sidebar