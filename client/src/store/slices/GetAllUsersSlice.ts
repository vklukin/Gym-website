import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TUserParams } from '../../types/IUser';
import { Api } from '../../core/Api';
import { ServerURI } from '../../core/configs';

export const getUsers = createAsyncThunk<TUserParams[], undefined, { rejectValue: string }>(
    'GetUsers/getUsers',
    async function (_, { rejectWithValue }) {
        try {
            const response = await Api.get(`${ServerURI}/api/get/users`, {
                withCredentials: true,
            });

            return await response.data;
        } catch (e) {
            return rejectWithValue(`Server error. ${e}`);
        }
    }
);

type TInitialState = {
    users: TUserParams[] | null;
    error: string | null | undefined;
    isLoading: boolean;
};

const initialState: TInitialState = {
    users: null,
    error: null,
    isLoading: false,
};

const GetAllUsers = createSlice({
    name: 'usersManipulation',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(action.payload);
            });
    },
});

export default GetAllUsers.reducer;
