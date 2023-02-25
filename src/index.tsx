import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NoMatchView from './views/NoMatchView';
import HomeView from './views/board/HomeView';
import MyShopsView from './views/board/MyShopsView';
import LoginView from './views/auth/LoginView';
import AuthMiddleware from './middleware/AuthMiddleware';
import User from './mrktplace-models/User';
import ProfileView from './views/account/ProfileView';
import ProductsView from './views/shop/ProductsView';
import NotifsView from './views/board/NotifsView';

console.log(User.authUser); //! debug
// User.authUser = null; //! debug

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
        <Route path="/" element={AuthMiddleware.privateRoute(<App />)}>
          {/* Board */}
          <Route path="/" element={AuthMiddleware.privateRoute(<HomeView />)} />
          <Route path="/shops" element={AuthMiddleware.privateRoute(<MyShopsView />)} />
          <Route path="/notifications" element={AuthMiddleware.privateRoute(<NotifsView />)} />
          {/* Shop */}
          <Route path="/products" element={AuthMiddleware.privateRoute(<ProductsView />)} />
          <Route path="/profile" element={AuthMiddleware.privateRoute(<ProfileView />)} />
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
