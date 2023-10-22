import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter.tsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppHeader />
    <App />
    <AppFooter />
  </React.StrictMode>,
)
