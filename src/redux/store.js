import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categorySlice";
import productSlice from "./features/productSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice,
        carts: cartSlice
    }
})