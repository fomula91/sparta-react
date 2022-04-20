import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Text, Button } from "../elements/index";

const PostWrite = (props) => {
  const is_login = useSelector((state) => state.user.is_login);
  const { history } = props;
  console.log(is_login);

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인 하러 가기
        </Button>
      </Grid>
    );
  }
};
