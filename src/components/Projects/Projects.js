import './Projects.scss'
import GrowLocal from '../../assets/images/GrowLocal-screenshot.GIF'
import Placeholder from '../../assets/images/placeholder.png'

function Projects() {

    return (
        <div className='projects'>
            <h2 className='projects__heading'> FEATURED PROJECTS</h2>
            <div className='projects__container'>
                <a href='https://growlocal.app/' className='projects__link'>
                    <figure class="snip1206">
                        <img src={GrowLocal} alt='GrowLocal Thumbnail' />
                        <figcaption>
                            <h2>GrowLocal</h2>
                            <p>An application designed to enable backyard gardeners to connect and trade with other locals in their area.</p>
                        </figcaption>
                        {/* <a href="#"></a> */}
                    </figure>
                </a>
                <a href='https://growlocal.app/' className='projects__link'>
                     <figure class="snip1206">
                        <img src={Placeholder} alt='GrowLocal Thumbnail' />
                        <figcaption>
                            <h2>Placeholder</h2>
                            <p>An application designed to enable backyard gardeners to connect and trade with other locals in their area.</p>
                        </figcaption>
                        {/* <a href="#"></a> */}
                    </figure>
                </a>
                <a  href='https://growlocal.app/' className='projects__link'>
                     <figure class="snip1206">
                        <img src={Placeholder} alt='GrowLocal Thumbnail' />
                        <figcaption>
                            <h2>Placeholder</h2>
                            <p>An application designed to enable backyard gardeners to connect and trade with other locals in their area.</p>
                        </figcaption>
                        {/* <a href="#"></a> */}
                    </figure>
                </a>

            </div>
        </div>
    )
}
export default Projects