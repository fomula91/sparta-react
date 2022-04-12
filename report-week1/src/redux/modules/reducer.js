//*********** ACTION ***********//
const DEFAULT = "word/DEFAULT";
const initState = {
  word1: ["ㅎ1ㅎ1"],
  word2: ["히히를 벼형한 단어<br/>숫자 1을 l로 쓴다"],
  word3: ["저 친구가 초콜릿을 줬어 히히"],
};

//*********** ACTION CREATER ***********//
export function defaultWord(variable) {
  return { type: DEFAULT, variable: variable };
}

/* !!!!!!!!!!!!!!!!!! Reducer !!!!!!!!!!!!!!!!!!!!! */
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "word/DEFAULT": {
      console.log("hello redux!!");
      return state;
    }
    default:
      return state;
  }
}
