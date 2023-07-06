import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: fetchFromLocalStorage,
    itemCount: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})