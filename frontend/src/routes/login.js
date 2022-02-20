import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../components/Header';
import LoginWindow from '../components/Login';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <Cont>
      <div>
        <HeaderNav />
      </div>

      <div className='welcomeCont'>
        <LoginWindow />
      </div>
    </Cont> 
  )
}

export default LoginPage;

const Cont = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #98D2BA;

  width: 100vw;
  height: 100vh;
`