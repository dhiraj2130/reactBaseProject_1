const noteReducer = (state={
    notes:[],
}, action) => {
    switch(action.type){
        case 'ADD_NOTE' :
            //return [...state.notes, action.newNote];
            //state = [...state.notes, action.payload];
            return {
                ...state,
                notes:[...state.notes,action.payload],
            }
            break;
    
        default : return state;
    
    }
}

export default noteReducer;