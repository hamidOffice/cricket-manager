import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SelectCountry from './components/SelectCountry.tsx'
 import Contract from './components/Contract.tsx'
import Home from './components/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/select-country" element={<SelectCountry />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
  </StrictMode>,
)
