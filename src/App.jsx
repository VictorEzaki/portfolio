import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/home'
import Footer from './components/Footer/footer'
import Tecnologias from './pages/Tecnologias/tecnologias'
import Projetos from './pages/Projetos/projetos'
import About from './pages/About/about'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<About />} />
        <Route path='/tecnologias' element={<Tecnologias />} />
        <Route path='/projetos' element={<Projetos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
