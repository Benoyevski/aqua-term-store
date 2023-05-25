import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IType } from "../app/types/types";

interface TypeState {
    items: IType[];
    isLoading: boolean;
    error?: string;
}

const initialState: TypeState = {
    items: [],
    isLoading: false,
    error: "",
};

export const fetchTypes = createAsyncThunk("fetch/type", async (_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:5000/types");

        const data = await res.json();

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const typeSlice = createSlice({
    name: "type",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTypes.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchTypes.fulfilled, (state, action: PayloadAction<IType[]>) => {
                state.isLoading = false;
                state.error = "";
                state.items = action.payload;
            });
    },
});

export default typeSlice.reducer;
