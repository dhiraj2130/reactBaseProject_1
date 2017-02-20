const addressReducer = (state={
    bio :null,
}, action) => {
    switch(action.type){
        case 'CHANGE_ADDRESS' :
            //state =  Object.assign({}, state.bio, {address:action.payload});
            //state.address = action.payload;
            return {...state, bio:action.payload}
            break;

        default : return state;
    }
}

export default addressReducer;