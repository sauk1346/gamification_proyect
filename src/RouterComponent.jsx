import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Calculadora from './pages/Calculadora';
import Desafios from './pages/Desafios';
import Ejemplos from './pages/Ejemplos';
import Teoria from './pages/Teoria';
import Login from './pages/Login';
import { UserProvider, useUser } from './components/UserContext';

const RouterComponent = () => {
  return (
    <UserProvider>
      <Router basename="/gamification_proyect">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Ruta principal que requiere autenticación */}
          <Route path="/main" element={<MainLayout />}>
            <Route path="calculadora" element={<Calculadora />} />
            <Route path="desafios" element={<Desafios />} />
            <Route path="ejemplos" element={<Ejemplos />} />
            <Route path="teoria" element={<Teoria />} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

const MainRoute = () => {
  const { username } = useUser();  // Accedemos al contexto UserContext

  // Si el usuario tiene nombre, renderizamos MainLayout, si no, redirigimos a Login
  return username ? <Navigate to="/main" /> : <Navigate to="/" />;
};

export default RouterComponent;
