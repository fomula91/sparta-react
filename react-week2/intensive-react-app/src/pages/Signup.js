import React from "react";
import { Grid, Text, Button, Input } from "../elements";

const Signup = (props) => {
  return (
    <>
      <Grid bg="red" padding="16px">
        <Grid>
          <Text bold size="32px">
            회원가입
          </Text>
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={() => {
              console.log("id");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="닉네임"
            placeholder="닉네임를 입력해주세요"
            _onChange={() => {
              console.log("nickname");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            _onChange={() => {
              console.log("password");
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요"
            _onChange={() => {
              console.log("pass2");
            }}
          />
        </Grid>
        <Button>로그인</Button>
      </Grid>
    </>
  );
};

Signup.defaultProps = {};

export default Signup;
