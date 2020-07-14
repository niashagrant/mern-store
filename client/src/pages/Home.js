import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Cards from "../components/Card";
import axios from "axios";

import ReactDOM from 'react-dom';
import Pagination from '../components/Pagination'

function Home(props) {
  let [products, setProducts] = useState([]); //variable ref, variable function
  
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  
  useEffect(() => {
    // console.log('useEffects')
    axios
      .get("/allproducts")
      .then((dbproducts) => {
        setProducts(dbproducts.data.sort(() => Math.random() - 0.5));
        console.log("dbproducts", dbproducts.data);
      })
      .catch((error) => console.log(error));

    const fetchProducts = async () => {
        const res = await axios.get('/');

        setProducts(res.data);
        setLoading(false);

    };

    fetchProducts();

  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct * productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

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
      <Pagination products={currentProducts} loading={loading}/>
    </Container>
  );
}

export default Home;
