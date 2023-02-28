import {COUNTER_ACTION_TYPES} from "../src/store/counter/counter.types";

test('testing the value of the constant SET_MINUS_COUNTER', () => {
    expect(COUNTER_ACTION_TYPES.SET_MINUS_COUNTER).toBe("SET_MINUS_COUNTER");
});
test('testing the value of the constant SET_ADD_COUNTER', () => {
    expect(COUNTER_ACTION_TYPES.SET_ADD_COUNTER).toBe("SET_ADD_COUNTER");
});