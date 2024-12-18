import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Header />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-8">
                <h1 className="text-xl sm:text-4xl font-bold text-gray-900 mb-4">Explora el Universo de la Trigonometría</h1>
                <p className="text-sm sm:text-lg text-gray-600">Embárcate en un viaje matemático con los Trigonautas</p>
            </div>
        
            <Navbar />
            <Outlet />
        </div>
    </div>
  )
}
