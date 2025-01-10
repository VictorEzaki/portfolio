import './tecnologias.css'
import html from './../../assets/html5.svg'
import css from './../../assets/css3.svg'
import javascript from './../../assets/javascript.svg'
import csharp from './../../assets/csharp.svg'
import jest from './../../assets/jest.png'
import mysql from './../../assets/mysql.svg'
import node from './../../assets/node.svg'
import postman from './../../assets/postman.svg'
import react from './../../assets/react.svg'
import typescript from './../../assets/typescript.svg'
import ubuntu from './../../assets/ubuntu.png'

export default function Tecnologias() {
    return (
        <>
            <div id='container'>
                <div id="icons">
                    <img src={html} alt="Ícone HTML5" />
                    <img src={css} alt="Ícone CSS3" />
                    <img src={javascript} alt="Ícone JavaScript" />
                    <img src={react} alt="Ícone React" />
                    <img src={node} alt="Ícone NodeJs" />
                    <img src={typescript} alt="Ícone TypeScript" />
                    <img src={jest} alt="Ícone Jest" />
                    <img src={mysql} alt="Ícone MySql" />
                    <img src={postman} alt="Ícone PostMan" />
                    <img src={csharp} alt="Ícone CSharp" />
                    <img src={ubuntu} alt="Ícone ubuntu" />
                </div>
                <div id="content-tech">
                    <div className="cards-role">
                        <h1 className='title'>FrontEnd</h1>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>React + Vite</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div className="cards-role">
                        <h1 className='title'>BackEnd</h1>
                        <ul>
                            <li>NodeJs</li>
                            <li>JavaScript</li>
                            <li>Sequelize</li>
                            <li>TypeScript</li>
                            <li>Express</li>
                            <li>bcrypt</li>
                            <li>JSON Web Tokens</li>
                            <li>PostMan</li>
                            <li>C#</li>
                        </ul>
                    </div>
                    <div className="cards-role">
                        <h1 className='title'>Banco de Dados</h1>
                        <ul>
                            <li>MySql</li>
                        </ul>
                    </div>
                    <div className="cards-role">
                        <h1 className='title'>Testes</h1>
                        <ul>
                            <li>Teste unitários com Jest</li>
                        </ul>
                    </div>
                    <div className="cards-role">
                        <h1 className='title'>Sistemas operacionais</h1>
                        <ul>
                            <li>Ubuntu Linux</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}