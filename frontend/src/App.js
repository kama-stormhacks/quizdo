import React from 'react';
import logo from './logo.svg';
import './App.css';

import GetStartedBtn from './components/Button/getStarted';
import HeaderNav from './components/Header';

export default function App() {
  return (
    <div className="appCont">
      <HeaderNav />
      
      <div className='welcomeCont'>
        <h1>Welcome to Quizdo</h1>
        <h2>Join a random group to compete in a daily challenge. Whoever answers the prompt wins!</h2>

        <GetStartedBtn />


      </div>
    </div>
  );
}
