import React from "react";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Grid } from "../elements";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <>
      <Grid isRoot>
        <BrowserRouter>
          <Grid>
            <Header></Header>
          </Grid>
          <Routes>
            <Route path="/" element={<PostList />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </>
  );
}

export default App;
