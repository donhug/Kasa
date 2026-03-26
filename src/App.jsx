import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Accueil from "./pages/index/Accueil.jsx";
import Apropos from "./pages/about/A-Propos.jsx";
import Logement from "./pages/logements/Logement.jsx";
import Erreur from "./pages/erreur/Erreur.jsx";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/logement/:id" element={<Logement />}  />
            <Route path="/a-propos" element={<Apropos />}  />
            <Route path="*" element={<Erreur />} />
        </Routes>
    </Router>
  )
}

export default App
