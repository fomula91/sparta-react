import React from "react";
import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <>
      <Grid padding="16px">
        <Grid is_flex padding="16px">
          <Image shape="circle" src={props.user_info.user_profile}></Image>
          <Text>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>

          <Image shape="rectangle" src={props.image_url}></Image>
        </Grid>
        <Grid></Grid>
        <Grid>
          <Text>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </>
  );
};

//필요한 props를 미리 던저주는 것
//props가 없을때 오류가 나는것을 방지 하기위함
Post.defaultProps = {
  user_info: {
    user_name: "wellbing",
    user_profile:
      "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  },
  image_url:
    "https://opgg-com-image.akamaized.net/attach/images/20190413131212.806445.jpeg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export default Post;
