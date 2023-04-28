import { configureStore } from '@reduxjs/toolkit';

import AuthSlice from './slices/AuthSlice';
import GetAllUsers from './slices/GetAllUsersSlice';
import GetUser from './slices/GetUserSlice';

const store = configureStore({
    reducer: {
        Auth: AuthSlice,
        GetAllUsers: GetAllUsers,
        GetUser: GetUser,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
