import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App';
import '@/styles/main.css';

const id =
  document.getElementById('root') ??
  document.body.appendChild(document.createElement('div'));

const root = createRoot(id);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
