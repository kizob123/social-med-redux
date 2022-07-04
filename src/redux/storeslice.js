import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice =createSlice ({
    name:'counter',
    initialState: {counter:0},
    reducers:{
        increase(state,action){
            state.counter++
            },
        addTo(state, action) {
            state.counter+=action.payload
        }
            
        }

        })
    export const actions= counterSlice.actions
 const store = configureStore({
     reducer:{
         counter:counterSlice.reducer
        }
 })
 export default store;