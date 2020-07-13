import React, { useState} from "react";
// import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import "./style.css"






function Ticker() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    
  
  return (
    <Carousel className="bg-warning carousel text-center pb-3 pt-3">
      <Carousel.Item>
        <p> July Special! &#9830; Free shipping and no taxes for the entire month of July! &#9830; Use code: FARLEY </p>
      </Carousel.Item>
      <Carousel.Item>
        <p> July Special! &#9830; Free shipping and no taxes for the entire month of July! &#9830; Use code: BACON </p>
      </Carousel.Item>
      <Carousel.Item>
        <p> July Special! &#9830; Free shipping and no taxes for the entire month of July! &#9830; Use code: CHICKEN </p>
      </Carousel.Item>
  </Carousel>

  )
  
  }
  
  
  export default Ticker;


//   <Wrapper className="bg-warning d-flex justify-content-center h-25">
//   <Row > &#9830; July Special! &#9830; Free shipping and no taxes for the entire month of July! &#9830; Use code: FARLEY </Row>
//  </Wrapper>