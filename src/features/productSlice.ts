import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../app/types/types";

interface ProductState {
    items: IProduct[];
    isLoading: boolean;
    error?: string;
}

const initialState: ProductState = {
    items: [],
    isLoading: false,
    error: "",
};

export const fetchProducts = createAsyncThunk("fetch/product", async (_, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:5000/products");

        const data = await res.json();

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
                state.error = "";
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
                state.isLoading = false;
                state.error = "";
                state.items = action.payload;
            });
    },
});

export default productSlice.reducer;
