import {setAddValueToCounter, setRemoveValueToCounter} from "../src/store/counter/counter.action";
import {COUNTER_ACTION_TYPES} from "../src/store/counter/counter.types";

test('testing action type return of addValueToCounter', () => {
    expect(setAddValueToCounter(1).type).toBe( COUNTER_ACTION_TYPES.SET_ADD_COUNTER);
});
test('testing action payload return of addValueToCounter', () => {
    expect(setAddValueToCounter(1).payload).toBe(1);
});
test('testing action type return of setRemoveValueToCounter', () => {
    expect(setRemoveValueToCounter(1).type).toBe( COUNTER_ACTION_TYPES.SET_MINUS_COUNTER);
});
test('testing action payload return of setRemoveValueToCounter', () => {
    expect(setAddValueToCounter(1).payload).toBe(1);
});

