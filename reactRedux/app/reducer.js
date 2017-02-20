
export function reducer(state, action){
    "use strict";
    switch(action.type){
        case 'INC' : return state + action.payload;
        default : return state;

    }
}

