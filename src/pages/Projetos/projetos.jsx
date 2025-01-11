import './projetos.css'
import saldoVerde from './../../assets/project-1.png'
import rickAndMorty from './../../assets/rickAndMorty.png'
import filmes from './../../assets/filmes.png'

export default function Projetos() {
    return (
        <>
            <div id="container-project">
                <div id="title">
                    <h1>Projetos de destaque</h1>
                </div>

                <div id="projects">
                    <div className="cards-project">
                        <img src={saldoVerde} alt="Imagem do projeto Saldo Verde" />
                        <h2 className='title-project'>Saldo Verde</h2>
                        <p className='paragraph-project'>Aplicação desktop de gerenciamento financeiro familiar. Foi desenvolvido em C# para o projeto integrador do curso de desenvolvimento de sistemas.</p>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7241914896303439873/" target="_blank" rel="noopener noreferrer">Ver mais</a>
                    </div>
                    <div className="cards-project">
                        <img src={rickAndMorty} alt="Imagem do projeto que consome API do Rick And Morty" />
                        <h2 className='title-project'>Rick And Morty</h2>
                        <p className='paragraph-project'>Projeto que consome a API do Rick And Morty.</p>
                        <a href="https://api-rick-and-morty-lilac.vercel.app" target="_blank" rel="noopener noreferrer">Ver mais</a>
                    </div>
                    <div className="cards-project">
                        <img src={filmes} alt="Imagem do projeto API da locadora" id='filmes' />
                        <h2 className='title-project'>API Locadora de filmes</h2>
                        <p className='paragraph-project'>Projeto que simula a API de uma locadora de filmes.</p>
                        <a href="https://github.com/VictorEzaki/AvaliacaoFinalJP" target="_blank" rel="noopener noreferrer">Ver mais</a>
                    </div>
                </div>
            </div>
        </>
    )
}