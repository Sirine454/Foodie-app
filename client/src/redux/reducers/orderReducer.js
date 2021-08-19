import {GET_ORDER_SUCCESS,GET_ORDER_LOAD,GET_ORDER_FAIL, POST_ORDER_FAIL,POST_ORDER_SUCCESS} from '../Constants/order'
const initialeState = {
   
    error: null,
    loadOrders: false,
    orders: JSON.parse(localStorage.getItem('order')),
  };
  
  export const orderReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case  GET_ORDER_LOAD:
        return { ...state, orders: payload ,  loadOrders: true };
  
      case GET_ORDER_SUCCESS:
        return { ...state, orders: payload, loadOrders: false };
  
      case GET_ORDER_FAIL:
        return { ...state, error: payload, loadOrders: false };

        case POST_ORDER_SUCCESS:
          localStorage.setItem('order', JSON.stringify(payload))
          return { ...state, orders: payload, loadOrders: false };
    
        case POST_ORDER_FAIL:
          return { ...state, error: payload, loadOrders: false };
  
      default:
        return state;
    }
  };