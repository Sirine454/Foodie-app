import{ GET_ADDRESSES_SUCCESS,GET_ADDRESSES_FAIL,GET_ADDRESSES_LOAD,
 GET_ONE_ADDRESS_SUCCESS} from '../Constants/restaurant'
   
    import axios from 'axios'


    export const getAddresses =() => async ( dispatch)=>{
        dispatch({type :GET_ADDRESSES_LOAD });
        try {
            let result = await axios.get("http://localhost:5000/api/address/getAddresses")
            dispatch({ type: GET_ADDRESSES_SUCCESS, payload: result.data.response })
        } catch (error) {
           dispatch({ type: GET_ADDRESSES_FAIL, payload: error });
           console.log(error);
        }
    }
    //admin
    export const addAddress = (user) => async (dispatch) => {
       try {
         await axios.post("http://localhost:5000/api/address/registerAddress", user);
         dispatch(getAddresses());
       } catch (error) {
         console.log(error);
       }
     };
     export const deleteAddress = (id) => async (dispatch) => {
       try {
         await axios.delete(`http://localhost:5000/api/address/${id}`);
         dispatch(getAddresses());
       } catch (error) {
         console.log(error);
       }
     };
     export const getAddress = (id) => async (dispatch) => {
       try {
         let result = await axios.get(`http://localhost:5000/api/address/${id}`);
         dispatch({ type: GET_ONE_ADDRESS_SUCCESS, payload: result.data.response });
       } catch (error) {
         console.log(error);
       }
     };
     export const editAddress = (id, user) => async (dispatch) => {
       try {
         let result = await axios.put(`http://localhost:5000/api/address/${id}`,user );
         dispatch(getAddresses());
       } catch (error) {
         console.log(error);
       }
     };


      