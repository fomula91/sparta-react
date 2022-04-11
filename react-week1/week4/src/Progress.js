import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Progress = (props) => {
  const bucket_list = useSelector((state) => state.bucket.list);

  let count = 0;
  bucket_list.map((b, idx) => {
    if (b.completed) {
      count++;
    }
  });
  return (
    <>
      <ProgressBar>
        <HighRight width={(count / bucket_list.length) * 100 + "%"}></HighRight>
        <Dot></Dot>
      </ProgressBar>
    </>
  );
};

const ProgressBar = styled.div`
  display: flex;
  background: #eee;
  width: 100%;
  height: 20px;
  border-radius: 50px;
  align-items: center;
`;

const HighRight = styled.div`
  /* position: relative; */
  background: orange;
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 50px;
`;
const Dot = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border: 5px solid #673ab7;
  border-radius: 30px;
  margin: 0px 0px 0px -20px;
`;
export default Progress;
