import React from 'react';

// import { noteObj } from './NewNoteInput'

export interface Total {
  notes: any[];
  archNotes: any[];
}

const TotalInfo: React.FC<Total> = ({ notes, archNotes }) => {
  // let categoryTAsk = notes.forEach((item) =>{if(item.category) {

  // }})
  // console.log(categoryTAsk);


  return (
    <div className="task">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>
  )
}

export default TotalInfo;