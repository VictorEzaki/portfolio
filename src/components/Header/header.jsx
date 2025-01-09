import { Link } from 'react-router';
import './header.css';

export default function Header() {
    return (
        <>
            <header id='header'>
                <div id='header-name'>
                    <div id='header-logo'>
                        <span>V</span>
                    </div>
                    <div id='name'>
                        <span><b>Dev</b>Victor</span>
                    </div>
                </div>

                <nav id='header-abas'>
                    <Link to='/'>Home</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/tecnologias'>Tecnologias</Link>
                    <Link to='/projetos'>Projetos</Link>
                </nav>
            </header>
        </>
    )
}