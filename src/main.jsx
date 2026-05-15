import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// This finds the <div id="root"></div> in your index.html
const rootElement = document.getElementById('root');

// This creates the React root and renders your App component
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);