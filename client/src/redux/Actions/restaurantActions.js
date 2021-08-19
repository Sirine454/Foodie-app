import{ GET_RESTAURANTS_SUCCESS,
    GET_RESTAURANTS_FAIL,
    GET_RESTAURANTS_LOAD ,
    GET_ONE_RESTAURANT_SUCCESS} from '../Constants/restaurant'
   
    import axios from 'axios'


    export const getRestaurants =() => async ( dispatch)=>{
        dispatch({type :GET_RESTAURANTS_LOAD });
        try {
            let result = await axios.get("http://localhost:5000/api/restaurant/getRestaurants")
            dispatch({ type: GET_RESTAURANTS_SUCCESS, payload: result.data.response })
        } catch (error) {
           dispatch({ type: GET_RESTAURANTS_FAIL, payload: error });
           console.log(error);
        }
    }
    export const getRestaurant = (id) => async (dispatch) => {
      try {
        let result = await axios.get(`http://localhost:5000/api/restaurant/getRestaurants/${id}`);
        console.log(result)
        dispatch({ type: GET_ONE_RESTAURANT_SUCCESS, payload: result.data.response });
        
      } catch (error) {
        console.log(error);
      }
    };
    
//admin

export const addRestaurant = (info) => async (dispatch) => {
  try {
    await axios.post("http://localhost:5000/api/restaurant/registerRestaurant", info);
    
  } catch (error) {
    console.log(error);
  }
};
export const deleteRestaurant = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/restaurant/${id}`);
    dispatch(getRestaurants());
  } catch (error) {
    console.log(error);
  }
};

export const editRestaurant = (id, info) => async (dispatch) => {
  try {
    let result = await axios.put(`http://localhost:5000/api/restaurant/${id}`,info);
    dispatch(getRestaurants());
  } catch (error) {
    console.log(error);
  }
};

     