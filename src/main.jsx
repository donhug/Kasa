import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from "./components/header/Header.jsx";
import About from './pages/about/A-Propos.jsx'
import Footer from "./components/footer/Footer.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <main className="page">
        <About/>
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
