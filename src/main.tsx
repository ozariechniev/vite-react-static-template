import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Welcome from '@/components/welcome.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Welcome className="flex min-h-svh items-center justify-center" />
  </StrictMode>
);
