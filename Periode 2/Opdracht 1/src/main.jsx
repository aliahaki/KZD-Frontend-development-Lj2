
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Eigen CSS
import './style/Home.css';
import './style/Algemeen.css';

// Hoofdcomponent
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
