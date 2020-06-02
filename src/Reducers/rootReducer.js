const initialState = {
  example: "example",
  memeList: [],
  hot: [],
  regular: "regular",
  num: 20,
  visibility: false,
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, num: state.num + action.value };
  }
  if (action.type === "TOGGLE") {
    return {
      ...state,
      visibility: !state.visibility,
    };
  }
  return state;
};
