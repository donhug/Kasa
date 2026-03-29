import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from "./components/header/Header.jsx";
import About from './pages/about/A-Propos.jsx'
import Error from './pages/erreur/Erreur.jsx'
import Footer from "./components/footer/Footer.jsx";
import Accueil from "./pages/index/Accueil.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main className="page">
          <Accueil />
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
