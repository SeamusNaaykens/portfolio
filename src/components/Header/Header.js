import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <div>
                <Link>
                    <img alt='Seamus Naaykens Logo'/>
                </Link>
            </div>
            <div>
                <Link>HOME</Link>
                <Link>ABOUT</Link>
                <Link>PROJECTS</Link>
                <Link>RESUME</Link>
                <Link>CONTACT</Link>
            </div>
        </div>
    )
}
export default Header