import { Action } from "./actions";

export interface NoteState {
  notes: any[];
}

const initialState = {
  notes: [],
};

export const noteReducer = (
  state: NoteState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    default:
      return state;
  }
};
