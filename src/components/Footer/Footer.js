import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div>
                <h2>SEAMUS NAAYKENS</h2>
                <p></p>
            </div>
            <div>
                <h2>SOCIALS</h2>
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
        </div>
    )
}
export default Footer