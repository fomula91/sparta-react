import React from "react";
import styled from "styled-components";
import { Route, useHistory } from "react-router-dom";

/// import component ///
import Detail from "./Detail";
import AddDetail from "./InputDetail";

function App() {
  const history = useHistory();
  return (
    <Div className="App">
      <MainDiv>
        <MainH1>MY DICTIONARY</MainH1>
        <Route exact path="/">
          <Detail></Detail>
          <Button
            onClick={() => {
              history.push("/adddic/");
            }}
          >
            +
          </Button>
        </Route>
        <Route path="/adddic">
          <AddDetail></AddDetail>
        </Route>
      </MainDiv>
    </Div>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const MainDiv = styled.div`
  display: flex;

  align-content: center;
  position: relative;
  flex-direction: column;
  width: 60vw;
  height: 100vh;

  background: #e3f2fd;
  margin: 5px;
`;
const MainH1 = styled.h1`
  height: 50px;
  margin: 1rem;
`;
const Button = styled.div`
  color: white;
  font-size: 60px;
  font-weight: bolder;
  text-align: center;
  padding: 1px 8px 14px 8px;
  border-radius: 100px;
  outline: none;
  background: #b39ddb;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 70%;
  bottom: 10%;

  &:hover {
    background: #e6ceff;
  }
`;

export default App;
