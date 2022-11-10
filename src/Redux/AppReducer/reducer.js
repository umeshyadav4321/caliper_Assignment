import * as types from "./actionType"
const initialState={
    products:[],
    isLoading:false,
    isError:false,
};
const reducer=(state=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_PRODUCTS_DATA_REQUEST:
            return{
                ...state,isLoading:true,
                isError:false,
            }
        case types.GET_PRODUCTS_DATA_SUCCESS:
            return{
                ...state,isLoading:false,isError:false,
                products:[...payload]
            }
        case types.GET_PRODUCTS_DATA_FAILURE:
            return{
                ...state,isLoading:false,isError:true,
            }
    }
    return state;
};
export {reducer}