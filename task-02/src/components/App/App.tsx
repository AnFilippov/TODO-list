import React, { useState } from "react";
import uuid from 'react-uuid';
import { useDispatch } from "react-redux";
import { addNote } from "../../action/actions";
import { removeNote } from "../../action/actions";
import { editNote } from "../../action/actions";
import { removeArchiveNote } from "../../action/actions"
import { unArchiveNote } from "../../action/actions"
import { archiveNote } from "../../action/actions";
import { NewNoteInput } from "../NewNoteInput/NewNoteInput";
import { noteObj } from "../NewNoteInput/NewNoteInput";
import "./App.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Task from "../Task/task";
import Archive from "../Archive/Archive";
import TotalInfo from "../TotalInfo/totalInfo";
import Modal from "../Modal/Modal";


function App() {
  let arr = null;
  const [arch, setArch] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [noteEdit, setEditNote] = useState<noteObj>({
    id: uuid(),
    category: "",
    text: "",
    isArchived: false,
    timeCreate: '',
    date: [],
  });

  const notes = useTypedSelector(
    (state) => state.add.notes
  );

  const archNotes = useTypedSelector(
    (state) => state.arch.notesArch
  );

  const dispatch = useDispatch();

  const onAddNote = (note: noteObj) => {
    dispatch(addNote(note));
  };

  const delNote = (note: noteObj) => {
    dispatch(removeNote(note));
  };

  const delArchNote = (note: noteObj) => {
    dispatch(removeArchiveNote(note));
  }

  const toArchive = (note: noteObj) => {
    dispatch(archiveNote(note));
    delNote(note);
  }

  const unArchive = (note: noteObj) => {
    dispatch(unArchiveNote(note));
    delArchNote(note);
  }

  const showArchive = () => {
    setArch(true);
  }

  const showTasks = () => {
    setArch(false);
  }

  const editTask = (note: noteObj) => {
    dispatch(editNote(note));
  };

  let title: string = '';
  if (!arch) {
    arr = notes;
    title = "All tasks"
  } else {
    arr = archNotes;
    title = "Archive"
  }

  return (
    <>
      <div className="title-page">{title}</div>
      <div className="task titles">
        <span>Category</span>
        <span>Created</span>
        <span>Content</span>
        <span>Date</span>
      </div>

      {
        arr.map((note) => {
          return (
            !arch ?
              <Task key={uuid()} note={note} toArchive={toArchive} delNote={delNote} setActive={setModalActive} setEditNote={setEditNote} /> :
              <Archive key={uuid()} note={note} unArchive={unArchive} delArchNote={delArchNote} />
          );
        })
      }
      {!arch ? <NewNoteInput addNote={onAddNote} /> : <div></div>}
      <div className="input-panel">
        <button id="show-all-btn" onClick={showTasks}>All task</button>
        <button id="show-archived-btn" onClick={showArchive}>Archived task</button>
      </div>
      <TotalInfo notes={notes} archNotes={archNotes} />
      <Modal active={modalActive} setActive={setModalActive} noteEdit={noteEdit} />
    </>
  );
}

export default App;
