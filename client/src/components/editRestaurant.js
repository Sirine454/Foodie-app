import React, { useState, useEffect } from "react";
import { Button, Divider, Form } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { editRestaurant, getRestaurant } from "../redux/Actions/restaurantActions";
import { useHistory } from "react-router-dom";

const sizes = ["large"];

const EditRestaurant = ({match}) => {
 
   const resto = useSelector(state => state.restaurantReducer.restaurants)
   const oldrestaurant = useSelector(state => state.restaurantReducer.restaurant)
   console.log(oldrestaurant)
  const [restaurant, setRestaurant] = useState({ name: "", desc: "", imageURL: "",address:""});
 
  


  const dispatch = useDispatch();
  const history = useHistory();



  useEffect(() => {
    setRestaurant({ ...oldrestaurant });
  }, [oldrestaurant]);

  useEffect(() => {
    dispatch(getRestaurant(match.params.id));
  }, [match.params.id]);

  const handleChange = (e) => {
    e.preventDefault();
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(editRestaurant(oldrestaurant._id, restaurant));
    
    setRestaurant({ name: "", desc: "", imageURL: "",address:""});
    history.push("/");
  };
  return (
    <div> 
       {sizes.map((size) => (
        <Form size={size} key={size} onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              label="Name"
              name="name"
              control="input"
              placeholder={restaurant.name}
              onChange={handleChange}
            />
            <Form.Field
              label=" desc"
              control="input"
              name=" desc"
              placeholder={ restaurant.desc}
              onChange={handleChange}
            />
            <Form.Field
              label=" Image"
              control="input"
              name="image"
              placeholder={restaurant.imageURL}
              onChange={handleChange}
            />
             <Form.Field
              label="address"
              control="input"
              name="address"
              placeholder={restaurant.address}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
          <Divider hidden />
        </Form>
      ))} 
    </div>
  );
};

export default EditRestaurant;