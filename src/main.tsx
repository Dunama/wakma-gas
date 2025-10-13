import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// After initial mount, fade-out and remove splash screen
// Keep this tiny and framework-agnostic
queueMicrotask(() => {
  const splash = document.getElementById('splash');
  if (!splash) return;
  // Defer to next frame to ensure styles are applied
  requestAnimationFrame(() => {
    splash.style.opacity = '0';
    // Remove from DOM after transition
    setTimeout(() => splash.remove(), 320);
  });
});
