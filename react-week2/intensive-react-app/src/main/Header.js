import React, { useState, useEffect } from "react";
import { Text, Grid, Button } from "../elements";
import Permit from "./Permit";
import { getCookie, delCookie } from "../main/Cookie";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";
import { apiKey } from "../main/firebase";
const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  console.log(is_session);
  // if (is_login && is_session)
  //   return (

  //   );

  <Permit>
    <>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            hello
          </Text>
        </Grid>
        <Grid is_flex>
          <Button text="내정보" _onClick={() => {}} />
          <Button text="알림" _onClick={() => {}} />
          <Button text="로그아웃" _onClick={() => {}} />
        </Grid>
      </Grid>
    </>
  </Permit>;
  return (
    <>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            hello
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push("/login");
            }}
          />
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
