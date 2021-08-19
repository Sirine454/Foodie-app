import React,{useState,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import Header from '../components/header'
import SearchInput from '../components/SearchInput'
import './Home.css'
import Slideshow from '../components/slidehow'
import Capture from '../pages/images/'




const Home = () => {
    const auth = useSelector(state=>state.auth)
  
   
    return (
    <div className="home">
    {auth.isAuth?
    <Link to ="/admin"><button>Admin</button></Link>:<div></div>}
    <div className="title1">
        It's time to order<br></br> some delicious food!
    </div>
    <div className="title">
        Find restaurant in your area
    </div>
    <div className="search-area">
    <SearchInput/>
    </div>
    <div>
        <Slideshow />
    </div>
</div>
    )
}

export default Home
