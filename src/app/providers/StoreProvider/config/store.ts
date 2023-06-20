import { configureStore } from "@reduxjs/toolkit";
import category from "../../../../features/categorySlice";
import typeSlice from "../../../../features/typeSlice";
import product from "../../../../features/productSlice";
import user from "../../../../features/userSlice";

export const store = configureStore({
    reducer: {
        category,
        typeSlice,
        product,
        user,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
