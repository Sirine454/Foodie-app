import { ADD_TO_CART, REMOVE_ITEM,CLEAR_CART } from '../Constants/cart'
export const AddToCart = (dish) => {
    return {
        type: ADD_TO_CART,
        payload: { dish }
    }
}

// REMOVE DISH
export const removeItem = (dish) => {
    return {
        type: REMOVE_ITEM,
        payload: { dish }
    }
}

// CLEAR CART
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}