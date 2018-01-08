const addressReducer = (state={
    bio :null,
}, action) => {
    switch(action.type){
        case 'CHANGE_ADDRESS' :
            state =  Object.assign({}, state.bio, {address:action.payload});
            //state.address = action.payload;
            // return {...state, bio:action.payload}
            return state;
            break;

        default : return state;
    }
}

export default addressReducer;

// TOdO export addressReducer as some meaningful
// value as address or anything because it will becom
// part of store with this name