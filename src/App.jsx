import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Accueil from "./pages/index/Accueil.jsx";
import Apropos from "./pages/about/A-Propos.jsx";
import Logement from "./pages/logements/Logement.jsx";
import Erreur from "./pages/erreur/Erreur.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/Logement/:id" element={<Logement />}  />
              <Route path="/a-propos" element={<Apropos />}  />
              <Route path="*" element={<Erreur />} />
          </Routes>
          <Footer />
      </Router>

  )
}

export default App
