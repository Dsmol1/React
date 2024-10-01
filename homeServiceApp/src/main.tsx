import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { UserProvider } from '@/providers/UserContext';
import './index.css';
import './scss/styles.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
