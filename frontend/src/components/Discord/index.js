import React from 'react';
import styled from 'styled-components';
import { FaDiscord } from "react-icons/fa";


const Discord = (props) =>{
  return(
    <Cont>
      <Icon><FaDiscord/></Icon>
      <Title>{props.App || "Discord"}</Title>
    </Cont> 
  )
}

export default Discord; 

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;  

  background-color: #7289DA;
  border-radius: 10px;

  width: 100px;
  height: 30px;
  font-weight: medium;
  padding: 10px;
`

const Icon = styled.div`
    font-size: 25px;
    color: #FFFFFF;
`;


const Title = styled.div`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: bold;
`;
