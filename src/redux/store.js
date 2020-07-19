import {createStore,combineReducers} from 'redux';
import menuReducer from "./reducer/menuReducer"

let rootReducer = combineReducers({
    menuReducer
  
})

const store = createStore(rootReducer);

export default store;