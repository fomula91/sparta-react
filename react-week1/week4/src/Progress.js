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
        <Circle>
          <InCircle></InCircle>
        </Circle>
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
`;

const HighRight = styled.div`
  /* position: relative; */
  background: orange;
  transition: 1s;
  width: ${(props) => props.width};
  height: 20px;
  border-radius: 50px;
`;
const Circle = styled.div`
  /* display: flex; */
  /* align-items: flex; */
  /* position: absolute; */
  position: relative;
  bottom: 15px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: orange;

  border-radius: 100px;
`;
const InCircle = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 100px;
`;
export default Progress;
