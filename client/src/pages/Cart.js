import React, { useState, useEffect } from 'react'; // imported useEffect
import Container from 'react-bootstrap/Container';
import CartCard from '../components/CartCard';
import SignInModal from "../components/Modals/SignInModal";
import Row from "react-bootstrap/Row";
import API from "../utils/API";


import StripeCheckout from "react-stripe-checkout"

function Cart(props) {

    const {user}=props;
    const [ cart, setCart ] = useState([]);
    const [, setRemoval]= useState();
    const [, setHideModal] = useState(false);
    const [showModal, setShowModal]=useState(false);

    const closeModal = () => {
        setHideModal(true);
        setShowModal(false);
      }
   
    const [product, setProduct] = useState ({
        name: "FBC Women's T-Shirt",
        price: 24,
        productBy: "Queen St. Market"
    })

    const makePayment = token => {
        if (!user) {
            alert("Replace this with a modal");
        }
        else {
        const body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
        .then(response => {
            console.log("RESPONSE", response)
            const {status} = response;
            console.log("STATUS", status)
        })
        .catch(error => console.log(error))
    }}

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
          }
        });
      }
    };
    //function to send information about what product we want to delete from database

        const updateThisCart =(event)=>{
            if (!user) {
                alert("You must be signed in to add items to your cart.")
            }
            else{
                console.log("ProductId:", cart)
                const itemToRemove= event.target.getAttribute("data-id")
                console.log(itemToRemove)
                const newCartArray = [...cart];
                const filterCart = newCartArray.filter(cart => cart !== itemToRemove);
                API.delFromCart(itemToRemove)
                .then(deleted=>{
                    event.preventDefault();
                    console.log("product was deleted", deleted);
                    setRemoval(deleted);
                    setCart(filterCart);

                }).catch(err=>{
                    console.log(err)
                })
            }
        }

        const updateQty =(id,qty)=>{
            console.log("button clicked")
            // console.log(event.target);
            console.log("value from Child:",id,qty)
            const qtyUpdate={id,qty}
           API.updateCartQty(qtyUpdate)
           .then(updated=>{
               console.log(updated);
               
           }).catch(err=>{
               console.log(err);
               
           })
            
        }

    return (
        <>
        <Container>
            { !user? (<> 
            <Row  className="d-flex justify-content-center pt-5 mt-5">
                <Row>
                <h5 className="text-center mt-5 pt-5" style={{ fontFamily: 'Playfair Display'}}>Oh no! You must be logged in to access this page!</h5>
                </Row>
            </Row>
            </>) : (<>
            
            <h3 className="text-center cartCrown"><img src="../../images/cartCrown.png" alt="crown"/> </h3>
            
            {cart.map(( element ) =>{
                // console.log("this is our element:",element)
             return(  <CartCard
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
                />) }
            )}
           
            </>)}
        <SignInModal status={showModal} hideModal={closeModal}/>


        <StripeCheckout className="col col-sm-1 col-md-4 col-centered"
                stripeKey="pk_test_51H2jAhF6rrHNM5skrWeDa7Ug2AjxFHAhKeuw8Dv1m2OGNI7WEWf1zebIu8zW5MLhYYygTV7WcfG5L7TOSCtwpfWX00nxZ8LW4t"
                token={makePayment}
                name= "Queen St. Market"
                amount={product.price * 100}
                shippingAddress
                billingAddress
                image="https://res.cloudinary.com/lindseytummond/image/upload/v1594480229/crown_only_wsj9yt.png"
        > { user ? ( <>
            <Row className="w-100 d-flex justify-content-center">
             <button  size="lg" block className="mt-5 mb-5 p-2 center border border-muted">
                Click here to complete your purchase. || Total: ${product.price}
                {/* comes from state on line 23 */}
            </button>
            </Row>
        </>) : (<>
        </>
        )}
        </StripeCheckout>
        </Container>
    </>
    )
}


export default Cart;




