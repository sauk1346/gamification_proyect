import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
      <div className="flex border-b">
        <NavLink
          to="/teoria"
          className={({ isActive }) =>
            `flex-1 py-4 px-6 text-center ${
              isActive ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`
          }
        >
          Teoría
        </NavLink>
        
        <NavLink
          to="/calculadora"
          className={({ isActive }) =>
            `flex-1 py-4 px-6 text-center ${
              isActive ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`
          }
        >
          Calculadora
        </NavLink>
        
        <NavLink
          to="/ejemplos"
          className={({ isActive }) =>
            `flex-1 py-4 px-6 text-center ${
              isActive ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`
          }
        >
          Ejemplos
        </NavLink>
        
        <NavLink
          to="/desafios"
          className={({ isActive }) =>
            `flex-1 py-4 px-6 text-center ${
              isActive ? 'bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
            }`
          }
        >
          Desafíos
        </NavLink>
      </div>
    </div>
  );
}