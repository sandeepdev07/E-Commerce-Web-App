import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze(
    {
        IDLE : 'idle',
        ERROR : 'error',
        LOADING : 'loading',
    }
);


const productSlice = createSlice({
    name : 'product',
    initialState :{

        data :[],
        status:STATUSES.IDLE,
    },

    reducers:{

        // setProducts(state,action){

        //     // in the reducer we can not perform asyn task like api call so we use thunks middleware
        //     state.data = action.payload;
        // },

        // setStatus(state,action){
        //     state.status = action.payload;
        // },

        // remove(state,action){
        //     return state.filter(item=> item.id !== action.payload)
        // },
    },

    extraReducers : (builder)=> {

        builder.addCase(fetchProducts.pending, (state,action)=>{

            state.status = STATUSES.LOADING;
        })

        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })

        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status = STATUSES.ERROR;
        })
    }
});

export const {setProducts,setStatus} = productSlice.actions;

export default productSlice.reducer;

// thunks middleware 1st way

// export function fetchProducts(){

//     return async function fetchProductThunk(dispatch,getState){

//         dispatch(setStatus(STATUSES.LOADING)); // before api call show loading state


//         try {
            
//             const res = await fetch('https://fakestoreapi.com/products ');

//             const data = await res.json();

//             dispatch(setProducts(data));

//             dispatch(setStatus(STATUSES.IDLE));

//         } catch (err) {
            
//            console.log(err);

//             dispatch.setStatus(STATUSES.ERROR);
//         }

//     }
// }

// thunks middleware 2st way     //product/fetch identifier it could be anything 

export const fetchProducts = createAsyncThunk('products/fetch',async ()=>{

    const res = await fetch('https://fakestoreapi.com/products ');
    const data = await res.json();

    return data;
})