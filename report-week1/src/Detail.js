import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <>
      <SubDiv>
        <Head>단어</Head>
        <SubText>ㅎ1ㅎ1</SubText>
        <Head>설명</Head>
        <SubText>히히를 벼형한 단어 숫자 1을 l로 쓴다</SubText>

        <Head>예시</Head>
        <SubText>저 친구가 초콜릿을 줬어 히히</SubText>
      </SubDiv>
      <SubDiv></SubDiv>
      <SubDiv></SubDiv>
    </>
  );
}
const SubDiv = styled.div`
  align-self: center;
  width: 50vw;
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
export default Detail;
