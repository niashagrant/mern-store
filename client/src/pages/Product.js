import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router";
import Container from 'react-bootstrap/Container';
import ProductCard from '../components/ProductCard';
import API from "../utils/API";



function Product(props) {
    console.log("this is my product props:",props);
    const {user}=props;
    // let buttonText;
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({});
    const [error, setError] =useState(false);
    const { ProductId } = useParams();
    let history =useHistory();
   
    const loadThisProduct = () =>{
        API.getOneProduct(ProductId)
        .then(OneProduct=>{
            console.log("THIS IS OUR ONE PRODUCT: ", OneProduct)
            if(error){
                setError(OneProduct.error)
            }else{
                setProduct(OneProduct.data)
            }
        })
    }
    const handleButton =(e)=>{
        console.log("button clicked");
        e.preventDefault();
        if (!user){
            // buttonText="Log In"
            history.push("/login")
        }else{
            // buttonText="Add to Cart"

            console.log("QUANTITY: ", quantity)
            console.log("PRODUCTID: ", product)
            const newCartItem = {quantity: quantity, productid: product._id}
            API.addToCart(newCartItem)
            .then (() => alert("Product added to cart."))
            .catch(() => alert("You must be logged in to add to your cart."))
        }
    }

    useEffect((product) => {
        loadThisProduct(product)
    }, []);

  
            
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
            value={quantity}
            // buttonText={handleButton}
            handleButton={handleButton}
            onChange={event => setQuantity(Number(event.target.value))}
            />
        </Container>
    )

}


export default Product;
