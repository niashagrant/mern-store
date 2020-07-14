
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import Container from "react-bootstrap/Container";
import ProductCard from "../components/ProductCard";
import AddedToCartModal from "../components/Modals/AddedToCartModal";
import API from "../utils/API";

function Product(props) {
  // console.log("this is my product props:", props);
  const { user } = props;
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [, setHideModal] = useState(false);
  const [showModal, setShowModal]=useState(false);
  const { ProductId } = useParams();
  const history = useHistory();

 
  const closeModal = () => {
    setHideModal(true);
    setShowModal(false);
  }

  const loadThisProduct = () => {
    API.getOneProduct(ProductId).then((OneProduct) => {
      console.log("THIS IS OUR ONE PRODUCT: ", OneProduct);
      if (error) {
        setError(OneProduct.error);
      } else {
        setProduct(OneProduct.data);
      }
    });
  };

  const handleButton = (e) => {
    // console.log("button clicked");
    e.preventDefault();
    if (!user) {
      // buttonText="Log In"
      history.push("/login"); 
    } else {
      const newCartItem = { productId: product._id, quantity: quantity };
      API.addToCart(newCartItem)
        .then((x) => {
          setShowModal(true);
          console.log(x.data);
          // console.log("was item added?");
        })
        .catch((error) => {
          console.log("Product.js line 51 error: ", error)
        });
    }
  };

  useEffect((product) => {
    loadThisProduct(product);
  }, []);

  return (
    <>
    <Container className="mt-5">
      <ProductCard
        id={product._id}
        name={product.name}
        image={product.mediaUrl}
        price={product.price}
        description={product.description2}
        productId={product.id}
        user={user}
        // value={product.orderQty}
        // buttonText={handleButton}
        handleButton={handleButton}
        onChange={(event) => setQuantity(Number(event.target.value))}
      />
    <AddedToCartModal status={showModal} hideModal={closeModal} image={product.mediaUrl}/>
    </Container>
    </>
  );
}

export default Product;