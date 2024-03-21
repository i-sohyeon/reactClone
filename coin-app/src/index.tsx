
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </div>
);