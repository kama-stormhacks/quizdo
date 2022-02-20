import React from 'react';
import styled from 'styled-components';
import { BsTwitter } from "react-icons/bs";


const Twitter = (props) =>{
    return(
        <Cont>
            <Icon><BsTwitter/></Icon>
            <Title>{props.App || "Twitter"}</Title>
        </Cont>
    )
}

export default Twitter;

const Cont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;  

  background-color: #1DA1F2;
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