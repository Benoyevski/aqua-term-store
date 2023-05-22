import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../app/types/types";

interface CategoryState {
    items: ICategory[];
    isLoading: boolean;
    error?: string;
}

const initialState: CategoryState = {
    items: [],
    isLoading: false,
    error: "",
};

export const fetchCategories = createAsyncThunk("fetch/category", async (_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:5000/categories");

        const data = await res.json();

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
                state.isLoading = false;
                state.error = "";
                state.items = action.payload;
            });
    },
});

export default categorySlice.reducer;
