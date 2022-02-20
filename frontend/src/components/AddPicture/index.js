import React from 'react';
import styled from 'styled-components';
import { AiFillPicture } from "react-icons/ai";



const AddPic = (props) => {
    return(
        <BtnCont onClick={()=>{}}>
        <BtnText><AiFillPicture/></BtnText>
      </BtnCont>
    )
}

const BtnCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #C4C4C4;
  

  width: 35px;
  height: 35px;
  outline: none;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }

`

const BtnText = styled.div`
  display: flex;
  align-items: center
  font-size: 20px;
  color: #FFFFFF;
`

export default AddPic;