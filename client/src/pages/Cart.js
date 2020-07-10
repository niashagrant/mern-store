import React, { useState, useEffect } from 'react'; // imported useEffect
import Container from 'react-bootstrap/Container';
import CartCard from '../components/CartCard';
import API from "../utils/API";


function Cart(props) {

    const {user}=props;
    const [ cart, setCart ] = useState([]);
    const [ removal, setRemoval]= useState();
   

    useEffect(() => {                           // added useEffect in which we call loadThisCart()
        console.log("user:", props);
        loadThisCart();
    }, []);
    
    // function to get the request from the back with product information and quantity
    const loadThisCart = () => {
        console.log("loadcart")
        if (!user) {
            alert("You must be signed in to add items to your cart.")
        } else {
            API.renderCart(user)
            .then(cartItems => {
                console.log("back:", cartItems.data)
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
                API.delFromCart(itemToRemove)
                .then(deleted=>{
                    console.log("product was deleted", deleted);
                    setRemoval(deleted);
                    window.location.reload();
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
        <Container className="col col-sm-1 col-md-9 col-centered">
            <h1 className="cartTitle">SHOPPING CART</h1>
            <h6 className="font-italic my-4">You've got great taste!  Look at all these beautiful items you've chosen!</h6>
            {/* <h6 className="font-italic my-4"> Oh no! Your shopping cart is EMPTY!  Go have a look at our product pages and add some gorgeous products!</h6> */}

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
                deleteProd={updateThisCart}
                />) }
            )}
        </Container>
    )
}


export default Cart;

