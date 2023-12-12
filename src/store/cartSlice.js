import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsList: [],
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const newItem = action.payload;
            const itemExists = state.itemsList.find((item)=> item.id === newItem.id);
            if (itemExists){
                itemExists.quantity++
                itemExists.totalPrice += newItem.exactPrice;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    exactPrice: newItem.exactPrice,
                    totalPrice: newItem.exactPrice,
                    name: newItem.name,
                    image: newItem.image,
                    category: newItem.category,
                    quantity: 1,
                })
                state.totalQuantity++
            }
        },
        removeFromCart(state,action){
            const id = action.payload;
            const existingItem = state.itemsList.find((item)=> item.id === id);
            if(existingItem.quantity === 1){
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
                state.totalQuantity--
            }else{
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.exactPrice
            }
        },
        removeAll(state,action){
            const id = action.payload;
            state.itemsList = state.itemsList.filter((item) => item.id !== id);
            state.totalQuantity--
        }

    }
    })

    export const cartActions = cartSlice.actions;
    export default cartSlice; 