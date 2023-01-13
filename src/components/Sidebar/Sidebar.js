import './Sidebar.scss'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div>
            <Link>
                <img alt='LinkedIn'/>
            </Link>
            <Link>
                <img alt='GitHub'/>
            </Link>
            <Link>
                <img alt='Instagram'/>
            </Link>
        </div>
    )
}
export default Sidebar