const initialState = {
  example: "example",
  memeList: [],
  hot: [],
  num: 20,
  visibility: false,
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_LIST") {
    return { ...state, memeList: action.value.memes };
  }
  return state;
};
