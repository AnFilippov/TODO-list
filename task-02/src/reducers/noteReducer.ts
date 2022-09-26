import { Action, ActionTypes } from "../types/actionType";
export interface NoteState { notes: any[] };

const initialState: NoteState = { notes: [] };

const noteReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case ActionTypes.DELETE_NOTE: {
      return { notes: state.notes.filter((note) => note.id !== action.payload) };
    }
    case ActionTypes.UNARCHIVE_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case ActionTypes.EDIT_NOTE: {
      return { ...state, notes: state.notes.map((note) => note.id === action.payload.id ? { ...note, category: action.payload.category, text: action.payload.text } : note) };
    }
    default:
      return state;
  }
};

export default noteReducer;
