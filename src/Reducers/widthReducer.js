const initialState = 0;

const widthReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_WIDTH") {
    return action.value;
  }

  return state;
};

export default widthReducer;
