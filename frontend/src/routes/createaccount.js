import React from 'react';
import styled from 'styled-components';

import HeaderNav from './components/Header';
import Button from './components/Button';

export default class WelcomePage extends React.Component{
  render() {
    return (
      <Body>
          <HeaderNav/>

            <Container>
              <h1>Let's Set Up Your Account</h1>

              <NameContainer>
                <FirstName>
                  <p>First Name</p>
                  <Input></Input>
                </FirstName>

                <LastName>
                  <p>Last Name</p>
                  <Input></Input>
                </LastName>
              </NameContainer>

              <p>Email Address</p>
              <Input></Input>

              <Button
              text="Set Up Profile"
              />
            </Container>
          
      </Body>

    )
  }
}

const Body = styled.div`
  background-color: #98D2BA;
  height: 100vh;
  width: 100wh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #FFFFFF;
  width: 400px;
  height: 400px;

  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;

`;

const Wrapper 

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

`;

const LastName = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`;

const Input = styled.input`
  width: 100px;
  height: 40px;
  border: 1px solid #E1E1E1;
`;