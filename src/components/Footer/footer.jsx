import './footer.css'
import linkedin from './../../assets/linkedin.png'
import github from './../../assets/github.png'

export default function Footer() {
    return(
        <>
            <footer id='footer'>
                <span>&copy; 2025 Feito por Victor Ezaki</span>
                <div id='img'>
                    <a href="https://www.linkedin.com/in/victor-ezaki/" target='blank'><img src={linkedin} alt="Linkedin" /></a>
                    <a href="https://github.com/VictorEzaki" target='blank'><img src={github} alt="Github" /></a>
                </div>
            </footer>
        </>
    )
}