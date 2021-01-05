import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: function (state) {
            //ajax
            console.log(state.value);
            state.value += 2;
        },
        decrement:function (state) {
            //ajax
            console.log(state.value);
            state.value -= 2;
        }
    }
});
export const selectCount = (state) => {
    console.log(state.counter);
    return state.counter.value;
}
export const { increment, decrement } = slice.actions;
export default slice.reducer;