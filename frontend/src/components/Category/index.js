import React from 'react';
import styled from 'styled-components';
import chem from '../../images/chemistry.png'

const Category = (props) =>{
    return(
        <Cont>
            <Image src={props.Pic}></Image>
            <Subject>{props.Title}</Subject>
         </Cont>
    )
}

export default Category;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #98D2BA;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  width: 150px;
  height: 200px;
`

const Image = styled.img`
    width: 80px;
    height: 80px;
`;

const Subject = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 10px;
`;