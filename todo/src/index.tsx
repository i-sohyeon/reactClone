import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RecoilRoot} from "recoil";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import { QueryClient, QueryClientProvider } from "react-query";

// react query사용을 위해서 임포트
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode> 
);