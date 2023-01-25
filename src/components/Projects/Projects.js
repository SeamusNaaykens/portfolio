import './Projects.scss'
import GrowLocal from '../../assets/images/new-gl-ss.PNG'
import portfolio from '../../assets/images/new-portfolio-screenshot.PNG'
import maclayne from '../../assets/images/maclayne-website-ss.JPG'


function Projects() {

    return (
        <div className='projects'>
            <h2 className='projects__heading'> FEATURED PROJECTS</h2>
            <div className='projects__container'>
                <a href='https://growlocal.app/' target='_blank' rel="noreferrer noopener" className='projects__link'>
                    <figure class="snip1206">
                        <img src={GrowLocal} alt='GrowLocal Thumbnail' />
                        <figcaption>
                            <h2>GrowLocal</h2>
                            <p>An application designed to enable backyard gardeners to connect and trade homegrown produce with other locals in their area.</p>
                        </figcaption>
                    </figure>
                </a>
                <a href='https://seamusnaaykens.com/' target='_blank' rel="noreferrer noopener" className='projects__link'>
                     <figure class="snip1206">
                        <img src={portfolio} alt='Portfolio Thumbnail' />
                        <figcaption>
                            <h2>Portfolio Site</h2>
                            <p>The very application you are on now! I created this to display my work and the projects I have built.</p>
                        </figcaption>
                    </figure>
                </a>
                <a  href='https://kaleidoscopic-stardust-19dc77.netlify.app/' target='_blank' rel="noreferrer noopener" className='projects__link'>
                     <figure class="snip1206">
                        <img src={maclayne} alt='Maclayne.com Thumbnail' />
                        <figcaption>
                            <h2>Maclayne Simone Artist Site</h2>
                            <p>A personal website built for a musician named Maclayne Simone.</p>
                        </figcaption>
                    </figure>
                </a>

            </div>
        </div>
    )
}
export default Projects