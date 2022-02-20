import React from 'react';
import styled from 'styled-components';

const ProgressBar = (props) =>{
    return(
        <Cont>

          <ItemCont>
            <Item1>Create Account</Item1>
            <Item2>Profile Information</Item2>
            <Item3>Complete</Item3>
          </ItemCont>

            <ProgressContainer>
              <Progress progWidth={props.progWidth} />
            </ProgressContainer>
         </Cont>
    )
}

export default ProgressBar;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
`

const ItemCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 10px;
  padding: 10px;
  width: 400px;
`;

const Item1 = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Item2 = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const Item3 = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-self: flex-end;
`;

const ProgressContainer = styled.div`
  background-color: #FFFFFF;
  height: 10px;
  width: 400px;
  border-radius: 50px;
`;

const Progress = styled.div`
  background-color: #00918E;
  height: 10px;
  width: ${props => props.progWidth || "10vw"};
  border-radius: 50px;
`;