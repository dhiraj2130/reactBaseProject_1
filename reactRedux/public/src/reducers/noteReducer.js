const noteReducer = (state={
    notes:[],
}, action) => {
    switch(action.type){
        case 'ADD_NOTE' :
            return [...state.notes, action.newNote];
            //state = [...state.notes, action.payload];
            // return {
            //     ...state,
            //     notes:[...state.notes,action.payload],
            // }
            break;
    
        default : return state;
    
    }
}

export default noteReducer;

// TOdO export noteReducer as some meaningful
// value as address or anything because it will becom
// part of store with this name