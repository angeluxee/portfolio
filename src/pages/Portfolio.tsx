import {Navigation} from '../components/Navigation'
import {Home} from '../components/Home'
import { Projects } from '../components/Projects'
import { About } from '../components/About'
import { Footer } from '../components/Footer'
import { ContactForm } from '../components/ContactForm'
export const Portfolio = () => {
    return (
        <div>
            <Navigation/>
            <Home/>
            <div className='bg-black'>
                <Projects/>
                <About/>
                <ContactForm/>
                <Footer/>
            </div>
        </div>
    )
}