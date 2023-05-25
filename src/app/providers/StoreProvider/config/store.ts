import { configureStore } from "@reduxjs/toolkit";
import category from "../../../../features/categorySlice";
import typeSlice from "../../../../features/typeSlice";
import product from "../../../../features/productSlice";

export const store = configureStore({
    reducer: {
        category,
        typeSlice,
        product,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
