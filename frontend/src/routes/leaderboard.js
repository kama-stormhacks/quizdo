import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderNav from '../components/Header';
import Results from '../components/Results';
import Twitter from '../components/Twitter';
import Discord from '../components/Discord';
import Btn from '../components/Button';

const LeaderboardPage = () => {
  return (
    <Cont>
      <div>
        <HeaderNav />
      </div>

      <div style={ styles.body }>
        <LeftCont>
          <h1>Your Results</h1>
          <Results name="test" result="test" bgcolor="#00918E" />
          <Results name="test" result="test" bgcolor="rgba(0, 145, 142, 0.75)"/>
          <Results name="test" result="test" bgcolor="rgba(0, 145, 142, 0.5)" />

          <Twitter />
          <Discord />
        </LeftCont>

        <RightCont>
          <h1>Leaderboard</h1>
          <Results ranking="1" name="test" result="test" bgcolor="#00918E" />
          <Results name="test" result="test" bgcolor="rgba(0, 145, 142, 0.75)" />
          <Results name="test" result="test" bgcolor="#4CB2B0" />
          <Results name="test" result="test" bgcolor="rgba(152, 210, 186, 0.75)" />
          <Results name="test" result="test" bgcolor="#98D2BA" />

          <Btn text="Play Again" />
        </RightCont>
      </div>
    </Cont>
  )
}

export default LeaderboardPage;

const Cont = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #98D2BA;

  width: 100vw;
  height: 100vh;
`

const LeftCont = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #CCCCCC;
  border-radius: 20px;

  width: 400px;
  height: 500px;
`

const RightCont = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #CCC;

  width: 400px;
  height: 500px;
`

var styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    minWidth: "60%",
    flex: 1,

    backgroundColor: "white"
  }
}