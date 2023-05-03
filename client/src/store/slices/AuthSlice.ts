import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser, TUserParams } from '../../types/IUser';
import { Api } from '../../core/Api';
import { ServerURI } from '../../core/configs';

type TUserData = {
    email: string;
    password: string;
};

export const authorize = createAsyncThunk<TUserParams, TUserData, { rejectValue: string }>(
    'auth/authorize',
    async function (userData, { rejectWithValue }) {
        try {
            const response = await Api.post(`${ServerURI}/api/post/auth/login`, userData, {
                withCredentials: true,
            });

            return await response.data;
        } catch (e) {
            return rejectWithValue(`Server error. ${e}`);
        }
    }
);

export const logout = createAsyncThunk<void, undefined, { rejectValue: string }>(
    'auth/logout',
    async function (_, { rejectWithValue }) {
        try {
            await Api.post(`${ServerURI}/api/post/auth/logout`, _, {
                withCredentials: true,
            });
        } catch (e) {
            return rejectWithValue(`Server error. ${e}`);
        }
    }
);

export const checkToken = createAsyncThunk<TUserParams, undefined, { rejectValue: string }>(
    'auth/checkToken',
    async function (_, { rejectWithValue }) {
        try {
            const response = await Api.post(`${ServerURI}/api/token/check`, _, {
                withCredentials: true,
            });

            return await response.data;
        } catch (e) {
            return rejectWithValue(`Server error. ${e}`);
        }
    }
);

const initialState: IUser = {
    user: {
        id: null,
        name: '',
        email: '',
        createAt: '',
        role: '',
        status: '',
        isAuth: false,
        ticket: null,
    },
    error: null,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        insertUserData(state, action) {
            state.user = JSON.parse(action.payload);
            state.user.isAuth = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authorize.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(authorize.fulfilled, (state, action) => {
                state.user = action.payload;
                state.user.isAuth = true;
                state.isLoading = false;
                window.localStorage.setItem('Auth-Session', JSON.stringify(action.payload));
            })
            .addCase(authorize.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(state.error);
            })
            .addCase(checkToken.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(checkToken.fulfilled, (state, action) => {
                state.user = action.payload;
                state.user.isAuth = true;
                state.isLoading = false;
                window.localStorage.setItem('Auth-Session', JSON.stringify(action.payload));
            })
            .addCase(checkToken.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                window.localStorage.clear();
                window.sessionStorage.clear();
                console.log(state.error);
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.user = initialState.user;
                window.localStorage.clear();
                window.sessionStorage.clear();
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(state.error);
            });
    },
});

export const { insertUserData } = authSlice.actions;
export default authSlice.reducer;
