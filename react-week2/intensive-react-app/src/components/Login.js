import React from "react";
import { Grid, Text, Button, Input } from "../elements";

const Login = (props) => {
  return (
    <>
      <Grid bg="red" padding="10px">
        <Input></Input>
        <Button bg="black">로그인</Button>
      </Grid>
    </>
  );
};

Login.defaultProps = {
  user_info: {
    user_id: "wellbing",
    user_pass: "hahakiki11",
  },
};

export default Login;
