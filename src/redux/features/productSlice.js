import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";

const initialState = {
    products: [],
    productStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
}


export const getProducts = createAsyncThunk("getproducts", async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("products error " + error);
    }
})

export const getProductDetail = createAsyncThunk("getProductDetail", async (id) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log("product detail error " + error);
    }
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.productStatus = STATUS.LOADING
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.productStatus = STATUS.SUCCESS
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.productStatus = STATUS.FAIL
            })
            .addCase(getProductDetail.pending, (state) => {
                state.productDetailStatus = STATUS.LOADING
            })
            .addCase(getProductDetail.rejected, (state) => {
                state.productDetailStatus = STATUS.FAIL
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload
            })
    }
})

export default productSlice.reducer