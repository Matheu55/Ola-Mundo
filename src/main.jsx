import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SobreMim from './pages/sobreMim/sobreMim.jsx'
import Pagina404 from './pages/naoEncontrada/naoEncontrada.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SobreMim",
    element: <SobreMim/>,
  },
  {
    path: "*",              // rota coringa
    element: <Pagina404/>,  // componente de erro
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
