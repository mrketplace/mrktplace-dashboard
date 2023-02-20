import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NoMatchView from './views/NoMatchView';
import HomeView from './views/HomeView';
import LoginView from './views/auth/LoginView';
import AuthMiddleware from './middleware/AuthMiddleware';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route path="/login" element={<LoginView />} />
        {/* <Route path="/reset-password" element={<ResetPasswordView />} /> */}
        {/* Dashboard routes */}
        <Route path="/" element={AuthMiddleware.makePrivateRoute(<App />)}>
          <Route path="/" element={AuthMiddleware.makePrivateRoute(<HomeView />)} />
        </Route>
        {/* No match route */}
        <Route path="*" element={<NoMatchView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();