import React from 'react';
import styled from 'styled-components';

export default class BaseBtn extends React.Component{
  render() {
    return (
      <BtnCont onClick={()=>{}}>
        <BtnText>{ this.props.text }</BtnText>
      </BtnCont>
    )
  }
}

class GetStartedBtn extends React.Component{
  render() {
    return <BaseBtn text="Get Started" />
  }
}

const BtnCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 20px;
  
  background-color: #00918E;

  width: ${props => props.btnWidth || "200px"};
  height: ${props => props.btnHeight || "50px"};

  :hover {
    opacity: 0.5;
  }
`

const BtnText = styled.p`
  font-family: Poppins;
  font-size: 15px;
  color: #FFFFFF;
`