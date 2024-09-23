import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from '@/providers/UserContext';;
import './index.css'
import './scss/styles.scss';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>

      <App />
    </UserProvider>
  </StrictMode>,
)
