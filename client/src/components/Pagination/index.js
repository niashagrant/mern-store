import React from "react";
import "./style.css"

const Pagination = ({products, loading}) => {

    if(loading){
        return<h1>Loading</h1>
    }

    return (
        <ul className="list-group mb-3">
        {products.map(product => (
            <li key={product.id} classame="list-group-item">
                {product.title}
            </li>
        ))}
        </ul>
    );
};


export default Pagination;