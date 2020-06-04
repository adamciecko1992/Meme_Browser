const initialState = {
  example: "example",
  memeList: [],
  hot: [],
  num: 20,
  visibility: false,
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_LIST") {
    const newHotList = [...action.value].filter(
      (meme) => meme.upvotes - meme.downvotes > 5
    );
    return { ...state, memeList: action.value, hot: newHotList };
  }
  if (action.type === "UPVOTE") {
    const newMemeList = [...state.memeList];
    newMemeList[action.value].upvotes += 1;
    const newHotList = [...state.memeList].filter(
      (meme) => meme.upvotes - meme.downvotes >= 5
    );
    return { ...state, memeList: newMemeList, hot: newHotList };
  }
  if (action.type === "DOWNVOTE") {
    const newMemeList = [...state.memeList];
    newMemeList[action.value].downvotes += 1;
    const newHotList = [...state.memeList].filter(
      (meme) => meme.upvotes - meme.downvotes >= 5
    );
    return { ...state, memeList: newMemeList, hot: newHotList };
  }
  return state;
};
