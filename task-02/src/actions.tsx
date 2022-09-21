
export type Action = { type: "ADD_NOTE"; payload: object };
export type Delete = {type: "DELETE_NOTE"; payload: object };

export const addNote = (note: object): Action => ({
  type: "ADD_NOTE",
  payload: note,
});

export const removeNote = (delNote: object): Delete => ({
  type: "DELETE_NOTE",
  payload: delNote,
});
