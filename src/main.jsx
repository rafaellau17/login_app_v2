import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import LoginPage from './pages/LoginPage'
import VideojuegosPage from './pages/VideojuegosPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={ <LoginPage />} />
          <Route path='/main' element={ <VideojuegosPage />} />
        </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
