import {GET_ORDER_SUCCESS,GET_ORDER_LOAD,GET_ORDER_FAIL,POST_ORDER_SUCCESS,POST_ORDER_LOAD,POST_ORDER_FAIL} from '../Constants/order'

import axios from 'axios'

export const getOrders=() => async ( dispatch)=>{
    
    try {
        const res = await axios.get("http://localhost:5000/api/order/")
        
        dispatch({ type: GET_ORDER_SUCCESS, payload: res.data })
      
    } catch (error) {
       dispatch({ type: GET_ORDER_FAIL, payload: error });
       console.log(error);
    }
}
export const AddNewOrder=( newOrder)=> async (dispatch)=>{
    try {
        const res = await axios.post("http://localhost:5000/api/order/new", newOrder)

        dispatch({ type: POST_ORDER_SUCCESS, payload: res.data })
        console.log()
    } catch (error) {
       dispatch({ type: POST_ORDER_FAIL, payload: error });
       console.log(error);
    }
}

