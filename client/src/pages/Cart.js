import React, { useState, useEffect } from 'react'; // imported useEffect
import Container from 'react-bootstrap/Container';
import CartCard from '../components/CartCard';
import API from "../utils/API";


function Cart(props) {

    const {user}=props;
    const [ cart, setCart ] = useState([]);
    const [ removal, setRemoval]= useState();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {                           // added useEffect in which we call loadThisCart()
        console.log("user:", props)
        loadThisCart()
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
    const updateThisCart =()=>{
        if (!user) {
            alert("You must be signed in to add items to your cart.")
        }
        else{
            console.log("ProductId:", cart)
             const itemToRemove={quantity: quantity, productid: cart[0].product._id}
            console.log(itemToRemove)
            API.delFromCart(itemToRemove)
            .then(deleted=>{
                console.log("product was deleted", deleted);
                setRemoval(deleted)
                
            }).catch(err=>{
                console.log(err)
            })
        }
    }


    return (
        <Container className="col col-sm-1 col-md-9 col-centered">
            <h6>Cart Page</h6>
            {cart.map(( element ) =>{
                // console.log("this is our element:",element)
             return(  <CartCard
                key={element.product.mediaUrl}
                id={element._id} 
                name={element.product.name} 
                image={element.product.mediaUrl} 
                price={element.product.price} 
                description={element.product.description}
                value={element.quantity}
                productid={element.product._id}
                // onChange={event => setQuantity(Number(event.target.value))}
                deleteProd={updateThisCart}
                />) }
            )}
        </Container>
    )

}


export default Cart;

