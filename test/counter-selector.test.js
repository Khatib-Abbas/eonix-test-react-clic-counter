import {selectCurrentCounter} from "../src/store/counter/counter.selector";
test('testing reducer with type COUNTER_ACTION_TYPES.SET_ADD_COUNTER ', () => {
    const mockState= {
        counter : {counterValue:0}
    }
    expect(selectCurrentCounter(mockState)).toBe(0);
});