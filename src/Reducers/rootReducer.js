const initialState = {
  example: "example",
  memeList: [],
  hot: [],
  num: 20,
  visibility: false,
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, num: state.num + action.value };
  }
  if (action.type === "UPDATE_LIST") {
    const memesArr = JSON.parse(action.value);
    return { ...state, memeList: memesArr.memes };
  }
  return state;
};
