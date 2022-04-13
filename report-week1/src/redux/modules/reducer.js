//*********** MODULES ***********//
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

//*********** ACTION ***********//
const DEFAULT = "word/DEFAULT";
const CREATE = "word/CREATE";
const initState = [];

//*********** ACTION CREATER ***********//
export function defaultWord(variable) {
  return { type: DEFAULT, variable: variable };
}
export function createWord(word_list) {
  return { type: CREATE, word_list: word_list };
}

//*********** !!!!!!!!!MIDDLEWARES!!!!!! ***********//
export const createWordFB = (value) => {
  return async function (dispatch, getState) {
    const new_word = { word1: value[0], word2: value[1], word3: value[2] };
    const word_index = await addDoc(collection(db, "mywords"), new_word);
    dispatch(createWord(value));
  };
};
export const readWordFB = () => {
  return async function (dispatch) {
    const myword = await getDocs(collection(db, "mywords"));
    myword.forEach((value) => {
      const array = [
        value.data().word1,
        value.data().word2,
        value.data().word3,
      ];
      dispatch(createWord(array));
    });
  };
};

/* !!!!!!!!!!!!!!!!!! Reducer !!!!!!!!!!!!!!!!!!!!! */
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "word/DEFAULT": {
      console.log("hello redux!!");
      return state;
    }
    case "word/CREATE": {
      const new_word = [
        ...state,
        {
          word1: action.word_list[0],
          word2: action.word_list[1],
          word3: action.word_list[2],
        },
      ];

      return new_word;
    }
    default:
      return state;
  }
}
