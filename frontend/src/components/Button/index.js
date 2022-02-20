import React from 'react';
import styled from 'styled-components';

const BaseBtn = (props) => {
  return (
    <BtnCont>
      <BtnText>{props.text}</BtnText>
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

  width: ${props => props.btnWidth || "258px"};
  height: ${props => props.btnHeight || "77px"};

  :hover {
    opacity: 0.5;
  }
`

const BtnText = styled.p`
  font-family: Poppins;
  font-size: 24px;
  color: #FFFFFF;
`