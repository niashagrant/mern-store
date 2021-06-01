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
        setProducts(dbproducts.data.sort(() => Math.random() - 0.5));
        // console.log("dbproducts", dbproducts.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container
      className="productContainer mt-5 col w-75"
      style={{ 
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-around",
        alignContent: "flex-start",
        overflow: "auto",
        paddingBottom: "3vh"
      }}
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
