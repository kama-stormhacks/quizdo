import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../components/Header';
import CategoryCard from '../components/Category';

const CategoryPage = () => {


  return (
    <Cont>
      <div>
        <HeaderNav />
      </div>

      {/* <div style={ styles.body }>
        <CategoryCard title={}/>
        <CategoryCard title={}/>
        <CategoryCard title={}/>
        <CategoryCard title={}/>
      </div> */}
    </Cont>
  )
}

export default CategoryPage;

const Cont = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #98D2BA;

  width: 100vw;
  height: 100vh;
`

var styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    minWidth: "60%",
    minHeight: "100%",

    backgroundColor: "white"
  }
}