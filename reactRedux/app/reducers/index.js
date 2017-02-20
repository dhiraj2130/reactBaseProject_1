import  { combineReducers } from 'redux';

import addressReducer from './addressReducer';
import  noteReducer from './noteReducer';

export default combineReducers({
    addressReducer,
        noteReducer,
})