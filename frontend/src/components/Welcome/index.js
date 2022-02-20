import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BaseBtn from '../Button';
import logo from '../../images/quizdo_logo.svg';

const WelcomeWindow = (props) => {
  return (
    <Cont>
      <Logo src={logo} />
      <Title>Welcome to Quizdo</Title>
      <Subtitle>Join a random group to compete in a daily challenge. Whoever answers the prompt wins!</Subtitle>

      <BaseBtn 
        text="Get Started" 
        size="20px"
        btnW="166px"
        btnH="50px"
      />
    </Cont>
  )
}

export default WelcomeWindow;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #FFFFFF;

  width: 600px;
  height: 500px;
`

const Logo = styled.img`
  width: 300px;
`

const Title = styled.h1`
  font-family: "Poppins";
  font-size: 36px;
  font-weight: bold;
`

const Subtitle = styled.h2`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: normal;
  
  margin-top: 0;
`