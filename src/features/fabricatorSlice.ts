import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFabricator } from "../shared/types/types";
import { serverUrl } from "../serverUrl";
interface FabricatorState {
    items: IFabricator[];
    isLoading: boolean;
    error: string | null;
}

const initialState: FabricatorState = {
    items: [],
    isLoading: false,
    error: null,
};

export const addFabricator = createAsyncThunk(
    "fabricator/addToDB",
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await fetch(`${serverUrl}fabricators`, {
                method: "POST",
                body: formData,
                credentials: "include",
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении производителя");
            }

            const fabricator: IFabricator = await response.json();
            return fabricator;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const fetchFabricators = createAsyncThunk("fetch/fabricator", async (_, thunkAPI) => {
    try {
        const res = await fetch(`${serverUrl}fabricators`);

        const data = await res.json();

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const fabricatorSlice = createSlice({
    name: "fabricator",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFabricators.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFabricators.fulfilled, (state, action: PayloadAction<IFabricator[]>) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(addFabricator.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addFabricator.fulfilled, (state, action: PayloadAction<IFabricator>) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            });
    },
});

export default fabricatorSlice.reducer;
