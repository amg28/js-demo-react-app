import { configureStore } from '@reduxjs/toolkit';
import requestCounter from './slices/requestCounterSlice';
import characters from './slices/charactersSlice';

export default configureStore({
    reducer: {
        requestCounter: requestCounter,
        characters:  characters,
    },
});
