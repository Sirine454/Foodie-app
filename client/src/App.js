

import React from 'react';
import {BrowserRouter,Switch,Route}from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import {Dimmer,Loader,Image,Segment} from 'semantic-ui-react'
import Cart from './components/Cart/Cart';
import Home from './pages/Home';
import {useSelector} from 'react-redux';
import Header from './components/header'
import MenusList from './components/menusList';

import order from './components/order';
import Profile from './pages/Profile';
import MenusPage from './pages/MenusPage';
import LoadingComponent from './components/loading';
import AddRestaurant from './components/addRestaurant';

import admin from './pages/admin';
import EditRestaurant from './components/editRestaurant';
import PrivateRoute from './components/privateRoute';


function App() {
  const isLoading = useSelector(state => state.appStateReducer.isLoading)
return(

      <BrowserRouter >
      <Header />
     
      

      <Switch>
   
      <Route exact path="/" component={Home} />
     
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/menusList/:name" render={(props)=> <MenusList {...props} > </MenusList>} />
        <Route path="/Cart" component={Cart} />
        <Route path="/order" component={order}/>
        <Route path="/profile" component={Profile}/>
        <PrivateRoute path="/admin" component={admin}/>

        <Route path="/add" component={AddRestaurant}/>
        <Route path="/editRestaurant/:id" component={EditRestaurant}/>


        

        
      

      </Switch>
      )
      </BrowserRouter>
)
}

export default App;
