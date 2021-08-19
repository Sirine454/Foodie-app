import {GET_REVIEW_LOAD,GET_REVIEW_SUCCESS,GET_REVIEW_FAIL,POST_REVIEW_LOAD,POST_REVIEW_SUCCESS,POST_REVIEW_FAIL} from '../Constants/review'


import axios from 'axios'

export const getReviews=() => async ( dispatch)=>{
    
    try {
        const res = await axios.get("http://localhost:5000/api/review/")
        
        dispatch({ type:GET_REVIEW_SUCCESS , payload: res.data })
      
    } catch (error) {
       dispatch({ type: GET_REVIEW_FAIL, payload: error });
       console.log(error);
    }
}
export const AddNewReview=( info)=> async (dispatch)=>{
    try {
        const res = await axios.post("http://localhost:5000/api/review/new", info)

        dispatch({ type: POST_REVIEW_SUCCESS, payload: res.data })
      
    } catch (error) {
       dispatch({ type: POST_REVIEW_FAIL, payload: error });
       console.log(error);
    }
}

