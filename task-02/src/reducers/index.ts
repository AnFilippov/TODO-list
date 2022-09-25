import { combineReducers } from "redux";

import archReducer from "./archReducer";
import noteReducer from "./noteReducer";

export const rootReduser = combineReducers({
	add: noteReducer,
	arch: archReducer
});

export type RootState = ReturnType<typeof rootReduser>;