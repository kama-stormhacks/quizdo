import React from 'react';
import styled from 'styled-components';

import HeaderNav from './components/Header';
import Button from './components/Button';
import ProgressBar from './components/Progress';
import AddPic from './components/AddPicture';

export default class WelcomePage extends React.Component{
  render() {
    return (
      <Body>
          <div style={ styles.test }>
            <HeaderNav/>
          </div>

          <Wrapper>
          <ProgressBar
            progWidth="20vw"
          />

            <Container>
                <h1 style={ styles.text}>Profile Information</h1>

              <AvatarContainer>
                <Avatar>U</Avatar>
                <AddPic style={ styles.bttnposition}/>
              </AvatarContainer>
              
              <Item>
                <p>What school are you currently attending? </p>
                  <Input
                    style={ styles.input2}
                  />
              </Item>  


              <Item>
                <p>What field of study are you enrolled in?</p>
                  <Input
                    style={ styles.input2}
                  />
              </Item>

              <Item>
                <p>What year are you in?</p>
                  <Input
                    style={ styles.input2}
                  />
              </Item>

                <Button
                text="Finish Set Up"
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
  height: 525px;

  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;

`;

const AvatarContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid #C4C4C4;
  background-color: background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  color: #C4C4C4;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Item = styled.div`
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

  bttnposition: {
    position: "absolute",
    display: "flex",
    justifyContent: "flex-end",
  },
}