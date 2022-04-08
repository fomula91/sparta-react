import React from "react";
import BucketList from "./BucketList";
//import "./style.css";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };
    this.text = React.createRef();
  }

  componentDidMount() {
    //console.log(this.text);
    //console.log(this.text.current);
  }
  addBucket = () => {
    this.setState({ list: [...this.state.list, this.text.current.value] });
  };
  render() {
    return (
      <AppWrap className="App">
        <Container>
          <Title> 나의 버킷리스트</Title>
          <Line></Line>
          <BucketList list={this.state.list}></BucketList>
        </Container>
        <Container>
          <div>
            <input
              type="text"
              ref={this.text}
              onChange={() => {
                console.log(this.text.current.value);
              }}
            />
          </div>
          <button onClick={this.addBucket}>click</button>
        </Container>
      </AppWrap>
    );
  }
}

///////////////* styled-components 적용 */////////
const AppWrap = styled.div`
  background: #eee;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;
const Line = styled.hr`
  margin: 16px 0px;
`;

////////////////////* styled-components 연습 *//////////////////
// const MyStyled = styled.div`
//   width: 50vw;
//   height: 150px;
//   background-color: ${(props) => (props.bg_color ? "red" : "purple")};
//   /* scss 문법 */
//   p {
//     color: blue;
//   }
//   &:hover {
//     background-color: yellow;
//   }
// `;

export default App;

//////////////////////////* life Cycle prec *//////////////////////
// import LifecycleEx from "./LifecycleEx";
// import React from "react";
// function App() {
//   const [is_cat, setIsCat] = React.useState(true);
//   return (
//     <div className="App">
//       {is_cat ? <LifecycleEx /> : null}
//       <button
//         onClick={() => {
//           setIsCat(!is_cat);
//         }}
//       >
//         바꾸기
//       </button>
//     </div>
//   );
// }

// export default App;

/////////////////////* 함수형 리액트 선언 연습 *///////////////////////
//import { BucketList } from "./BucketList";

/* React class component  */
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <BucketList />
//       </div>
//     </div>
//   );
// }
