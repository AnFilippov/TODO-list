import React from 'react';

import { noteObj } from '../NewNoteInput/NewNoteInput'

export interface ArchTask {
  note: noteObj;
  unArchive(note: noteObj): void;
  delArchNote(note: noteObj): void;
}

const Archive: React.FC<ArchTask> = ({ note, unArchive, delArchNote }) => {

  return (
    <div className="task">
      <span>{note.category}</span>
      <span>{note.timeCreate}</span>
      <span>{note.text}</span>
      <span>{note.date}</span>
      <button className="btn-task" onClick={() => unArchive(note)}>unarchive</button>
      <button className="btn-task" onClick={() => delArchNote(note)}>delete</button>
    </div>
  )
}

export default Archive;