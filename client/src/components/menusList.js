import React from 'react'
import { useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import MenusCart from './MenusCart';
import {Dimmer,Loader,Image,Segment} from 'semantic-ui-react'
import { getMenus } from '../redux/Actions/menuActions';
import './menusList.css'



const MenusList = ({match}) => {

    const dispatch = useDispatch();
    const menus = useSelector((state) => state.menuReducer.menus);
    console.log(menus)
    const loadMenus = useSelector((state) => state.menuReducer.loadMenus);
    console.log(loadMenus)

    const menu = menus.filter(el=> el.Restaurant === match.params.name)

  
    useEffect(() => {
      dispatch(getMenus());
    }, [dispatch]);

    return (
      <>
        <div>
            <img src ="https://static.takeaway.com/images/chains/fr/pizza_hut/headers/header.jpg?timestamp=1598978957"></img>
          </div>
        
          <div>
          <nav>
	<a href="#">Plates</a>
	<a href="#">Pizza</a>
	<a href="#">Salad</a>
	<a href="#">Dessert</a>
	<a href="#">Sandwitches</a>
  <a href="#">Breakfast</a>
	<div className="animation start-home"></div>
</nav>
          </div>
           {loadMenus ? (
        <div>
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        
        </div>
        ) : (
   menu.map(el=> 
    <>
    <h4 id="#">{el.Category}</h4>
    <MenusCart key ={el.name} el={el} />
    </>
    
    ))
   }
    
  

    
    </>
  );
};
            

export default MenusList
