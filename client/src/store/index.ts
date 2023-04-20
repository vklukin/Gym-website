import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';

const store = configureStore({
    reducer: {
        Auth: AuthSlice,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
