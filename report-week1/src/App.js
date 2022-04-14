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
          <ContantDiv>
            <Detail></Detail>
          </ContantDiv>

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
  width: 30vw;
  min-width: 300px;
  height: 80%;
  background: #e3f2fd;
  margin: 5px;
`;
const MainH1 = styled.h1`
  height: 50px;
  margin: 1rem;
`;
const ContantDiv = styled.div`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;
  margin: 1em;
  height: 80%;
  max-height: 80vh;
`;
const Button = styled.div`
  color: white;
  font-size: 50px;
  font-weight: bolder;
  text-align: center;
  padding: 1px;
  border-radius: 100px;
  outline: none;
  background: #b39ddb;
  width: 50px;
  height: 50px;
  position: absolute;
  left: 70%;
  bottom: 5%;

  &:hover {
    background: #e6ceff;
  }
`;

export default App;
