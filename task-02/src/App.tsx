import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNote } from "./actions";
import { NewNoteInput } from "./NewNoteInput";
import { NoteState } from "./noteReducer";
import { noteObj } from "./NewNoteInput";

import "./App.css";

function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );
  const dispatch = useDispatch();

  const onAddNote = (note: noteObj) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <div className="task titles">
        <span>Category</span>
        <span>Created</span>
        <span>Content</span>
        <span>Date</span>
      </div>

      {notes.map((note) => {
        return (
          <div key={note.timeCreate} className="task">
            <span>{note.category}</span>
            <span>{note.timeCreate}</span>
            <span>{note.text}</span>
            <span>{note.date}</span>
          </div>
        );
      })}
      <NewNoteInput addNote={onAddNote} />
    </>
  );
}

export default App;
