import {
    GET_RESTAURANTS_FAIL,
    GET_RESTAURANTS_LOAD,
    GET_RESTAURANTS_SUCCESS,
    GET_ONE_RESTAURANT_SUCCESS,
  } from "../Constants/restaurant";
  
  const initialeState = {
    restaurants: [],
    error: null,
    loadRestaurants: false,
    restaurant: {},
  };
  
  export const restaurantReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case  GET_RESTAURANTS_LOAD:
        return { ...state, loadRestaurants: true };
  
      case GET_RESTAURANTS_SUCCESS:
        return { ...state, restaurants: payload, loadRestaurants: false };
  
      case GET_RESTAURANTS_FAIL:
        return { ...state, error: payload, loadRestaurants: false };
      case GET_ONE_RESTAURANT_SUCCESS:
        return { ...state,  restaurant: payload };
  
      default:
        return state;
    }
  };