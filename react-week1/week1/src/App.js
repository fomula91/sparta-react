import logo from "./logo.svg";
import "./App.css";

function App() {
  const styles = {
    border: "1px solid #eee",
    padding: "20px",
    width: "200px",
    margin: "30px auto",
  };
  return (
    <div>
      <div style={styles}>
        <h1 style={{ color: "green", textAlign: "center" }}>안녕하세요!</h1>
        <hr></hr>
        <p style={{ textAlign: "left" }}>이름을 입력해주세요</p>
        <input style={{ ailgnItem: "center" }}></input>
      </div>
    </div>
  );
}

export default App;
