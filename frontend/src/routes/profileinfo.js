import React from 'react';
import styled from 'styled-components';

import HeaderNav from './components/Header';
import Button from './components/Button';
import ProgressBar from './components/Progress';

export default class WelcomePage extends React.Component{
  render() {
    return (
      <Body>
          <div style={ styles.test }>
            <HeaderNav/>
          </div>

          <Wrapper>
          <ProgressBar/>

            <Container>
                <h1 style={ styles.text}>Let's Set Up Your Account</h1>

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

              <Email>
                <p>Email Address</p>
                  <Input
                    style={ styles.input2}
                  />
              </Email>

                <Button
                text="Set Up Profile"
                />
              </Container>
          </Wrapper>

          
      </Body>

    )
  }
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #98D2BA;
  height: 100vh;
  width: 100wh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: #FFFFFF;
  width: 400px;
  height: 400px;

  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FirstName = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;

`;

const LastName = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 10px;
`;

const Email = styled.div`
  margin: 0;
`;

const Input = styled.input`
  width: 150px;
  height: 30px;
  border: 1px solid #E1E1E1;
`;

var styles = {
  input2: {
    width: "300px",
  },

  text: {
    fontSize: "25px",
  },
}