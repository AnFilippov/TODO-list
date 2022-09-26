import React from 'react';

export interface Total {
  notes: any[];
  archNotes: any[];
}

const TotalInfo: React.FC<Total> = ({ notes, archNotes }) => {
  let activeTask = 0;
  let activeRand = 0;
  let activeIdea = 0;
  let archTask = 0;
  let archRand = 0;
  let archIdea = 0;

  notes.forEach((item) => {
    if (item.category === "Task") {
      activeTask += 1;
    } else if (item.category === "Random Thought") {
      activeRand += 1;
    } else if (item.category === "Idea") {
      activeIdea += 1;
    }
  });

  archNotes.forEach((item) => {
    if (item.category === "Task") {
      archTask += 1;
    } else if (item.category === "Random Thought") {
      archRand += 1;
    } else if (item.category === "Idea") {
      archIdea += 1;
    }
  });

  return (
    <div className="total">
      <div className="task titles">
        <span>Category</span>
        <span>Active</span>
        <span>Archived</span>
      </div>
      <div className="task">
        <span>Task</span>
        <span>{activeTask}</span>
        <span>{archTask}</span>
      </div>
      <div className="task">
        <span>Random Thought</span>
        <span>{activeRand}</span>
        <span>{archRand}</span>
      </div>
      <div className="task">
        <span>Idea</span>
        <span>{activeIdea}</span>
        <span>{archIdea}</span>
      </div>
    </div>
  )
}

export default TotalInfo;