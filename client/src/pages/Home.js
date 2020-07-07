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

// ==================== JEN'S CODE ====================

// function Home(props) {
//   let [products, setProducts] = useState([]); //variable ref, variable function
//   useEffect(() => {
//     // console.log('useEffects')
//     axios
//       .get("/allproducts")
//       .then((dbproducts) => {
//         setProducts(dbproducts.data);
//         console.log("dbproducts", dbproducts.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <Container
//       className="productContainer col col-sm-1 col-md-9 col-centered pl-4"
//       style={{ height: "100vh" }}
//     >
//       {products.map((element, index) => (
//         <Cards
//           key={element._id}
//           id={element._id}
//           name={element.name}
//           image={element.mediaUrl}
//           price={element.price}
//           description={element.description}
//           productId={element._id}
//         />
//       ))}
//     </Container>
//   );
// }

export default Home;
