import React, { useState } from 'react'
import { removeItem } from '../redux/Actions/cartActions'
import { useDispatch,useSelector } from 'react-redux'
import './cartItem.css'

const CartItem = ({menu}) => {
   
   

    const dispatch = useDispatch()
    const remove=()=>{
     dispatch(removeItem(menu))
    }

    return (
        <div>
            <div className="cartItemFULL">
                <table className="itemTable">
                    <tr>
                        <td className="tdItem">
                            {menu.name}
                        </td>
                        <td className="tdPrice">
                            <b>Price:</b> {menu.price} DT
                        </td>
                        <td className="tdBttn">
                            <button className="bttn" onClick={()=>remove()} ><i className="material-icons">delete_forever</i></button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CartItem
