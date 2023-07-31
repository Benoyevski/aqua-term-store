import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../shared/types/types";

interface ProductState {
    items: IProduct[];
    isLoading: boolean;
    error?: string | null;
}

const initialState: ProductState = {
    items: [],
    isLoading: false,
    error: null,
};

export const incrementProductPopularity = createAsyncThunk(
    "product/incrementProductPopularity",
    async (productId: string, { dispatch, rejectWithValue }) => {
        try {
            const response = await fetch(
                `http://localhost:5000/products/incPopularity/${productId}`,
                {
                    method: "PATCH",
                },
            );

            if (!response.ok) {
                throw new Error("Ошибка при увеличении популярности категории");
            }

            const updatedProduct: IProduct = await response.json();

            // Отправляем новое значение в Redux для обновления состояния
            dispatch(updateProductPopularity(updatedProduct));

            return updatedProduct;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    },
);

export const addProduct = createAsyncThunk(
    "product/add",
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:5000/products`, {
                method: "POST",
                body: formData,
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении продукта");
            }

            const product: IProduct = await response.json();
            return product;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

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
    reducers: {
        updateProductPopularity: (state, action: PayloadAction<IProduct>) => {
            const updatedProduct = action.payload;
            const productIndex = state.items.findIndex((c) => c._id === updatedProduct._id);
            if (productIndex !== -1) {
                state.items[productIndex].popularity = updatedProduct.popularity;
            }
        },
    },
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
            })
            .addCase(
                incrementProductPopularity.fulfilled,
                (state, action: PayloadAction<IProduct>) => {
                    state.isLoading = false;
                    state.error = null;
                    const updatedProduct = action.payload;
                    const productIndex = state.items.findIndex((c) => c._id === updatedProduct._id);
                    if (productIndex !== -1) {
                        state.items[productIndex].popularity = updatedProduct.popularity;
                    }
                },
            );
    },
});

export const { updateProductPopularity } = productSlice.actions;

export default productSlice.reducer;
