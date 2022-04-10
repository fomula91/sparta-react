import React from "react";
import BucketList from "./BucketList";
import Detail from "./Detail";
import Progress from "./Progress";
import styled from "styled-components";
import { Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import { useDispatch } from "react-redux";
import { createBucket } from "./redux/modules/bucket";

function App() {
  const text = React.useRef(null);
  const dispatch = useDispatch();

  const addBucketList = () => {
    dispatch(createBucket({ text: text.current.value, completed: false }));
  };
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Progress></Progress>
        <Line />
        <Switch>
          <Route exact path="/">
            <BucketList />
          </Route>
          <Route path="/detail/:index">
            <Detail></Detail>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Container>
      {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
      <Input>
        {/* <input type="text" ref={text} /> */}
        <DataInput type="text" ref={text}></DataInput>
        {/* <button onClick={addBucketList}>추가하기</button> */}
        <ClickBtn onClick={addBucketList}>추가하기</ClickBtn>
      </Input>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        위로가기
      </button>
    </div>
  );
}
const ClickBtn = styled.button`
  color: white;
  background: #d1c4e9;
  border: 3px solid;
  width: 90px;
  height: 30px;
  :hover {
    background: #a094b7;
  }
`;
const DataInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  :focus {
    outline: none;
    border: 3px solid orange;
  }
`;
const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;

////////////////* 애니메이션, 키프레임 연습*///////////////////
//import styled, { keyframes } from "styled-components";

// function App() {
//   return (
//     <div className="App">
//       <Box></Box>
//     </div>
//   );
// }

// const boxAnimation = `
//   0% {
//   border-radius: 0px;
//   top: 20px;

//   }
//   30%{

//     top: 300px;

//   }
//   50%{
//     border-radius: 50px;
//     top: 400px;

//   }
//   70%{
//   border-radius: 0px;
//   top: 700px;

//   }
//   100%{
//   border-radius: 0px;
//   top: 20px;

//   }`;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   background: green;
//   border-radius: 0px;
//   position: absolute;
//   top: 20px;
//   left: 20px;
//   animation: ${boxAnimation} 2s 1s infinite linear alternate;
// `;

// export default App;
