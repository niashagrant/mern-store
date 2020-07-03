import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Cards from "../components/Card";

import axios from "axios";

function Home() {
  let [products, renderProducts] = useState([]); //variable ref, variable function
  useEffect(() => {
    console.log("useEffects");
    axios
      .get("/allproducts")
      .then((dbproducts) => {
        renderProducts(dbproducts.data);
        console.log("dbproducts", dbproducts.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // ==================== JEN'S CODE ====================
  // return (
  //   <Container className="productContainer" style={{ height: "100vh" }}>
  //     {products.map((element, index) => (
  //       <Cards
  //         id={element._id}
  //         name={element.name}
  //         image={element.mediaUrl}
  //         price={element.price}
  //         description={element.description}
  //       />
  //     ))}
  //   </Container>
  // );

  return (
    <Container>
      <Row>
        {products.map((element, index) => (
          <Cards
            id={element._id}
            name={element.name}
            image={element.mediaUrl}
            price={element.price}
            description={element.description}
          />
        ))}
      </Row>
      {/* cb function: element(ONE AT A TIME), index of array, array */}
    </Container>
  );
}

export default Home;
