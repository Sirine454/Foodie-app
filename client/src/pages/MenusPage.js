import React from 'react'
import Cart from '../components/Cart/Cart'
import MenusList from '../components/menusList'
import {Container,Col,Row} from 'react-bootstrap'

const MenusPage = () => {
    return (
        <div>
          <div>
            <img src ="https://static.takeaway.com/images/chains/fr/pizza_hut/headers/header.jpg?timestamp=1598978957"></img>
          </div>
          <MenusList />
        </div>
    )
}

export default MenusPage
