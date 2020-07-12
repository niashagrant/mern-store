import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Cards from "../components/Card";
import axios from "axios";

function Home(props) {
  let [products, setProducts] = useState([]); //variable ref, variable function
  useEffect(() => {
    // console.log('useEffects')
    axios
      .get("/allproducts")
      .then((dbproducts) => {
        setProducts(dbproducts.data);
        console.log("dbproducts", dbproducts.data);
        console.log("CATERGORIES", dbproducts.data.catergory3);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container
      className="productContainer col col-sm-1 col-md-9 col-centered pl-4"
      style={{ height: "100vh" }}
    >
      {products.map((element, index) => (
        <Cards
          key={element._id}
          id={element._id}
          name={element.name}
          image={element.mediaUrl}
          price={element.price}
          description={element.description}
          productId={element._id}
        />
      ))}
    </Container>
  );
}

export default Home;
