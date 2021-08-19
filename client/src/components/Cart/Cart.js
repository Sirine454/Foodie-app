import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import CartItem from '../cartItem'
import { Link } from 'react-router-dom'
import {clearCart} from '../../redux/Actions/cartActions'
import './CartForm.css'





const Cart = () => {
  
    const auth = useSelector(state => state.auth)
    const cart = useSelector(state=>state.cart.dishes)
    const total = useSelector(state=>state.cart.totalCost)

const dispatch = useDispatch()
const handleClearCart = () => {
     dispatch(clearCart());
    }

   

        return (
            <div className="CartFULL">
                <h1>Food Cart</h1>
                <div className="CartInDiv">
                    {
                       
                            cart.map((item) => {
                                return (<CartItem menu ={item}></CartItem>);
                            })
                    }
                    {
                        cart.length != 0 ?
                            <button className="clearCartBttn" onClick={()=>handleClearCart()}>CLEAR CART</button>
                            :
                            <div style={{"padding":"10px"}}>
                                NO ITEMS ADDED
                            </div>
                    }

                    <h2><b>Total Price: </b>
                <span>{total} DT </span></h2>
                </div>
                
                <br />
                {
                    cart.length != 0 ?
                        <Link className="linkBttn" to={auth.isAuth ? "/order" : "/login"} >
                            <div className="placeOrderBttn">
                                PLACE ORDER
                    </div>
                        </Link> : null
                }
            </div>
    )
}

export default Cart
