import {
    GET_MENUS_FAIL,
    GET_MENUS_LOAD,
    GET_MENUS_SUCCESS,
    GET_ONE_MENU_SUCCESS,
  } from "../Constants/menu";
  import {  ADD_TO_CART, REMOVE_ITEM,CLEAR_CART } from '../Constants/cart'

  const initialeState = {
    menus: [],
    error: null,
    loadMenus: false,
    menu: {},
  };
 
  export const menuReducer = (state = initialeState, { type, payload }) => {
  
    switch (type) {
      case  GET_MENUS_LOAD:
        return { ...state, loadMenus: true };
  
      case GET_MENUS_SUCCESS:
        return { ...state, menus: payload, loadMenus: false };
  
      case GET_MENUS_FAIL:
        return { ...state, error: payload, loadMenus: false };
      case  GET_ONE_MENU_SUCCESS:
        return { ...state,  menu: payload }
        default:
          return state;
    }}
    