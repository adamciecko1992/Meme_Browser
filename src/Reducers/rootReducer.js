const initialState = {
  example: "example",
  memeList: "regular",
  hot: "hot",
  num: 20,
  visibility: false,
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, num: state.num + action.value };
  }
  if (action.type === "UPDATE_LIST") {
    return { ...state, memeList: action.value };
  }

  return state;
};
