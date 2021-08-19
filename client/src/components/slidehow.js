import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import'./slideshow.css'

const proprities = {
 duration :5000,
 transitionDuration:500,
 infinite:true,
 indicators:true,
 arrows:true
};

const Slideshow = () => {
    return (
      <div className="slide-container" >
        <Slide {...proprities}>
          <div className="each-slide">
            <div className="img1" >
              <img src ="https://www.just-eat.fr/assets/images/header/hero/pizza_light/pizza_light_mobile.jpg"/>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src="https://www.mccourier.com/wp-content/uploads/2021/05/5-17.jpg"/>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <img src="https://www.just-eat.fr/assets/images/header/hero/tableburgers/burgers_mobile.jpg"/>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow