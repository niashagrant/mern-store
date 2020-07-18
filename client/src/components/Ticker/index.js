import React from "react";
// import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import "./style.css"






function Ticker() {
    
  
  return (
    <Carousel className="bg-warning carousel col col-sm-12 text-center pb-3 pt-3 flex-column">
      <Carousel.Item>
        <h6>Current Specials!</h6>
        <h6>All month - FREE shipping and NO taxes!</h6>
        <h6>&#9830; &nbsp; Use code: FARLEY &nbsp; &#9830;</h6>
      </Carousel.Item>
      <Carousel.Item>
      <h6>Current Specials!</h6>
        <h6>Recent Bootcamp Graduates receive a 20% discount!</h6>
        <h6>&#9830; &nbsp; Use code: BACON &nbsp; &#9830;</h6>
      </Carousel.Item>
      <Carousel.Item>
      <h6>Current Specials!</h6>
        <h6>With each purchase, receive a 15 minute tutoring session!!</h6>
        <h6>&#9830; &nbsp; Use code: CHICKEN &nbsp; &#9830;</h6>
      </Carousel.Item>
  </Carousel>

  )
  
  }
  
  
  export default Ticker;


//   <Wrapper className="bg-warning d-flex justify-content-center h-25">
//   <Row > &#9830; July Special! &#9830; Free shipping and no taxes for the entire month of July! &#9830; Use code: FARLEY </Row>
//  </Wrapper>