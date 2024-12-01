import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Calculadora from './pages/Calculadora';
import Desafios from './pages/Desafios';
import Ejemplos from './pages/Ejemplos';
import Teoria from './pages/Teoria';

const RouterComponent = () => {
  return (
    <Router basename="/gamification_proyect">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="calculadora" element={<Calculadora />} />
          <Route path="desafios" element={<Desafios />} />
          <Route path="ejemplos" element={<Ejemplos />} />
          <Route path="teoria" element={<Teoria />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;
