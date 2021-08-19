import React, { useState } from "react";
import { Button, Divider, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../redux/Actions/restaurantActions";
import { useHistory } from "react-router-dom";

const sizes = ["large"];

const AddRestaurant = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const [restaurant, setRestaurant] = useState({ name: "", desc: "", imageURL: "",address:""});

  const handleChange = (e) => {
    e.preventDefault();
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRestaurant(restaurant));
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
              placeholder="name"
              onChange={handleChange}
            />
            <Form.Field
              label="desc"
              control="input"
              name="desc"
             
              placeholder="desc"
              onChange={handleChange}
            />
            <Form.Field
              label="imageURL"
              control="input"
              name="imageURL"
              placeholder="imageURL"
              onChange={handleChange}
            />
             <Form.Field
              label="address"
              control="input"
              name="address"
              placeholder="address"
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

export default AddRestaurant;