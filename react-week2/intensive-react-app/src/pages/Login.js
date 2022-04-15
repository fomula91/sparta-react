import React, { useRef } from "react";
import { Grid, Text, Button, Input } from "../elements";
import { getCookie, setCookie, delCookie } from "../main/Cookie";

const Login = (props) => {
  console.log(getCookie("user_id"));

  const login = () => {
    setCookie("user_id", "perl", 3);
    setCookie("user_pwd", "ddd", 3);
  };

  return (
    <>
      <Grid bg="red" padding="16px">
        <Grid>
          <Text bold size="32px">
            로그인
          </Text>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={() => {}}
          />
        </Grid>
        <Grid>
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            _onChange={() => {}}
          />
        </Grid>
        <Button text="로그인" _onClick={login} />
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
