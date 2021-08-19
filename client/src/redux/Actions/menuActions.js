import{ GET_MENUS_SUCCESS,
 GET_MENUS_FAIL,
 GET_MENUS_LOAD ,
 GET_ONE_MENU_SUCCESS} from '../Constants/menu'

 import axios from 'axios'

 export const getMenus=() => async ( dispatch)=>{
     dispatch({type :GET_MENUS_LOAD });
     try {
         let result = await axios.get("http://localhost:5000/api/menu/getMenus")
         dispatch({ type: GET_MENUS_SUCCESS, payload: result.data.response })
         console.log(result)
     } catch (error) {
        dispatch({ type: GET_MENUS_FAIL, payload: error });
        console.log(error);
     }
 }
 export const getMenusById= (id) => async ( dispatch)=>{
  dispatch({type :GET_MENUS_LOAD });
  try {
      let result = await axios.get(`http://localhost:5000/api/menu/${id}`)
      dispatch({ type: GET_MENUS_SUCCESS, payload: result.data.response })
      
  } catch (error) {
     dispatch({ type: GET_MENUS_FAIL, payload: error });
     console.log(error);
  }
}
export const getMenu = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`http://localhost:5000/api/menu/${id}`);
    dispatch({ type: GET_ONE_MENU_SUCCESS, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};
//admin

 export const addMenu = (user) => async (dispatch) => {
    try {
      await axios.post("http://localhost:5000/api/menu", user);
      dispatch(getMenus());
    } catch (error) {
      console.log(error);
    }
  };
  export const deleteContact = (id) => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      dispatch(getMenus());
    } catch (error) {
      console.log(error);
    }
  };
  
  export const editMenu = (id, user) => async (dispatch) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/api/menu/${id}`,user );
      dispatch(getMenus());
    } catch (error) {
      console.log(error);
    }
  };