import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Detail() {
  const wordList = useSelector((state) => state.word);

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
