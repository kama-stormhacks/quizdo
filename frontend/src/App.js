import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import logo from './images/quizdo_logo.svg';
import './App.css';

import HeaderNav from './components/Header';
import WelcomeWindow from './components/Welcome';
import LoginWindow from './components/Login';

import WelcomePage from './routes/welcome';
import LoginPage from './routes/login';
import CategoryPage from './routes/category';

export default function App() {
  return (
    <div className="appCont">
      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route index element={<Welcome />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="category" element={<CategoryPage />} />
      </Routes>

      <Outlet />
    </div>
  );
}

function Welcome(){
  return (
    <div className="appCont">
      <div>
        <HeaderNav />
      </div>
      <div className='welcomeCont'>
        <WelcomeWindow linkTo="login" />
      </div>
    </div>
  )
}
