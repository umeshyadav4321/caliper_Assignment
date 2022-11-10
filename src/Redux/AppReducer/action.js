import * as types from "./actionType"
import axios from "axios";
const getProducts=(params)=>(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_DATA_REQUEST})
    return axios("http://localhost:8081/products",params).then(r=>{
        return dispatch({type:types.GET_PRODUCTS_DATA_SUCCESS,payload:r.data})
    }).catch(e=>{
        return dispatch({types:types.GET_PRODUCTS_DATA_FAILURE})
    })
}
export{getProducts}
