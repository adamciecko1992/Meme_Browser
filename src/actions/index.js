export const updateMemeList = (memeList) => {
  return { type: "UPDATE_LIST", value: memeList };
};
export const upvote = (clickedMemeIndex) => {
  return { type: "UPVOTE", value: clickedMemeIndex };
};
export const downvote = (clickedMemeIndex) => {
  return { type: "DOWNVOTE", value: clickedMemeIndex };
};
export const changeWidth = (width) => {
  return { type: "UPDATE_WIDTH", value: width };
};
