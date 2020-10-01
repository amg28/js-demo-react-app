import { configureStore } from '@reduxjs/toolkit';
import requestCounter from './slices/requestCounterSlice';

export default configureStore({
    reducer: {
        requestCounter: requestCounter,
    },
});
