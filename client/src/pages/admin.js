import React ,{useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {  deleteRestaurant, getRestaurants } from '../redux/Actions/restaurantActions';
import { Button, Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";


const Admin = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const restaurants = useSelector(state => state.restaurantReducer.restaurants)
    const loading=useSelector(state => state.restaurantReducer.loadRestaurants)
    const error=useSelector(state => state.restaurantReducer.error)
    useEffect(() => {
        dispatch(getRestaurants())
        
    }, [])
    const handledelete=(id)=>{
        dispatch(deleteRestaurant(id))
    }
    return (
        
          <div>
      {auth.user.role==="admin" ? <div>
      <h1>Restaurants</h1>
      {loading ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : error ? (
        console.log(error)
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th></th>
              
              <th></th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((el) => (
              <tr key={el._id}>
                <td>{el._id}</td>
                <td>{el.name}</td>
                <td>
                  <Link to={`/editRestaurant/${el._id}`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    
                    </Button>
                    </Link>
                    
                    <Button  className="btn-outline-danger btn-sm" onClick={()=>handledelete(el._id)}>
                      <i className="fas fa-trash"></i>
                    </Button>
                    
                    <Link to= "/add">
                    <Button className="btn-outline-danger btn-sm">
                      <i className="fas fa-trash"></i>
                    </Button>
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      </div> : <div>DENIED
      <i className="fas fa-times" style={{ color: "red" }}></i></div>}
    
        </div>
    )
}

export default Admin
