import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { ModalState } from './context/ModalContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalState>
      <App />
    </ModalState>
  </StrictMode>,
)
