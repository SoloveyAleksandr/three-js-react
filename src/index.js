import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CharacterAnimationProvider } from './contexts/CharacterAnimations';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CharacterAnimationProvider>
      <App />
    </CharacterAnimationProvider>
  </React.StrictMode>
);

