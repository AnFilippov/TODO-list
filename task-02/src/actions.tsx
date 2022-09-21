export type Action = { type: "ADD_NOTE"; payload: object };

export const addNote = (note: object): Action => ({
  type: "ADD_NOTE",
  payload: note,
});
