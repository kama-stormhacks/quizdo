import React from 'react';
import styled from 'styled-components';
import logo from '../../images/quizdo_logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import Btn from '../Button';

const HeaderNav = (props) => {
  return (
    <Cont>
      <LeftInnCont>
        <Logo src={logo} />
      </LeftInnCont>
      <RightInnCont>
        <Link to="/" style={ styles.linkText }>home</Link>
        <Link to="/category" style={ styles.linkText }>challenge</Link>
        <Btn 
          text="Create Account"
          size="20px" 
          btnW="200px"
          btnH="50px"
        />
      </RightInnCont>
    </Cont>    
  )
}

export default HeaderNav;

const Cont = styled.div`
  display: flex;

  background-color: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 100vw;
  height: 50px;
  padding: 15px;
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

var styles = {
  linkText: {
    fontFamily: "Poppins",
    fontSize: "15px",
    color: "#000",
    textDecoration: "none",

  },
}