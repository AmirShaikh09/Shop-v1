import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import ProductCard from '../../Components/ProductCard/ProductCard'
import Stats from '../../Components/Stats/Stats'
import Categories from '../Categories/Categories'

export const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=6');
            const data = await response.json();
            setProducts(data);
        }
        fetchAllProducts();
    }, []);

    return (
        <>
            <Hero />
            <Categories />
            {products.length > 0 ? <ProductCard products={products} /> : <section className="text-gray-400 body-font m-0">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black py-4 text-center" style={{ margin: "0" }}>Loading Products...</h1>
            </section >}
            <Stats />
        </>
    )
}
