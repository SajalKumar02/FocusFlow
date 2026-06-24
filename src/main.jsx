import { createRoot } from 'react-dom/client';

import './index.css';

import App from './app/App.jsx';
import { AppProviders } from './app/provider/AppProvider.jsx';

const root = document.getElementById('root');

createRoot(root).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
