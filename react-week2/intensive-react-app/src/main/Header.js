import React, { useState, useEffect } from "react";
import { Text, Grid, Button } from "../elements";
import { getCookie, delCookie } from "../main/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreator as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  if (is_login)
    return (
      <>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="0px" size="24px" bold>
              hello
            </Text>
          </Grid>
          <Grid is_flex>
            <Button text="내정보" />
            <Button text="알림" />
            <Button
              text="로그아웃"
              _onClick={() => {
                delCookie("user_id");
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  return (
    <>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            hello
          </Text>
        </Grid>
        <Grid is_flex>
          <Button text="로그인" />
          <Button text="회원가입" />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
