import { Action, ActionTypes } from "../types/actionType";

export interface ArchState { notesArch: any[] };

const initialState: ArchState = { notesArch: [] };

const archReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ARCHIVE_NOTE: {
      return { ...state, notesArch: [...state.notesArch, action.payload] };
    }
    case ActionTypes.DELETE_ARCHIVE_NOTE: {
      return { notesArch: state.notesArch.filter((note) => note.id !== action.payload) };
    }
    // case "ARCHIVE_NOTE": {
    //   return { ...state, notesArch: state.notesArch.map((note) => note.id === action.payload ? { ...note, isArchived: !note.isArchived } : note) };
    // }
   
    default:
      return state;
  }
};

export default archReducer;