import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../app/types/types";

interface CategoryState {
    items: ICategory[];
    isLoading: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    items: [],
    isLoading: false,
    error: null,
};

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:5000/categories`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении категории");
            }

            const category: ICategory = await response.json();
            return category;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const fetchCategories = createAsyncThunk("category/fetchCategories", async (_, thunkAPI) => {
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
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(addCategory.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addCategory.fulfilled, (state, action: PayloadAction<ICategory>) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            });
    },
});

export default categorySlice.reducer;
