import axios from 'axios'
import{GET_LOGIN_LOAD,GET_LOGIN_SUCCESS,GET_LOGIN_FAIL,LOGOUT,REGISTER_SUCCESS,GET_PROFILE_SUCCESS}from '../Constants/auth'
import { clearError, setError, startLoading, stopLoading } from "./appStateActions"
import {setToken} from '../../helpers/helpers'

export const login =(info)=>async(dispatch)=>{
    dispatch ({type:GET_LOGIN_LOAD})
    
    try {
        const res= await axios.post('http://localhost:5000/api/user/login',info)
        dispatch({type:GET_LOGIN_SUCCESS,payload:res.data})
        dispatch(stopLoading())
        dispatch(getProfile())
    } catch (err) {
        dispatch(setError(err.response.data.errors))
        
    }
}
    export const register = (info) => async (dispatch) => {
        dispatch(clearError())
        dispatch(startLoading("Register"))
        try {
            const res = await axios.post("http://localhost:5000/api/user/register", info)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            dispatch(stopLoading())
           
           
        } catch (err) {
            dispatch(setError(err.response.data.errors))
           dispatch(stopLoading())
        }
    }
    export const getProfile = () => async (dispatch) => {
        dispatch(clearError())
        
        try {
            setToken()
            const { data } = await axios.get("http://localhost:5000/api/user/getprofile")
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: data
            })
        }
        catch (err) {
            dispatch(stopLoading())
            dispatch(setError(err.response.data.errors))
        }
    }


export const logout =()=>{
    return {type:LOGOUT}
}
