import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRegisterData, IUser } from "../shared/types/types";

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: any;
}

const storedUser = localStorage.getItem("user");
const initialState: UserState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    isLoading: false,
    error: null,
};

export const authorization = createAsyncThunk<IUser, Record<string, string>>(
    "user/auth",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include",
            });

            if (!response.ok) {
                const err = await response.json();
                return rejectWithValue(err);
            }

            const user = await response.json();
            if (user.error) {
                return rejectWithValue(user.error);
            }
            localStorage.setItem("user", JSON.stringify(user));
            return user as IUser;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const register = createAsyncThunk<string, IRegisterData>(
    "user/register",
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
                const err = await response.json();
                return rejectWithValue(err);
            }

            const newUser = await response.json();
            return newUser;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(register.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            })
            .addCase(authorization.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(authorization.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.user = null;
            })
            .addCase(authorization.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.user = action.payload;
            });
    },
});

export const { logout, clearError } = userSlice.actions;

export default userSlice.reducer;
