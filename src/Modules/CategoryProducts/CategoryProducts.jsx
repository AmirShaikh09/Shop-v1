import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard/ProductCard'

const CategoryProducts = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);
            const data = await response.json();
            setProducts(data);
        }
        fetchAllProducts();
    });

    return (
        <ProductCard products={products} />
    )
}

export default CategoryProducts