import React, { useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { createBucket } from "./redux/modules/reducer";
import { useDispatch } from "react-redux";

function AddDetail() {
  const history = useHistory();
  const disfatch = useDispatch();
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const allText = () => {
    disfatch(
      createBucket([
        text1.current.value,
        text2.current.value,
        text3.current.value,
      ])
    );
    history.goBack();
  };

  return (
    <>
      <SubDiv>
        <p>단어</p>
        <input
          type="text"
          ref={text1}
          placeholder="단어를 입력해 주세요"
        ></input>
      </SubDiv>
      <SubDiv>
        <p>설명</p>
        <input
          type="text"
          ref={text2}
          placeholder="설명을 입력해 주세요"
        ></input>
      </SubDiv>
      <SubDiv>
        <p>예제</p>
        <input
          type="text"
          ref={text3}
          placeholder="예제를 입력해 주세요"
        ></input>
      </SubDiv>
      <Button onClick={allText}>추가하기</Button>
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
  width: 25vw;
  height: 40px;
  margin: 1em 1em 1em 1em;
  &:hover {
    background: #e6ceff;
  }
`;

const SubDiv = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 18vh;
  background: white;
  margin: 5px;
  & > p {
    margin: 1em 1em auto 1em;
  }
  & > input {
    margin: 1em 1em auto 1em;

    outline: none;
    border: 5px solid #b1bfca;
    width: 20vw;
    height: 6vh;
  }
`;

export default AddDetail;
