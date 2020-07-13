import React, { useState } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import "./style.css"

function Pagination() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)


    return (
        <div className="Pagination-Section">
            <h1>Pagination Test</h1>
            <h2>FBC</h2>
        </div>

    );
}

export default Pagination;