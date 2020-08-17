import { createStore, combineReducers } from "redux";
import memeReducer from "./Reducers/rootReducer";
import widthReducer from "./Reducers/widthReducer";

const reducers = combineReducers({
  memes: memeReducer,
  clientWidth: widthReducer,
});

const initialState = {};

const store = createStore(reducers, initialState);

export default store;
