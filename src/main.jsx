import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Reg from './screen/reg.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Reg />
  </StrictMode>,
)
