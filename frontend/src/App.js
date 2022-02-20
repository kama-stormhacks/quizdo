import React from 'react';
import logo from './logo.svg';
import './App.css';

import WelcomeWindow from './components/Welcome';
import HeaderNav from './components/Header';

export default function App() {
  return (
    <div className="appCont">
      <div>
        <HeaderNav />
      </div>
      <div className='welcomeCont'>
        <WelcomeWindow />
      </div>
    </div>
  );
}

