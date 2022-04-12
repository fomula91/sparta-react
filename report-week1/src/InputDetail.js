import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { defaultWord } from "./redux/modules/reducer";
import { useDispatch } from "react-redux";

function AddDetail() {
  const history = useHistory();
  const disfatch = useDispatch();

  return (
    <>
      <SubDiv>
        <p>hello world</p>
        <input placeholder="input your text..."></input>
      </SubDiv>
      <SubDiv>
        <p>hello world</p>
        <input placeholder="input your text..."></input>
      </SubDiv>
      <SubDiv>
        <p>hello world</p>
        <input placeholder="input your text..."></input>
      </SubDiv>
      <Button
        onClick={() => {
          history.goBack();
          disfatch(defaultWord("asd"));
        }}
      >
        추가하기
      </Button>
    </>
  );
}
const Button = styled.button`
  align-self: center;
  background: #b39ddb;
  outline: none;
  border: 1px solid;
  border-radius: 10px;
  color: white;
  width: 50vw;
  height: 40px;
  margin: auto;
  &:hover {
    background: #e6ceff;
  }
`;

const SubDiv = styled.div`
  align-self: center;
  width: 50vw;
  height: 18vh;
  background: white;
  margin: 5px;
  & > p {
    margin: 1em auto auto 1em;
  }
  & > input {
    margin: 1em auto auto 1em;

    outline: none;
    border: 5px solid #b1bfca;
    width: 44vw;
    height: 6vh;
  }
`;

export default AddDetail;
