import { createSlice, configureStore } from "@reduxjs/toolkit";



const bucket = createSlice({
    name: 'bucket',
    initialState: [],
    reducers : {
        addItem: (state, action) => {
            //state.push(action.payload)
            return [...state, action.payload]
        }
    }
});

const store = configureStore({
    reducer: {
        bucket: bucket.reducer,
    }    
});

store.subscribe(()=>{
    console.log(store.getState().bucket);
})




export const { addItem } = bucket.actions
export default store;

