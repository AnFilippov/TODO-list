import React from 'react';

import { noteObj } from '../NewNoteInput/NewNoteInput'

export interface NewTask {
  note: noteObj;
  toArchive(note: noteObj): void;
  delNote(note: noteObj): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  setEditNote: React.Dispatch<React.SetStateAction<noteObj>>;
}

const Task: React.FC<NewTask> = ({ note, toArchive, delNote, setActive, setEditNote }) => {

  let str: string = note.text;
  let resDate: any = str.match(/\d{2}(\D)\d{2}\1\d{4}/g);

  const editHandle = (note: noteObj) => {
    setActive(true);
    setEditNote(note);
  }

  return (
    <div className="task">
      <span>{note.category}</span>
      <span>{note.timeCreate}</span>
      <span>{note.text}</span>
      <span>{resDate.join(", ")}</span>
      <button className="btn-task" onClick={() => editHandle(note)}>edit</button>
      <button className="btn-task" onClick={() => toArchive(note)}>archive</button>
      <button className="btn-task" onClick={() => delNote(note)}>delete</button>
    </div>
  )
}

export default Task;