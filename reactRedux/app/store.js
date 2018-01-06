import  {  applyMiddleware, createStore } from 'redux';
import reducer from './reducers'


const persistedState = {
  addressReducer:{ bio:'defaultName' }
}
 const store = createStore(reducer, persistedState);
 console.log('store = ' + JSON.stringify(store.getState()));

 store.subscribe(() =>{
  console.log("store change",store.getState())
})

export default store;