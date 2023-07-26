import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const NoteItem = styled.li`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding: 10px;
`;

const DeleteButton = styled.button`
  background-color: #f44336;  // Red color
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e53935;  // Darker red on hover
  }
`;


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
          <NoteItem key={index}>{noteItem}
          <DeleteButton onClick={() => dispatch({ type: 'DELETE_NOTE', payload: index })}>
            Delete
          </DeleteButton>
          </NoteItem>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
