// bucket.js

// Actions
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";

const initialState = {
  list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"],
};

// Action Creators
export function createBucket(bucket) {
  console.log("액션을 실행할꺼야");
  return { type: CREATE, bucket: bucket };
}
export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index: bucket_index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      console.log(" 둘의 값을 바꿀꺼야!");
      const new_bucket_list = [...state.list, action.bucket];
      return { list: new_bucket_list };
    }
    case "bucket/DELETE": {
      const value = Number(action.bucket_index);
      const list = state.list;
      const result = list.filter((item, index) => {
        return index !== value ? item : "";
      });

      return { list: result };
    }
    default:
      return state;
  }
}
