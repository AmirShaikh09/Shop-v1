import React, { useEffect, useState } from 'react'
import Categories from '../Categories/Categories'
import ProductCard from '../../Components/ProductCard/ProductCard'

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchAllProducts();
  }, []);

  return (
    <>
      <Categories />
      {
        products.length > 0 ? <ProductCard products={products} /> : <section className="text-gray-400 body-font m-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black py-4 text-center" style={{ margin: "0" }}>Loading Products...</h1>
        </section >
      }
    </>
  )
}

export default Products