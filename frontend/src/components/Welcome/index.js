import React from 'react';
import styled from 'styled-components';
import BaseBtn from '../Button';

export default class WelcomeWindow extends React.Component{
  render() {
    return (
      <Cont>
        <Title>Welcome to Quizdo</Title>
        <Subtitle>Join a random group to compete in a daily challenge. Whoever answers the prompt wins!</Subtitle>

        <BaseBtn text="Get Started"/>
      </Cont>
    )
  }
}

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

const Title = styled.h1`
  font-family: "Poppins";
  font-size: 36px;
  font-weight: bold;
`

const Subtitle = styled.h2`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: normal;
`