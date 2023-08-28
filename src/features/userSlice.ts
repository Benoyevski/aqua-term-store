import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IRegisterData, IUser } from "../shared/types/types";
import { serverUrl } from "../serverUrl";

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: unknown;
}

const storedUser = localStorage.getItem("user");
const initialState: UserState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    isLoading: false,
    error: null,
};

export const fetchUser = createAsyncThunk<unknown, string>(
    "user/fetch",
    async (id, { rejectWithValue }) => {
        try {
            const response = await fetch(`${serverUrl}auth/users/${id}`, {
                credentials: "include",
            });

            if (!response.ok) {
                const err = await response.json();
                return rejectWithValue(err);
            }

            const user = await response.json();
            return user;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const changePassword = createAsyncThunk<IUser, { id: string; password: string }>(
    "password/change",
    async ({ id, password }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${serverUrl}auth/changePassword`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id, password }),
                credentials: "include",
            });

            if (!response.ok) {
                const err = await response.json();
                return rejectWithValue(err);
            }

            const user = await response.json();
            return user as IUser;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);

export const authorization = createAsyncThunk<IUser, Record<string, string>>(
    "user/auth",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${serverUrl}auth/login`, {
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
            const response = await fetch(`${serverUrl}auth/register`, {
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

export const logoutUser = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch(`${serverUrl}auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (!response.ok) {
            const err = await response.json();
            return rejectWithValue(err);
        }

        const message = await response.json();
        return message;
    } catch (error) {
        return rejectWithValue(error);
    }
});

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
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.user = action.payload;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.error = null;
                state.isLoading = false;
                state.user = null;
            });
    },
});

export const { logout, clearError } = userSlice.actions;

export default userSlice.reducer;
