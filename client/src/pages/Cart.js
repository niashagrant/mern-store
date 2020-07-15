import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router"; 
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import CartCard from "../components/CartCard";
import SignInModal from "../components/Modals/SignInModal";
import ThankYouModal from "../components/Modals/ThankYouModal";
import Row from "react-bootstrap/Row";
import API from "../utils/API";
import axios from "axios";

import StripeCheckout from "react-stripe-checkout";

function Cart(props) {
  const { user } = props;
  const [cart, setCart] = useState([]);
  const [, setRemoval] = useState();
  const [, setHideModal] = useState(false);
  const [ , setHideThankYou] = useState(false);
  const [showThankYou, setThankYou] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState();
  // const history=useHistory();

  const closeModal = () => {
    setHideModal(true);
    setShowModal(false);
  };

  const closeThankYou = () => {
    setHideThankYou(true);
    setThankYou(false)
  }

  const makePayment = (token) => {
    console.log("MAKE PAYMENT");
    if (!user) {
      alert("Replace this with a modal");
    } else {
      const body = {
        token,
        total,
      };
      const headers = {
        "Content-Type": "application/json",
      };

      // .then .catch why not working or being hit?
      axios
        .post(`/payment`, body)
        .then((response) => {
          console.log("RESPONSE", response);
          const { status } = response;
          console.log("STATUS", status);
          // checkout()
        })
        .catch((error) => {
          // checkout()
          console.log("CAN I SEE THIS????????");
          console.log(error);
        });
        setThankYou(true);
    }
  };

  useEffect(() => {
    console.log("user:", props);
    loadThisCart();
  }, [cart]);

  // function to get the request from the back with product information and quantity

  const loadThisCart = () => {
    console.log("loadcart");
    if (!user) {
      setShowModal(true);
    } else {
      // something..
      API.renderCart(user).then((cartItems) => {
        console.log("back:", cartItems.data);
        if (cart.length !== cartItems.data.length) {
          setCart(cartItems.data);

        
          const payAmount = cartItems.data.reduce((total, element) => {
            return total + element.orderQty * element.product.price;
          }, 0);
          console.log("this is how much we are going to spend", payAmount);

        }      
        const payAmount = cart.reduce((total, element) => {
          return total + element.orderQty * element.product.price;
        }, 0);
        console.log("this is how much we are going to spend", payAmount);
        if (total !== payAmount) {

          setTotal(payAmount);
        }
      });
    }
  };
  //function to send information about what product we want to delete from database

  const updateThisCart = (event) => {
    if (!user) {
      alert("You must be signed in to add items to your cart.");
    } else {
      console.log("ProductId:", cart);
      const itemToRemove = event.target.getAttribute("data-id");
      console.log(itemToRemove);
      const newCartArray = [...cart];
      const filterCart = newCartArray.filter((cart) => cart !== itemToRemove);
      API.delFromCart(itemToRemove)
        .then((deleted) => {
          event.preventDefault();
          console.log("product was deleted", deleted);
          setRemoval(deleted);
          setCart(filterCart);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updateQty = (id, qty) => {
    console.log("button clicked");
    // console.log(event.target);
    console.log("value from Child:", id, qty);
    const qtyUpdate = { id, qty };
    API.updateCartQty(qtyUpdate)
      .then((updated) => {
        console.log(updated);
       setCart([])
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkout = () => {
    console.log("***CHECKING OUT");
    API.createCheckout(total).then((response) => {
      console.log("is total in there", response);
      setCart([]);
    });
  };
  

  return (
    <>
      <Container className="mt-5">
        {!user ? (
          <>
            <Row className="d-flex justify-content-center pt-5 mt-5">
              <Row>
                <h5
                  className="text-center mt-5 pt-5"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Oh no! You must be logged in to access this page!
                </h5>
              </Row>
            </Row>
          </>
        ) : (cart.length===0) ? (  <>
        
        <h3  className="text-center mt-5 pt-5" style={{ fontFamily: "Playfair Display" }}>
          Well this is sad.  Your cart is empty.
        </h3>
        <h4 className="text-center mt-5 pt-5" style={{ fontFamily: "Playfair Display" }}>
           Go check out our <Link to="/" className="text-warning" style={{textDecoration: "underline"}} href="#" >Products</Link> !</h4>
           <h5 className="text-center mt-3" style={{ fontFamily: "Playfair Display" }}> They are 'nice-to-have' <span>😉</span> .</h5>

         </> ) : (
          <>
            <h3 className="text-center cartCrown mb-3"><img src="../../images/cartCrown.png" alt="crown"/> </h3>

            {cart.map((element) => {
              // console.log("this is our element:",element)
              return (
                <CartCard
                  key={element.product.mediaUrl}
                  id={element._id}
                  name={element.product.name}
                  image={element.product.mediaUrl}
                  price={element.product.price}
                  description={element.product.description}
                  value={element.orderQty}
                  productid={element._id}
                  updateQty={updateQty}
                  // onChange={event => setQuantity(Number(event.target.value))}
                  updateThisCart={updateThisCart}
                />
              );
            })}
          </>
        )}
        <SignInModal status={showModal} hideModal={closeModal} />

        <StripeCheckout
          className="col col-sm-1 col-md-4 col-centered"
          stripeKey="pk_test_51H2jAhF6rrHNM5skrWeDa7Ug2AjxFHAhKeuw8Dv1m2OGNI7WEWf1zebIu8zW5MLhYYygTV7WcfG5L7TOSCtwpfWX00nxZ8LW4t"
          token={makePayment}
          name="Queen St. Market"
          amount={total * 100}
          shippingAddress
          billingAddress
          image="https://res.cloudinary.com/lindseytummond/image/upload/v1594480229/crown_only_wsj9yt.png"
        >
          {" "}
          {(user && cart.length > 0) ? (
            <>
            <Row className="w-100 d-flex justify-content-center">
            <Row className="w-75 d-flex justify-content-end">
                <h5 className=" mr-4 pt-1" style={{ fontFamily: "Playfair Display" }}>Total: ${total}</h5>
              </Row>
              </Row>
              <Row className="w-100 d-flex justify-content-center">
                
                <button
                  onClick={checkout}
                  size="lg"
                  block
                  className="mt-5 mb-5 p-2 center border border-muted text-dark bg-warning"
                >
                  Click here to complete your purchase.
                  {/* comes from state on line 23 */}
                </button>
              </Row>
            </>
          ) : (
            <></>
          )}
        </StripeCheckout>
        <ThankYouModal status={showThankYou} hideModal={closeThankYou} />
      </Container>
    </>
  );
}

export default Cart;
