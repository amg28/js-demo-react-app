import {createSlice} from '@reduxjs/toolkit';

//Defines a slice with reducer increment. Reducer will be used to increase value by 1
export const slice = createSlice({
    name: 'requestCounter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
    },
});

//Exports actions defined in Slice
export const {increment} = slice.actions;

//Exports Selector for access to state value
export const countSelector = state => state.requestCounter.value;

export default slice.reducer;