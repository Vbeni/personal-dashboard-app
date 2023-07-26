import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//tracks note being typed
const Notes = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes); 

  const addNote = () => {
    if(note.trim()) { 
      dispatch({ type: 'ADD_NOTE', payload: note });
      setNote('');
    }
  };


  return (
    <div>
      <input 
        type="text" 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
        placeholder="Enter a note" 
      />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((noteItem, index) => (
          <li key={index}>{noteItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
