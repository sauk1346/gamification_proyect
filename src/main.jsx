import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import "katex/dist/katex.min.css"
import RouterComponent from './RouterComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>,
)
