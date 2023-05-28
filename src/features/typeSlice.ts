import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IType } from "../app/types/types";

interface TypeState {
    items: IType[];
    isLoading: boolean;
    error: string | null;
}

const initialState: TypeState = {
    items: [],
    isLoading: false,
    error: null,
};

export const addType = createAsyncThunk(
    "type/addToDB",
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:5000/types`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении типа");
            }

            const type: IType = await response.json();
            return type;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);


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
                state.error = null;
            })
            .addCase(fetchTypes.fulfilled, (state, action: PayloadAction<IType[]>) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(addType.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addType.fulfilled, (state, action: PayloadAction<IType>) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            });
    },
});

export default typeSlice.reducer;
