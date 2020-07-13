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
    const [ removal, setRemoval]= useState();
    const [hideModal, setHideModal] = useState(false);
    const [showModal, setShowModal]=useState(false);

    const closeModal = () => {
        setHideModal(true);
        setShowModal(false);
      }
   
    // TO DO: update with product in store vs hard coded!!!
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

    useEffect(() => {                           // added useEffect in which we call loadThisCart()
        console.log("user:", props);
        loadThisCart(); 
    }, []);
    
    // function to get the request from the back with product information and quantity
    const loadThisCart = () => {
        // console.log("loadcart")
        if (!user) {
            setShowModal(true);
        } else {
            API.renderCart(user)
            .then(cartItems => {
                // console.log("back:", cartItems.data)
              setCart(cartItems.data)  
            })
        }
    }
    //function to send information about what porduct we want to delete from database

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
            <Row  className="d-flex justify-content-center">
            <Row className="mt-5 mb-5">
            <p variant="white" style={{ fontSize: ".1rem"}}>-</p> 
            </Row>
            <Row className="mt-5 mb-5">
            <p variant="white" style={{ fontSize: ".1rem"}}>-</p> 
            </Row>
            <Row>
            <h1 className="text-center mt-5 pt-5" style={{ fontFamily: 'Playfair Display'}}>Oh no! You must be logged in to access this page!</h1>
            </Row>
            </Row>
            </>) : (<>
            <h1 className="text-center">👑 
            <span className="mb-5" style={{ fontFamily: 'Playfair Display'}}> YES.</span>
            </h1>
            <h1 className="text-center mb-5">
            <span className="mb-5 font-italic" style={{ fontFamily: 'Playfair Display'}}> You need all of this! </span>
            </h1>
            
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
        </Container>
        
      
       
        <StripeCheckout className="col col-sm-1 col-md-4 col-centered"
                stripeKey="pk_test_51H2jAhF6rrHNM5skrWeDa7Ug2AjxFHAhKeuw8Dv1m2OGNI7WEWf1zebIu8zW5MLhYYygTV7WcfG5L7TOSCtwpfWX00nxZ8LW4t"
                token={makePayment}
                name= "Queen St. Market"
                amount={product.price * 100}
                shippingAddress
                billingAddress
                image="https://res.cloudinary.com/lindseytummond/image/upload/v1594480229/crown_only_wsj9yt.png"
        > { user ? ( <>
            <Row className="w-100 d-flex justify-content-right bg-primary">
             <button variant="primary" size="lg" block className="mt-5 mb-5 py-2 px-1 center">
                Click Here to Complete Your Purchase. || Total: ${product.price}
                {/* comes from state on line 23 */}
            </button>
            </Row>
        </>) : (<>
        </>
        )}
        </StripeCheckout>
    </>
    )
}


export default Cart;

