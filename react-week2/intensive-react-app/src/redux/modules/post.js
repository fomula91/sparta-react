import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../main/firebase";

// action
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post_list) => post_list);

const initialState = {
  list: [],
};

const initialPost = {
  ser_info: {
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

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();

        //['comment_cnt', 'contents', ...]
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        post_list.push(post);
      });

      console.log(post_list);
      // {}중괄호가 없다면 키:밸류 값으로 넣을수 없다
      // 중괄호가 없다면 payload에 값만 들어간다
      dispatch(setPost(post_list));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
};
export { actionCreators };
