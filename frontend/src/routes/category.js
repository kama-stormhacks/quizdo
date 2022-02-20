import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import HeaderNav from '../components/Header';
import CategoryCard from '../components/Category';
import CategoriesDataService from '../services/categories.js'

const CategoryPage = () => {
  const [category, setCategory] = useState([]);

  const retrieveCategory = () => {
    CategoriesDataService.getAll()
      .then((response) => {
        //console.log(response.name);
        setCategory(response.data); // set the category if success
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveCategory();
  }, []);

  return (
    <Cont>
      <div>
        <HeaderNav />
      </div>

      {<div style={ styles.body }>
        <CategoryCard title={"Biology"}/>
        <CategoryCard title={"Chemistry"}/>
        <CategoryCard title={"Physics"}/>
        <CategoryCard title={"Math"}/>
      </div> }
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