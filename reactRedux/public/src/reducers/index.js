import  { combineReducers } from 'redux';

import addressReducer from './addressReducer';
import  noteReducer from './noteReducer';

export const reducers =  combineReducers({
    addressReducer,
        noteReducer,
})


// TODO use another name for addressReducer and
// noteReducer as it is stored in state with these
// names