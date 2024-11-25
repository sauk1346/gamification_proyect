import { createBrowserRouter, createRoutesFromChildren } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Calculadora from "./pages/Calculadora";
import Desafios from "./pages/Desafios";
import Ejemplos from "./pages/Ejemplos";
import Teoria from "./pages/Teoria";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path:"/calculadora",
                element:<Calculadora />
            },
            {
                path:"/desafios",
                element: <Desafios />
            },
            {
                path: "/ejemplos",
                element: <Ejemplos />
            },
            {
                path: "/teoria",
                element: <Teoria />
            }

        ]

    }
])
export default Router;