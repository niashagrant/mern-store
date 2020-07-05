import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Container from 'react-bootstrap/Container';
import ProductCard from '../components/ProductCard';
import API from "../utils/API";


function Product(props) {

    const [product, setProduct] = useState({});
    const [error, setError] =useState(false);
    const { ProductId } = useParams();
    // console.log("TEST WITH NOAH: ", ProductId) 
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
            />
        </Container>
    )

}


export default Product;
