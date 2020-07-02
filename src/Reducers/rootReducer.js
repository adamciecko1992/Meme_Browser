const initialState = {
  memeList: [],
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_LIST") {
    console.log(action.value);
    return { ...state, memeList: action.value };
  }
  if (action.type === "UPVOTE") {
    const newMemeList = [...state.memeList];
    newMemeList[action.value].upvotes += 1;
    return { ...state, memeList: newMemeList };
  }
  if (action.type === "DOWNVOTE") {
    const newMemeList = [...state.memeList];
    newMemeList[action.value].downvotes += 1;
    return { ...state, memeList: newMemeList };
  }
  return state;
};
