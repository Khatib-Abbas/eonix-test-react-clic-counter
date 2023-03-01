// contained selection based selectors
// extract object in the all global store
// state represent the global object store
// every time the state change and will rerun currentCounter and rerun the component
export const selectCurrentCounter = (state)=>state.counter.counterValue
