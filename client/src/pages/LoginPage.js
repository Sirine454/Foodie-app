import React,{ useEffect, useState } from 'react'

import { useDispatch , useSelector} from 'react-redux'
import { login } from '../redux/Actions/authActions'
import {useHistory} from 'react-router-dom'
import CircularProgress from "@material-ui/core/CircularProgress";
import {Alert } from "react-bootstrap";
import './LoginPage.css'
import { setError } from '../redux/Actions/appStateActions';
import 'bootstrap/dist/css/bootstrap.min.css';




const LoginPage = () => {
    const [info, setInfo] = useState({
        email:"",
        password:""
    })
     const auth = useSelector(state => state.auth)
    const errors= useSelector(state => state.appStateReducer.errors)
     const isAuth = useSelector(state => state.auth.isAuth)
      const isLoading = useSelector(state => state.auth.isLoading)
    console.log(errors)

const history=useHistory()

   useEffect(() => {
      if(isAuth)
       history.push('/')
   }, [isAuth])




    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(login(info),history)
        dispatch(setError())
        
    }

   
   
  
    
    return (
        
        
       
        <form method="get" action="javascript: void(0);" id="login-form" className="login-form" autocomplete="off" role="main"onSubmit={handleSubmit}>
         
        <img className="img3" src="https://www.svgrepo.com/show/184628/fast-food-burger.svg"></img>
       
        <div>
          <label className="label-email">
          {errors && <Alert variant="danger">{errors.email.msg}</Alert>}
            <input type="email" className="text" name="email" placeholder="Email" tabindex="1" required onChange={(e)=>setInfo({...info,email:e.target.value})}/>
            <span className="required">Email</span>
          </label>
          
        </div>
        <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" tabindex="3" />
        <label class="label-show-password" for="show-password">
          <span>Show Password</span>
        </label>
        <div>
          <label className="label-password">
          {errors && <Alert variant="danger">{errors.password.msg}</Alert>}
            <input type="text" className="text" name="password" placeholder="Password" tabindex="2" required onChange={(e)=>setInfo({...info,password:e.target.value})}/>
            <span className="required">Password</span>
           
          </label>
         
        </div>
       
        <input type="submit" value="Log In" />
      
       
      </form>
    
   
    )
        
    
}

export default LoginPage
