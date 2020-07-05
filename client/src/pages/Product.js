import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ProductCard from '../components/ProductCard';
import API from "../utils/API";


function Product(props) {

    const [product, setProduct] = useState([]);
    const [error, setError] =useState(false);

    // const loadThisProduct = productId => {
    //     getOneProduct(productId)
    //     .then(data => {
    //         console.log(data);
    //         if(data.error) {
    //             setError(data.error);
    //         } else {
    //             setProduct(data);
    //         }
    //     })
    // }
    const loadThisProduct = () =>{
        API.getOneProduct()
        .then(OneProduct=>{
            console.log(OneProduct)
            if(error){
                setError(OneProduct.error)
            }else{
                setProduct(OneProduct.data)
            }
        })
    }

    useEffect(() => {
        const productId=product.data
      loadThisProduct(productId)
    }, []);
            
    return (
        <Container className="col col-sm-1 col-md-9 col-centered">
            <h6>Single Product Page</h6>
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
