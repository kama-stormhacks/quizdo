import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import logo from './images/quizdo_logo.svg';
import './App.css';

import HeaderNav from './components/Header';
import WelcomeWindow from './components/Welcome';
import LoginWindow from './components/Login';

export default function App() {
  return (
    <div className="appCont">
      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
      </Routes>
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
        <WelcomeWindow clickClack={<Link to="login" />} />
      </div>

      <Routes>
        {/* <Route index element={<App />} /> */}
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  )
}

function Login(){
  return(
    <div className='appCont'>
      <div>
        <HeaderNav />
      </div>

      <div className='welcomeCont'>
        <LoginWindow />
      </div>
    </div>
  )
}