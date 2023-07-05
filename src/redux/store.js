import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./features/categorySlice";
import productSlice from "./features/productSlice";

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice
    }
})