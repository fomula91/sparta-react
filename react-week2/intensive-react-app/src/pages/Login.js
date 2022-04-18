import React, { useRef } from "react";
import { Grid, Text, Button, Input } from "../elements";
import { getCookie, setCookie, delCookie } from "../main/Cookie";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };
  const changePwd = (e) => {
    setPwd(e.target.value);
  };
  const login = () => {
    dispatch(userActions.loginAction({ user_name: "perl" }));
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
            _onChange={changeId}
          />
        </Grid>
        <Grid>
          <Input
            label="비밀번호"
            value={pwd}
            placeholder="비밀번호를 입력해주세요"
            _onChange={changePwd}
          />
        </Grid>
        <Button text="로그인" _onClick={() => login()} />
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
