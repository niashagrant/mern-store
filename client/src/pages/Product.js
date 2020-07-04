import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ProductCard from '../components/ProductCard';
import getOneProduct from "../utils/API";


function Product(props) {

    const [product, setProduct] = useState({});
    const [error, setError] =useState(false);

    const loadThisProduct = productId => {
        getOneProduct(productId)
        .then(data => {
            console.log("JUST WRITE SOMETHING")
            console.log(data);
            if(data.error) {
                setError(data.error);
            } else {
                setProduct(data);
            }
        })
    }

    useEffect(() => {
        // const productId = props.params.productId;
        // loadThisProduct = (productId);
    }, []);
            
    return (
        <Container className="col col-sm-1 col-md-9 col-centered">
            <h6>Single Product Page</h6>
            <ProductCard
            // id={productId._id} 
            // name={name} 
            // image={mediaUrl} 
            // price={price} 
            // description={description}
            // productId={_id}
            />
        </Container>
    )

}


export default Product;
