import React, { useState, ChangeEvent } from "react";
import uuid from 'react-uuid';

export interface noteObj {
  id: any;
  category: string;
  text: string;
  isArchived: boolean;
  timeCreate: any;
  date: any[];
}

export interface NewNoteInputProps {
  addNote(note: noteObj): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  // let dateArr: any = [];
  const [note, setNote] = useState<noteObj>({
    id: uuid(),
    category: "Task",
    text: "",
    isArchived: false,
    timeCreate: new Date().toLocaleString(),
    date: [],
  });

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNote((note) => ({ ...note, [name]: value }));
  };

  const updateSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setNote((note) => ({ ...note, category: event.target.value }));
  };

  const updateDate = (event: ChangeEvent<HTMLInputElement>) => {
    note.date.push(event.target.value);
    setNote((note) => ({ ...note, date: note.date }));
  };

  const addNoteClick = () => {
    if (note.text) {
      setNote((note) => ({ ...note, timeCreate: new Date().toLocaleString() }));
      addNote(note);
    } else {
      alert("enter task name");
    }
    setNote({
      id: uuid(),
      category: "Task",
      text: "",
      isArchived: false,
      timeCreate: new Date().toLocaleString(),
      date: [],
    });
  };

  return (
    <div>
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
        <input
          type="date"
          id="task-date-input"
          name="date"
          onChange={updateDate}
          value={note.date[note.date.length - 1] || ''}
        />
        <button onClick={addNoteClick}>Create task</button>
      </div>
    </div>
  );
};
