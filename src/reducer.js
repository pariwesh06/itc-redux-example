import { createSlice } from "@reduxjs/toolkit";
export const slice = createSlice({
    name: 'counter',
    initialState:{
        value: 0
    },
    reducers:{
        increment: function(state){
            console.log(state.value);
            state.value += 2;
        }
    }
});
export const selectCount = (state)=> state.counter.value;
export const {increment} = slice.actions;
export default slice.reducer;