import React from 'react';
import styled from 'styled-components';
import logo from '../../images/quizdo_logo.svg';

export default class HeaderNav extends React.Component{
  render() {
    return (
      <Cont>
        <LeftInnCont>
          <Logo src={logo} />
        </LeftInnCont>
        <RightInnCont>
          
        </RightInnCont>
      </Cont>
    )
  }
}

const Cont = styled.div`
  display: flex;

  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 100vw;
  height: 100px;
`

const LeftInnCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex: 1;
`

const Logo = styled.img`
  width: 100px;
  padding-left: 3rem;
`

const RightInnCont = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex: 1;
`