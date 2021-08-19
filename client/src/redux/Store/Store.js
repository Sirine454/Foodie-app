import { rootReducer } from "../../redux/reducers/index";

import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;