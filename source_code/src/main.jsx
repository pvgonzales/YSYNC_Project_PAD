import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <App/>
      </AuthProvider>
  </StrictMode>,
)