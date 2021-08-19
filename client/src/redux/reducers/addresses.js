import{ GET_ADDRESSES_SUCCESS,GET_ADDRESSES_FAIL,GET_ADDRESSES_LOAD,
    GET_ONE_ADDRESS_SUCCESS} from '../Constants/restaurant'
  
  const initialeState = {
    addresses: [],
    error: null,
    loadAdresses: false,
    address: {},
  };
  
  export const addressReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case  GET_ADDRESSES_LOAD:
        return { ...state, loadAdresses: true };
  
      case GET_ADDRESSES_SUCCESS:
        return { ...state, addresses: payload, loadAdresses: false };
  
      case GET_ADDRESSES_FAIL:
        return { ...state, error: payload, loadAdresses: false };
      case GET_ONE_ADDRESS_SUCCESS:
        return { ...state,  address: payload };
  
      default:
        return state;
    }
  };