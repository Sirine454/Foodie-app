import React, { useState, useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { getAddresses } from "../redux/Actions/adressesActions";
import { Card,Image ,Rating,Input } from 'semantic-ui-react'

import { getRestaurants } from "../redux/Actions/restaurantActions";
import 'semantic-ui-css/semantic.min.css'
import './SearchInput.css'
import { Link } from 'react-router-dom'



const SearchInput=() =>{
 
    const dispatch = useDispatch()
    const loadRestaurants = useSelector(state => state.restaurantReducer.loadRestaurants)

const restaurants = useSelector(state => state.restaurantReducer.restaurants)

const loadAddresses = useSelector(state => state.addressReducer.loadAddresses)
const [error,setError]=useState("notfound")
const addresses = useSelector(state => state.addressReducer.addresses)
const [text,setText]=useState('')
const [suggestions,setSuggestions]=useState([])
useEffect(() => {
   dispatch(getRestaurants())
    
}, [])
useEffect(() => {
    dispatch(getAddresses())
     
 }, [])
 
 const onSuggestHandler=(text)=>{
     setText(text); 
     setSuggestions([])
  
    
 }

 const onChangeHandler =(text)=>{
     let matches=[]
     let message=""
     if (text.length>0){
         matches = addresses.filter(add=>{
             const regex=new RegExp(`${text}`,"gi")

             return (add.address.match(regex)) 
         }
         )
      
     }
    
     
     console.log(restaurants)
     console.log('matches',matches)
    
     setSuggestions(matches)
     setText(text)
     
   

 }



return (
    <div style ={{
      
        marginLeft:"620px",
        marginTop:"100px",
       
      
    }}>
        
        <Input 
        style={{marginRight:"62%"}}
        fluid
         icon='search' 
         size='huge'
         placeholder='Address,ie:Cité Ennour,Gafsa...' 
        onChange={e=>onChangeHandler(e.target.value)}
        value={text}/>
       
        {suggestions && suggestions.map((suggestion,i)=>
            <div key={i} onClick= {()=>onSuggestHandler((suggestion.address))} className="option">{suggestion.address}
            </div>
           )}
            { suggestions.length === 0 && text.length!==0 ? <div>Not found...</div>:<div></div>}
        <div style={{
             marginTop : "30px",
             marginRight:"600px",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom:"30px"
              }}>
            {restaurants.filter( el => el.address === text).map(el=>
            <Link to={`/menusList/${el.name}`}>
                <Card >
            <Image src={el.imageURL} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{el.name}</Card.Header>
              <Card.Meta>{el.address}</Card.Meta>
              <Card.Description>
               {el.desc}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Rating icon='star' defaultRating={3} maxRating={4} />
            </Card.Content>
          </Card></Link>
          )}
    </div>
   
    
    
  </div>
)
}
export default SearchInput