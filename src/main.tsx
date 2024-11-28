import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container mx-auto flex min-h-svh items-center justify-center">
      <h1 className="text-center text-4xl">Vite | React | TS | Tailwind</h1>
    </div>
  </StrictMode>
);
