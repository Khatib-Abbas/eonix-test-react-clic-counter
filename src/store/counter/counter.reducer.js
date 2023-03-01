// Pure functions that changes the states of the reducer
import {COUNTER_ACTION_TYPES} from "./counter.types";

const INITIAL_STATE = {
    counterValue : 0
}
export const counterReducer = (state=INITIAL_STATE,action)=>{
    const {type,payload} = action;
    switch (type) {
        case COUNTER_ACTION_TYPES.SET_ADD_COUNTER:
            return {...state,counterValue: payload+1}
        case COUNTER_ACTION_TYPES.SET_MINUS_COUNTER:
            return {...state,counterValue: payload-1}
        default:
            return state
    }
}