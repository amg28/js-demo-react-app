import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'characters',
    initialState: {
        value: [],
    },
    reducers: {
        setCharacters: (state, action) => {
            state.value = action.payload;
        },
    },
});

//Exports actions defined in Slice
export const {setCharacters} = slice.actions;

//Exports Selector for access to state value
export const charactersSelector = state => state.characters.value;

export default slice.reducer;