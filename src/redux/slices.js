import { createSlice } from "@reduxjs/toolkit"



const authsSlise = createSlice({
    name: "auth",
    initialState: {
        user: {name: "", email: ""},
        token: '',
        error: null,
        isLoading: false,
        isAuth: false,
        myProp: "Hello",
    },
    reducers: {
        renamProp: ( state, action)=> {
            return {
                ...state,
                myProp: action.payload,
            }
        }
    },
    extraReducers: {},
},);
 
export const {renamProp} = authsSlise.actions; 
export default authsSlise.reducer; 



//========================================
const BASE_PRODUCTS_UR =`https://61a73962387ab200171d2b26.mockapi.io/api/v1/`
const products =`/products`;