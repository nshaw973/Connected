import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Custom CSS & tailwind imports
import 'tailwindcss/dist/base.css';
import 'tailwindcss/dist/components.css';
import 'tailwindcss/dist/utilities.css';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );