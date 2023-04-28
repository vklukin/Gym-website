import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser, TUserParams } from '../../types/IUser';
import { Api } from '../../core/Api';
import { ServerURI } from '../../core/configs';

export const getUser = createAsyncThunk<TUserParams, { userId: number }, { rejectValue: string }>(
    'getUser/getUser',
    async function (userId, { rejectWithValue }) {
        try {
            const response = await Api.get(`${ServerURI}/api/get/user/${userId.userId}/edit`, {
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
        ticket: null,
    },
    error: null,
    isLoading: false,
};

const GetUser = createSlice({
    name: 'getUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                console.log(state.error);
            });
    },
});

export default GetUser.reducer;
