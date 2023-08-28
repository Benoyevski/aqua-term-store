import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../shared/types/types";
import { serverUrl } from "../serverUrl";
interface CategoryState {
    items: ICategory[];
    isLoading: boolean;
    error: unknown;
}

const initialState: CategoryState = {
    items: [],
    isLoading: false,
    error: null,
};

export const incrementCategoryPopularity = createAsyncThunk(
    "category/incrementCategoryPopularity",
    async (categoryId: string, { dispatch, rejectWithValue }) => {
        try {
            const response = await fetch(`${serverUrl}categories/incPopularity/${categoryId}`, {
                method: "PATCH",
            });

            if (!response.ok) {
                throw new Error("Ошибка при увеличении популярности категории");
            }

            const updatedCategory: ICategory = await response.json();

            // Отправляем новое значение в Redux для обновления состояния
            dispatch(updateCategoryPopularity(updatedCategory));

            return updatedCategory;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    },
);

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await fetch(`${serverUrl}categories`, {
                method: "POST",
                body: formData,
                credentials: "include",
            });

            if (!response.ok) {
                const err = await response.json();
                return rejectWithValue(err);
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
        const res = await fetch(`${serverUrl}categories`, {
            headers: {
                "Cache-Control": "public, max-age=36000",
                Expires: "Tue, 01 Jan 2024 00:00:00 GMT",
            },
        });
        const data = await res.json();
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        updateCategoryPopularity: (state, action: PayloadAction<ICategory>) => {
            const updatedCategory = action.payload;
            const categoryIndex = state.items.findIndex((c) => c._id === updatedCategory._id);
            if (categoryIndex !== -1) {
                state.items[categoryIndex].popularity = updatedCategory.popularity;
            }
        },
    },
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
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(
                incrementCategoryPopularity.fulfilled,
                (state, action: PayloadAction<ICategory>) => {
                    state.isLoading = false;
                    state.error = null;
                    const updatedCategory = action.payload;
                    const categoryIndex = state.items.findIndex(
                        (c) => c._id === updatedCategory._id,
                    );
                    if (categoryIndex !== -1) {
                        state.items[categoryIndex].popularity = updatedCategory.popularity;
                    }
                },
            );
    },
});

export const { updateCategoryPopularity } = categorySlice.actions;

export default categorySlice.reducer;
