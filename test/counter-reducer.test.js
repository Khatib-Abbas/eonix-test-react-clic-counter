import {counterReducer} from "../src/store/counter/counter.reducer";
import {COUNTER_ACTION_TYPES} from "../src/store/counter/counter.types";


test('testing reducer with type COUNTER_ACTION_TYPES.SET_ADD_COUNTER ', () => {
    const mockState= {counterValue:0};
    const mockPayload={
        type:COUNTER_ACTION_TYPES.SET_ADD_COUNTER,
        payload:1
    }
    expect(counterReducer(mockState,mockPayload).counterValue).toBe(2);
});
test('testing reducer with type COUNTER_ACTION_TYPES.SET_MINUS_COUNTER ', () => {
    const mockState= {counterValue:0};
    const mockPayload={
        type:COUNTER_ACTION_TYPES.SET_MINUS_COUNTER,
        payload:1
    }
    expect(counterReducer(mockState,mockPayload).counterValue).toBe(0);
});