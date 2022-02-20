import React from 'react';
import styled from 'styled-components';

const BaseBtn = (props) => {
  return (
    <BtnCont 
      btnHeight={props.btnH} 
      btnWidth={props.btnW} 
      onClick={props.onClickBtn}
    >
      <BtnText size={props.size}>{props.text}</BtnText>
    </BtnCont>
  )
}

export default BaseBtn;

const BtnCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 20px;
  
  background-color: #00918E;

  width: ${props => props.btnWidth};
  height: ${props => props.btnHeight};

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const BtnText = styled.p`
  font-family: Poppins;
  font-size: ${props => props.size || "24px"};
  color: #FFFFFF;

  margin: 0;
`