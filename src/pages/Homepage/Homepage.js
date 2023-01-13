import './Homepage.scss'
import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

function Homepage() {
    return (
        <main>
            <About />
            <Projects />
            <Contact />
        </main>
    )
}
export default Homepage