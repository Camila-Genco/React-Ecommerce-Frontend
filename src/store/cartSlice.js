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
                itemExists.totalPrice += newItem.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    totalPrice: newItem.price,
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
                existingItem.totalPrice -= existingItem.price
            }
        },
        removeAll(state,action){
            const id = action.payload;
            state.itemsList = state.itemsList.filter((item) => item.id !== id);
            state.totalQuantity--
        },
        removeAllProducts(state,action){
            state.itemsList = [];
            state.totalQuantity = 0;
        }

    }
    })

    export const cartActions = cartSlice.actions;
    export default cartSlice; 