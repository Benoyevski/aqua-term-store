import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRegisterData, IUser, IUserAuthData } from "../shared/types/types";

interface UserState {
    user: IUserAuthData | null;
    token: string | null;
    login: string | null;
    isLoading: boolean;
    error?: string | null;
}

const initialState: UserState = {
    user: null,
    login: localStorage.getItem("login"),
    token: localStorage.getItem("token"),
    isLoading: false,
    error: null,
};

export const fetchUser = createAsyncThunk<IUserAuthData, string | null>(
    "user/fetch",
    async (id, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:5000/auth/users/${id}`);

            const data = await res.json();
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    },
);

export const authorization = createAsyncThunk<IUserAuthData, Record<string, string>>(
    "user/auth",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Ошибка при авторизации пользователя");
            }

            const user = await response.json();
            if (user.error) {
                return rejectWithValue(user.error);
            }
            localStorage.setItem("token", user.token);
            localStorage.setItem("login", user.login);
            localStorage.setItem("id", user.id);

            return user as IUserAuthData;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const register = createAsyncThunk<IUser, IRegisterData>(
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

export const logout = createAction("user/logout");

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.login = null;
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
                state.error = action.error.message;
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
                state.error = action.error.message;
            })
            .addCase(authorization.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.token = action.payload.token;
                state.user = action.payload;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.user = action.payload;
                state.token = action.payload.token;
            })
            .addCase(logout, (state) => {
                state.token = null;
                state.user = null;
                state.login = null;
            });
    },
});

export default userSlice.reducer;
