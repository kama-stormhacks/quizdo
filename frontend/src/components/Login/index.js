import React from 'react';
import styled from 'styled-components';
import Btn from '../Button';

const LoginWindow = (props) => {
  return (
    <Cont>
      <Title>Welcome back!</Title>
      <Subtitle>Sign in and get your <span style={styles.quizdo}>Quizdo</span> on!</Subtitle>
      <Input
        type="text"
        placeholder='Username'
      />
      <Input
        type="text"
        placeholder='Password'
      />

      <Btn text="Login" />
      <Btn text="Login as Guest" />
    </Cont>
  )
}

export default LoginWindow;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #FFFFFF;

  width: 500px;
  height: 500px;
`

const Title = styled.h1`
  font-family: "Poppins";
  font-size: 36px;
  font-weight: bold;

  margin: 0;
`

const Subtitle = styled.h2`
  font-family: "Poppins";
  font-size: 24px;
  font-weight: normal;

  margin: 0;
`

const Input = styled.input`
  width: 350px;
  height: 40px;

  border-radius: 10px;
  padding-left: 1rem;
`

var styles = {
  quizdo: {
    color: "#00918E",
    fontWeight: "bold",
  }
}