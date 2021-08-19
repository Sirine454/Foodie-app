import{GET_LOGIN_LOAD,GET_LOGIN_SUCCESS,GET_LOGIN_FAIL,LOGOUT,REGISTER_SUCCESS,GET_PROFILE_SUCCESS}from '../Constants/auth'



const initialState={
    token:localStorage.getItem('token'),
    isAuth:Boolean(localStorage.getItem('isAuth')),
    isLoading:false,
    user: JSON.parse(localStorage.getItem('user')),
    errors:null,

}
export const authReducer =(state = initialState, {type,payload})=>{
    switch (type) {
        case GET_LOGIN_LOAD:
            return {...state,isLoading:true}

        case REGISTER_SUCCESS:
        case GET_LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token)
            localStorage.setItem('isAuth','true')
            return {...state,isAuth:true,token: payload.token }


            case GET_PROFILE_SUCCESS:
            localStorage.setItem('user', JSON.stringify(payload))
            return {
                ...state,
                user: payload
            }

        case LOGOUT:
            localStorage.clear()
            return {...state,isAuth:false,user:null,token:null}
            

        case GET_LOGIN_FAIL:
            return {...state,isLoading:false,isAuth:false,token:null,errors:payload }
            
        
    
        default:
            return state;
    }
}