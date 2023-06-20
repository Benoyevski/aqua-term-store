import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILoginFormData, IUser } from "../app/types/types";

interface UserState {
    user: IUser | null;
    token: string;
    isLoading: boolean;
    error?: string | null;
}

const initialState: UserState = {
    user: null,
    token: "",
    isLoading: false,
    error: null,
};

export const register = createAsyncThunk<IUser, ILoginFormData>(
    "user/create",
    async ({ login, email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ login, email, password }),
            });

            if (!response.ok) {
                throw new Error("Ошибка при регистрации пользователя");
            }
            const newUser: IUser = await response.json();
            return newUser;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.user = action.payload;
            });
    },
});

export default userSlice.reducer;
