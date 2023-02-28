// create a big store reducer with combineReducers
import {combineReducers} from "redux";
import {counterReducer} from './counter/counter.reducer'
export const rootReducer = combineReducers({
    counter: counterReducer
})