import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { readWordFB } from "./redux/modules/reducer";

function Detail() {
  const dispatch = useDispatch();
  const wordList = useSelector((state) => state.word);
  useEffect(() => {
    console.log("hey useEffect");
    dispatch(readWordFB());
  }, []);

  return (
    <>
      {wordList.map((value, index) => {
        return (
          <SubDiv key={index}>
            <Head>단어</Head>
            <SubText>{value.word1}</SubText>
            <Head>설명</Head>
            <SubText>{value.word2}</SubText>

            <Head>예시</Head>
            <SubDesc>{value.word3}</SubDesc>
          </SubDiv>
        );
      })}
    </>
  );
}
const SubDiv = styled.div`
  align-self: center;
  width: 25vw;
  height: 30vh;
  background: white;
  margin: 5px;
`;
const Head = styled.h4`
  margin: 5px auto auto 10px;
`;
const SubText = styled.p`
  margin: 5px auto auto 10px;
`;
const SubDesc = styled.p`
  color: blueviolet;
  margin: 5px auto auto 10px;
`;
export default Detail;
