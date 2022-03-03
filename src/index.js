import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from './lib/ThemeContext';
import Background from './components/Background';

import './lib/i18n';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
