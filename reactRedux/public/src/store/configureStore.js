import  {  applyMiddleware, createStore } from 'redux';
import { reducers } from '../reducers'


// const persistedState = {
//   addressReducer:{ bio:'defaultName' }
// }
export const store = createStore(reducers/*, persistedState*/);
console.log('store = ' + JSON.stringify(store.getState()));

store.subscribe(() =>{
  console.log("store change",store.getState())
})

