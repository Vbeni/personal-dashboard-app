import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const NoteItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;

  button {
    margin-left: 5px;
  }
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

const EditInput = styled.input`
  border: 2px solid #0099ff;  // Blue border
  margin-right: 10px;
  padding: 5px;
`;



//tracks note being typed
const Notes = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.notes); 
  const [editingIndex, setEditingIndex] = useState(null);
  const [editContent, setEditContent] = useState('');
  
  const addNote = () => {
    if(note.trim()) { 
      dispatch({ type: 'ADD_NOTE', payload: note });
      setNote('');
    }
  };
  
  const beginEdit = (index) => {
    setEditingIndex(index);
    setEditContent(notes[index]);
  };
  
  const saveEdit = () => {
    dispatch({ type: 'EDIT_NOTE', payload: { index: editingIndex, newContent: editContent } });
    setEditingIndex(null);
    setEditContent('');
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
    <NoteItem key={index}>
      {editingIndex === index ? (
        <>
          <EditInput
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{noteItem}</span>
          <button onClick={() => beginEdit(index)}>Edit</button>
          <DeleteButton onClick={() => dispatch({ type: 'DELETE_NOTE', payload: index })}>
            Delete
          </DeleteButton>
        </>
      )}
    </NoteItem>
  ))}
</ul>

    </div>
  );
};

export default Notes;
