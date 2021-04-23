import React from 'react';
import j1 from './Images/J (1).jpg' ;
import j2 from './Images/J (2).jpg' ;
import j3 from './Images/J (3).jpg' ;
import j4 from './Images/J (4).jpg' ;
import Carousel from 'react-bootstrap/Carousel'


const Country=()=>{
    return (
       <>
<div className="container-fluid">
    <div className="row count">
        <div className="country">
        

        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={j1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={j2}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={j3}
      alt="Third slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={j4}
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>




           
        </div>
    </div>
</div>
</>
    );
};
export default Country;