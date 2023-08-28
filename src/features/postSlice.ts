import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../shared/types/types";
import { serverUrl } from "../serverUrl";
interface PostState {
    posts: IPost[];
    isLoading: boolean;
    error: unknown;
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: null,
};

export const addPost = createAsyncThunk(
    "post/addToDB",
    async (formData: FormData, { rejectWithValue }) => {
        try {
            const response = await fetch(`${serverUrl}posts`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Ошибка при добавлении поста");
            }

            const post: IPost = await response.json();
            return post;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const fetchPosts = createAsyncThunk("fetch/post", async (_, thunkAPI) => {
    try {
        const res = await fetch(`${serverUrl}posts`);

        const data = await res.json();

        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.isLoading = false;
                state.error = null;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addPost.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addPost.fulfilled, (state, action: PayloadAction<IPost>) => {
                state.isLoading = false;
                state.error = null;
                state.posts.push(action.payload);
            })
            .addCase(addPost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default postSlice.reducer;
