import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducers/index";
import thank from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thank));
