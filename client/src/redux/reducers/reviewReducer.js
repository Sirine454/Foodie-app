 import {GET_REVIEW_LOAD,GET_REVIEW_SUCCESS,GET_REVIEW_FAIL,POST_REVIEW_LOAD,POST_REVIEW_SUCCESS,POST_REVIEW_FAIL} from '../Constants/review'


const initialeState = {
   
    error: null,
    loadReviews: false,
    reviews: JSON.parse(localStorage.getItem('review')),
  };
  
  export const reviewReducer = (state = initialeState, { type, payload }) => {
    switch (type) {
      case  GET_REVIEW_LOAD:
        return { ...state, reviews: payload ,  loadReviews: true };
  
      case GET_REVIEW_SUCCESS:
        return { ...state, reviews: payload, loadReviews: false };
  
      case GET_REVIEW_FAIL:
        return { ...state, error: payload, loadReviews: false };

        case POST_REVIEW_SUCCESS:
          localStorage.setItem('order', JSON.stringify(payload))
          return { ...state, reviews: payload, loadReviews: false };
    
        case POST_REVIEW_FAIL:
          return { ...state, error: payload, loadReviews: false };
  
      default:
        return state;
    }
  };