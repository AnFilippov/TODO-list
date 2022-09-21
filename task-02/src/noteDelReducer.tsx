import { Delete } from "./actions";

export interface NoteState {
  notes: any[];
}

const initialState = {
  notes: [],
};

export const noteReducer = (
  state: NoteState = initialState,
  action: Delete
) => {
  switch (action.type) {
    case "DELETE_NOTE": {
      return {...state, notes: [...state.notes.filter((item) => item.text != action.payload]}
    }
    default:
      return state;
  }
};


