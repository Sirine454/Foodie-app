import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getProfile, logout } from '../redux/Actions/authActions'
import {getOrders} from '../redux/Actions/orderActions'
import './Profile.css'




const Profile = () => {

    const auth = useSelector(state=>state.auth)
    const orders = useSelector(state=>state.order.orders)
    console.log(orders)
    const dispatch=useDispatch()

    useEffect(() => {
       dispatch(getProfile())
    }, [])

    useEffect(() => {
       dispatch(getOrders())
    }, [])
    const handleLogout=()=>{
        dispatch(logout())
    }
    return (
        <>
        {orders && orders.dishes &&
           <div className="WelcomeProfileFULL">
                <div className="WelcomeProfileInDiv">
                    <button className="logoutBttn" onClick={()=>handleLogout()}>LOGOUT</button>
                    <h2>Previous Orders: </h2>
                    <br />===========================
                      <br /> <b>ORDER</b>
                    <br />===========================
                
                    <div> date: {orders.createdAt}</div>
                    {orders.dishes.map((el) => {                                
                                return (
                                    <div>
                                        <br /> <b>Dish: </b>
                                        
                                              
                                                <div>name: {el.name}</div>
                                                <div>price: {el.price}DT </div>
                                                <div>Restaurant:{el.Restaurant} </div>


                                        
                                       
                                      
                                    </div>
                                )
                            })
                    }
                    
                      <br /> <b>Total Cost: </b>
                                        {orders.totalCost}DT
                
                </div>
        </div>
}
        </>
    )
}

export default Profile
