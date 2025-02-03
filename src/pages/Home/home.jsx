import { Link } from "react-router";
import './home.css'

export default function Home() {
    return(
        <>
            <div id="container-home">
                <div id="container-content">
                    <div id="img-perfil">
                        <img src="https://github.com/victorezaki.png" />
                    </div>
                    <div id="content">
                        <h1 id="studant">Estudante de Engenharia de Software</h1>
                        <h2 id="fullname">Victor Takeyoshi Kieper Ezaki</h2>
                        <p id="resume">Olá, mundo! Me chamo Victor, tenho 21 anos e sou natural de Joinville. Atualmente, curso o 1º período de Análise e Desenvolvimento de Sistemas na faculdade Senac Joinville. Tenho grande interesse em criar soluções FullStack, porém, minha afinidade e foco estão voltados ao desenvolvimento BackEnd.</p>
                        <Link to='/projetos'>Projetos</Link>
                    </div>
                </div>
            </div>
        </>
    )
}