import React, { useState, ChangeEvent, useEffect } from "react";
import { noteObj } from "../NewNoteInput/NewNoteInput";
import './modal.css';
import uuid from 'react-uuid';

export interface Mod {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  noteEdit: noteObj;
  editTask(note: noteObj): void;
}

const Modal: React.FC<Mod> = (props) => {

  const { active, setActive, noteEdit, editTask } = props;

  const [note, setNote] = useState<noteObj>({
    id: "",
    category: "",
    text: "",
    isArchived: false,
    timeCreate: '',
    date: " ",
  })


  useEffect(() => { setNote(noteEdit) }, [noteEdit]);

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNote((note) => ({ ...note, [name]: value }));
  };

  const updateSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setNote((note) => ({ ...note, category: event.target.value }));
  };

  const editNoteClick = () => {
    editTask(note);
    setActive(false);
    setNote({
      id: uuid(),
      category: "Task",
      text: "",
      isArchived: false,
      timeCreate: new Date().toLocaleString(),
      date: " ",
    });
  };

  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className="modal-body" onClick={e => e.stopPropagation()}>
        <div>
          <div className="close" onClick={() => setActive(false)}>&times;</div>
          <h2>Edit task</h2>
          <div className="input-panel task-create">
            <select
              id="task-category-input"
              name="category"
              onChange={updateSelect}
              value={note.category}
            >
              <option value="Task">Task</option>
              <option value="Random Thought">Random Thought</option>
              <option value="Idea">Idea</option>
            </select>
            <input
              value={note.text}
              type="text"
              name="text"
              placeholder="Note"
              onChange={updateNote}
            />
            <button onClick={editNoteClick}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;