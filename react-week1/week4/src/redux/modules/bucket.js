// bucket.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";
const LOADED = "bucket/LOADED";

const initialState = {
  is_loaded: false,
  list: [],

  // list: ["영화관 가기", "매일 책읽기", "수영 배우기", "코딩 하기"],
};

// Action Creators
export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list: bucket_list };
}
export function createBucket(bucket) {
  return { type: CREATE, bucket: bucket };
}
export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index: bucket_index };
}
export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index: bucket_index };
}
export function isLoaded(loaded) {
  return { type: LOADED, loaded: loaded };
}

// middlewares

export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, "bucket"));
    //console.log(bucket_data);

    let bucket_list = [];

    bucket_data.forEach((doc) => {
      bucket_list.push({ id: doc.id, ...doc.data() });
    });
    //console.log(bucket_list);
    dispatch(loadBucket(bucket_list));
  };
};

export const addBucketFB = (bucket, isload) => {
  return async function (dispatch, getState) {
    dispatch(isLoaded(false));
    console.log(bucket);
    const docRef = await addDoc(collection(db, "bucket"), bucket);
    // const _bucket = await getDoc(docRef);
    const bucket_data = { id: docRef.id, ...bucket };
    //console.log(dispatch);

    dispatch(createBucket(bucket_data));
  };
};

export const updateBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "bucket", bucket_id);
    await updateDoc(docRef, { completed: true });

    //console.log(getState().bucket);
    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((index) => {
      return index.id === bucket_id;
    });
    dispatch(updateBucket(bucket_index));
    //console.log(bucket_index);
  };
};

export const deleteBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    if (!bucket_id) {
      window.alert("id가 없네요");
      return;
    }
    const docRef = doc(db, "bucket", bucket_id);
    await deleteDoc(docRef);
    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((index) => {
      return index.id === bucket_id;
    });
    dispatch(deleteBucket(bucket_index));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/LOAD": {
      return { list: action.bucket_list, is_loaded: true };
    }
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];

      return { ...state, list: new_bucket_list, is_loaded: true };
    }
    case "bucket/UPDATE": {
      const new_bucket_list = state.list.map((l, idx) => {
        if (parseInt(action.bucket_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });

      return { list: new_bucket_list };
    }
    case "bucket/DELETE": {
      const value = Number(action.bucket_index);
      const list = state.list;
      console.log(value);
      const result = list.filter((item, index) => {
        return index !== value ? item : "";
      });

      return { ...state, list: result };
    }
    case "bucket/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }
    default:
      return state;
  }
}
