import React, { useState, useEffect } from 'react'; // imported useEffect
import Container from 'react-bootstrap/Container';
import CartCard from '../components/CartCard';
import SignInModal from "../components/Modals/SignInModal";
import Row from "react-bootstrap/Row";
import API from "../utils/API";
import axios from "axios"


import StripeCheckout from "react-stripe-checkout"

function Cart(props) {

    const {user}=props;
    const [ cart, setCart ] = useState([]);
    const [, setRemoval]= useState();
    const [, setHideModal] = useState(false);
    const [showModal, setShowModal]=useState(false);
    const [total, setTotal] = useState ();

    const closeModal = () => {
        setHideModal(true);
        setShowModal(false);
      }
   
    

    const makePayment = token => {
        console.log("MAKE PAYMENT")
        if (!user) {
            alert("Replace this with a modal");
        }
        else {
        const body = {
            token,
            total
        }
        const headers = {
            "Content-Type": "application/json"
        }

        // .then .catch why not working or being hit?
        axios.post (`/payment`, body)
        .then(response => {
            console.log("RESPONSE", response)
            const {status} = response;
            console.log("STATUS", status)
            // checkout()
        })
        .catch(error => {
            // checkout()
            console.log("CAN I SEE THIS????????")
            console.log(error)})
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
            console.log("this is the qty", cartItems.data[0].orderQty, typeof cartItems.data[0].orderQty )
            console.log("this is the qty", cartItems.data[0].product.price, typeof cartItems.data[0].product.price )
            const payAmount= cartItems.data.reduce((total,element)=>{return total + element.orderQty* element.product.price} ,0)
            console.log("this is how much we are going to spend",payAmount)
            setTotal(payAmount)
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
        const checkout= ()=>{
            console.log("***CHECKING OUT")
            API.createCheckout(total)
            .then(response =>{
                console.log( "is total in there",response)
                setCart([])
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
            <h3 className="text-center border-bottom border-muted pb-4" style={{ fontFamily: 'Playfair Display'}}> YES.
             You need all of this!
            </h3>
            
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
                amount={total*100}
                shippingAddress
                billingAddress
                image="https://res.cloudinary.com/lindseytummond/image/upload/v1594480229/crown_only_wsj9yt.png"
        > { user ? ( <>
            <Row className="w-100 d-flex justify-content-center">
             <button onClick={checkout} size="lg" block className="mt-5 mb-5 p-2 center border border-muted">
                Click here to complete your purchase. || Total: ${total}
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




