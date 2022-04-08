// import logo from "./logo.svg";
// import "./App.css";
// import Text from "./Text";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Cat from "./Cat";
import Dog from "./Dog";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">HOME으로 가기</Link>
        <Link to="/cat">CAT으로 가기</Link>
        <Link to="/dog">DOG으로 가기</Link>
      </div>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cat" component={Cat}>
        {/* <Cat /> */}
      </Route>
      <Route path="/dog">
        <Dog />
      </Route>
    </div>
  );
}
export default App;
/* 이벤트 리스터 연습 */
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//     this.circle = React.createRef(null);
//   }
//   hoverEvent = (e) => {
//     console.log(e.target);
//     console.log(this.circle.current);
//     this.circle.current.style.background = "yellow";
//   };
//   componentDidMount() {
//     console.log(this.circle);
//     this.circle.current.addEventListener("mouseover", this.hoverEvent);
//   }

//   componentWillUnmount() {
//     this.circle.current.removeEventListener("mouseover", this.hoverEvent);
//   }

//   render() {
//     return (
//       <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
//         <Text />
//         <div
//           style={{
//             margin: "auto",
//             width: "250px",
//             height: "250px",
//             background: "green",
//             borderRadius: "250px",
//           }}
//           ref={this.circle}
//         ></div>
//       </div>
//     );
//   }
// }

// export default App;
