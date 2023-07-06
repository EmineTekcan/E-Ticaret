import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem("cart")

    if (cart)
        return JSON.parse(cart)
    else
        return []
}

const storeInLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data))
}

const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCard = state.carts.find(item => item.id === action.payload.id)

            if (isItemCard) {
                const tempCard = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        let tempQuan = item.quantity + action.payload.quantity;
                        let tempTotalPrice = tempQuan + item.price;

                        return { ...item, quantity: tempQuan, totalPrice: tempTotalPrice }
                    }

                    return item;
                })
                state.carts = tempCard;
                storeInLocalStorage(state.carts);
            } else {
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts);
            }

        },
        removeFromCart: (state, action) => {
            const tempCard = state.carts.filter(item => item.id !== action.payload.id)
            state.carts.push(tempCard);
            storeInLocalStorage(state.carts);
        },
        clearCart: (state) => {
            state.carts = []
            storeInLocalStorage(state.carts)
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.totalPrice;
            }, 0)

            state.itemCount = state.carts.length;
        }

    },
})

export default cartSlice.reducer;

export const { addToCart, clearCart, getCartTotal, removeFromCart } = cartSlice.actions