const initialState = {
    //initialize empty notes array 
    notes: []
  };
  
  //modifies state based on action (Add note for now )
  const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return { ...state, notes: [...state.notes, action.payload] };
      //delete note using filter   
      case 'DELETE_NOTE':
        return { 
          ...state, 
          notes: state.notes.filter((_, index) => index !== action.payload)
        };
        //copy of current note and then replacing with edit
      case 'EDIT_NOTE':
        const updatedNotes = [...state.notes];
        updatedNotes[action.payload.index] = action.payload.newContent;
            return { ...state, notes: updatedNotes };
          default:
            return state;
    }
  };
  
  
  export default notesReducer;
  