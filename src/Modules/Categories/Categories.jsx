import React, { useEffect, useState } from 'react'
import FeatureCard from '../../Components/FeatureCard/FeatureCard'

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data);
        }
        fetchCategories();
    }, []);

    if (categories.length === 0) return <section className="text-gray-400 body-font m-0">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black py-4 text-center" style={{ margin: "0" }}>Loading Categories...</h1>
    </section >

    return (
        <FeatureCard cards={categories} />
    )
}

export default Categories