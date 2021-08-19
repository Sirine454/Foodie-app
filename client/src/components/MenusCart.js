import React from 'react'
import './menusCart.css'
import { Rating} from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import { AddToCart } from '../redux/Actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { useEffect } from 'react';

const MenusCart = ({el}) => {
  const menus = useSelector(state => state.menuReducer.menus)
  const cart = useSelector(state=> state.cart)
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const history=useHistory()

  const Add=()=>{
    dispatch(AddToCart(el))
  }


    return (
    <div className="wrapper">
    <div className="product-img">
      <img src={el.imageURL} height="420" width="327"/>
    </div>
    <div className="product-info">
      <div className="product-text">
        <h1>{el.name}</h1>
        <h2><Rating icon='star' defaultRating={3} maxRating={4} /></h2>
        <p>{el.desc}</p>
        
      </div>
      <div className="product-price-btn">
        <p><span>{el.price} DT </span></p>
        <br></br>
      <button onClick={()=>Add()} type="button"> Add to card</button>
    
      </div>
    </div>
  </div>
 
    
    )
}

export default MenusCart
