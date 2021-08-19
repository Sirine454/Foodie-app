
import {restaurantReducer} from "./restaurant"
import { menuReducer} from "./menu";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { addressReducer } from "./addresses";
import { appStateReducer} from "../reducers/appStateReducer";
import { CartReducer } from "./cartReducer";
import {orderReducer} from "./orderReducer"
import {reviewReducer} from "./reviewReducer"


export const rootReducer = combineReducers({ restaurantReducer,menuReducer,auth:authReducer,addressReducer,appStateReducer,cart:CartReducer,order:orderReducer,reviewReducer});