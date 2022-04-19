import React, { useRef } from "react";
import { Grid, Text, Button, Input } from "../elements";
import { getCookie, setCookie, delCookie } from "../main/Cookie";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다.");
      return;
    }
    dispatch(userActions.loginFB(id, pwd));
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
            value={id}
            placeholder="아이디를 입력해주세요"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </Grid>
        <Grid>
          <Input
            label="비밀번호"
            value={pwd}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </Grid>
        <Button text="로그인" _onClick={login} />
      </Grid>
    </>
  );
};

// Login.defaultProps = {
//   // user_info: {
//   //   user_id: "wellbing",
//   //   user_pass: "hahakiki11",
//   // },
// };

export default Login;
