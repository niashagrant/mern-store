import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import Container from "react-bootstrap/Container";
import ProductCard from "../components/ProductCard";
import AddedToCartModal from "../components/Modals";
import API from "../utils/API";

function Product(props) {
  // console.log("this is my product props:", props);
  const { user } = props;
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [hideModal, setHideModal] = useState(true);
  const [showAddModal, setshowAddModal]=useState(false)
  const { ProductId } = useParams();
  const history = useHistory();


  const loadThisProduct = () => {
    API.getOneProduct(ProductId).then((OneProduct) => {
      // console.log("THIS IS OUR ONE PRODUCT: ", OneProduct);
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
      // buttonText="Add to Cart"

      // console.log("QUANTITY from Product.js: ", quantity)
      // console.log("PRODUCTID from Product.js: ", product);
      // console.log(quantity);
      const newCartItem = { productId: product._id, quantity: quantity };
      API.addToCart(newCartItem)
        .then((x) => {
          showAddModal(true);
          console.log(x.data);
          console.log("was item added?");
        })
        .catch(() => alert("You must be logged in to add to your cart."));
    }
  };

  useEffect((product) => {
    loadThisProduct(product);
  }, []);

  console.log("WHAT IS THIS>>>: ", this);
  return (
    <Container className="m-auto">
      <ProductCard
        id={product._id}
        name={product.name}
        image={product.mediaUrl}
        price={product.price}
        description={product.description}
        productId={product.id}
        user={user}
        // value={product.orderQty}
        // buttonText={handleButton}
        handleButton={handleButton}
        onChange={(event) => setQuantity(Number(event.target.value))}
      />
      <AddedToCartModal status={this.state.showAddModal} hideModal={this.hideModal}/>
    </Container>
  );
}

export default Product;
