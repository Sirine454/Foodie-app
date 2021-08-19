import { ADD_TO_CART, REMOVE_ITEM,CLEAR_CART } from '../Constants/cart'

const initialState = {
    dishes: [],
    totalCost: 0,
    dishCount: 0,
    
};

// FOR DEALING WITH THE CART STATE
export const CartReducer = (state = initialState, action) => {
    var totalCost;
    var dishCount;
    switch (action.type) {
        case ADD_TO_CART:
            state.dishes.push(action.payload.dish);
            totalCost = state.totalCost + action.payload.dish.price;
            dishCount = state.dishCount +  1;
            return {
                dishes: state.dishes,
                totalCost: totalCost,
                dishCount: dishCount
            };
        case REMOVE_ITEM:
            var index = state.dishes.findIndex((dish) => dish.name === action.payload.dish.name);
            state.dishes.splice(index, 1)
            totalCost = state.totalCost - action.payload.dish.price;
            dishCount = state.dishCount - 1;
            return {
                dishes: state.dishes,
                totalCost: totalCost,
                dishCount: dishCount
            };
        case CLEAR_CART:
            return {
                dishes: [],
                totalCost: 0,
                dishCount: 0
            };
        default:
            return state;
    }
}