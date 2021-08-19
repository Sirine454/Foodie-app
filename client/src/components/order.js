import React,{useEffect,useHistory} from 'react'

import { useDispatch,useSelector} from 'react-redux'

import { getProfile } from '../redux/Actions/authActions';
import {Link} from 'react-router-dom'
import './order.css'

import { AddNewOrder } from '../redux/Actions/orderActions';
import {clearCart} from '../redux/Actions/cartActions'

const Order = () => {
    const cart = useSelector(state=> state.cart)
    const auth=useSelector(state=>state.auth)
    const total = useSelector(state=>state.cart.totalCost)
    const orders =useSelector(state=>state.order.orders)
    const isLoading=useSelector(state=>state.auth.isLoading)
  
  
    const dispatch= useDispatch()
    console.log(cart)

    useEffect(() => {
        dispatch(getProfile())
     }, [])
    


const handleOrder= () => {
    const dishes = cart.dishes;
    console.log(orders)
    const totalCost = total;
    const userEmail = auth.user.email;
    const newOrder = { dishes, totalCost, userEmail };
    console.log(newOrder)
    dispatch(AddNewOrder(newOrder))
    dispatch(clearCart())
    
 
}


    return (
        <>
           {auth.user &&
           
                <div className="OrderFULL">
                <div className="OrderInDiv">
                    <h1>PLACE ORDER</h1>
                    <b>First name: </b>{auth.user.firstname} <br />
                    <b>Last name: </b>{auth.user.lastname} <br />
                    <b>Email: </b>{auth.user.email} <br />
                    <b>Address: </b>{auth.user.address} <br />
                    <b>Phone number: </b>{auth.user.PhoneNum} <br />
                    
                   
                   <Link to="/profile"><button class="confirmBttn" onClick={()=> handleOrder()}>CONFIRM</button></Link> 

                </div>
            </div>
           
}
           </>
               
        );

    }
export default Order
