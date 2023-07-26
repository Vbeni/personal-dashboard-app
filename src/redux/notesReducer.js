const initialState = {
    //initialize empty notes array 
    notes: []
  };
  
  //modifies state based on action (Add note for now )
  const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return { ...state, notes: [...state.notes, action.payload] };
      default:
        return state;
    }
  };
  
  export default notesReducer;
  