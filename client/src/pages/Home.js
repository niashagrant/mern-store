import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Cards from '../components/Card';
import axios from 'axios';


function Home() {
    let [products, renderProducts] = useState([]); //variable ref, variable function
    useEffect(() => {
        console.log('useEffects')
        axios.get('/allproducts')
        .then(dbproducts => {
            renderProducts(dbproducts.data)
            console.log('dbproducts', dbproducts.data)
        })
        .catch(error => console.log(error))
    },[])

    return (
        
        <Container className="productContainer" style={{height: "100vh"}}>
            {products.map(( element, index ) =>  
                <Cards id={element._id} 
                name={element.name} 
                image={element.mediaUrl} 
                price={element.price} 
                description={element.description} /> 
            )}
        </Container>

    )

}


export default Home;