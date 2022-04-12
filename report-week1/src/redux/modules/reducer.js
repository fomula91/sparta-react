//*********** ACTION ***********//
const DEFAULT = "word/DEFAULT";
const CREATE = "word/CREATE";
const initState = [
  {
    word1: "ㅎ1ㅎ1",
    word2: "히히를 벼형한 단어<br/>숫자 1을 l로 쓴다",
    word3: "저 친구가 초콜릿을 줬어 히히",
  },
];

//*********** ACTION CREATER ***********//
export function defaultWord(variable) {
  return { type: DEFAULT, variable: variable };
}
export function createBucket(word_list) {
  return { type: CREATE, word_list: word_list };
}

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
      console.log(new_word);

      return new_word;
    }
    default:
      return state;
  }
}
