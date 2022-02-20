import React from 'react';
import logo from './logo.svg';
import './App.css';

import WelcomeWindow from './components/Welcome';
import Btn from './components/Button';
import HeaderNav from './components/Header';

export default function App() {
  return (
    <div className="appCont">
      <HeaderNav />

      <WelcomeWindow />


      {/* <Btn text="Get Started" /> */}
    </div>
  );
}
