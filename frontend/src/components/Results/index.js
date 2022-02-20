import React from 'react';
import styled from 'styled-components';


const Results = (props) => {
    return(
      <Cont bgcolor={ props.bgcolor }>
        <Ranking>{ props.ranking }</Ranking>
        <Item1>{ props.name }</Item1>
        <Item2>{ props.result }</Item2>
      </Cont>
    )
}

export default Results;

const Cont = styled.div`
  display: flex;
  flex-direction: row;
   

  background-color: ${props => props.bgcolor || "#00918E"};
  border-radius: 20px;

  width: 300px;
  height: 50px;
  font-weight: medium;
  padding: 5px;
  font-size: 15px;
`

const Ranking = styled.div`
  display: flex;
  justify-content: center;
  color: #FFFFFF;
  margin: 20px;
`

const Item1 = styled.div`
    display: flex;
    justify-content: start; 
    color: #FFFFFF;
    margin: 0;
`;

const Item2 = styled.div`
    display: flex;
    justify-content: end; 
    flex-grow: 1;
    color: #FFFFFF;
    margin: 30px;

`;