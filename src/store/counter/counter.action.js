// import {createAction} from '../'
import {COUNTER_ACTION_TYPES} from "./counter.types";

export const setAddValueToCounter = (counter) =>({
    type: COUNTER_ACTION_TYPES.SET_ADD_COUNTER,
    payload:counter
});
export const setRemoveValueToCounter = (counter) => {
    return {
        type: COUNTER_ACTION_TYPES.SET_MINUS_COUNTER,
        payload:counter
    }
};