import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/providers/StoreProvider/config/store";
import { getBasketFromLS } from "../shared/utils/getBasketFromLS/getBasketFromLS";

export type TBasketProduct = {
    id: string;
    title: string;
    imageSrc: string;
    category: string;
};

interface IBasketSliceState {
    products: TBasketProduct[];
}

const { products } = getBasketFromLS();

const initialState: IBasketSliceState = {
    products,
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addProductToBasket: (state, action: PayloadAction<TBasketProduct>) => {
            const findProduct = state.products.find((prod) => prod.id === action.payload.id);
            if (!findProduct) {
                state.products.push(action.payload);
            }
        },
        removeProductFromBasket: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((prod) => prod.id !== action.payload);
        },
        clearProducts: (state) => {
            state.products = [];
        },
    },
});

export const selectBasket = (state: RootState) => state.basket;
export const selectBasketProductById = (id: string) => (state: RootState) =>
    state.basket.products.find((prod) => prod.id === id);

export const { addProductToBasket, removeProductFromBasket, clearProducts } = basketSlice.actions;

export default basketSlice.reducer;
