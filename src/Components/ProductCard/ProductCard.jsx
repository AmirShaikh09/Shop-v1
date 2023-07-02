import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ products = [] }) => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="title">
                    <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1 text-center">Browse through our products &amp; get what you need.</h2>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black py-4 text-center">Products</h1>
                </div>
                <div className="flex flex-wrap">
                    {
                        products.map((product) => {
                            const { id, category, image, price, rating, title } = product;
                            return (
                                <Link to={`/products/${id}`} className="lg:w-1/3 md:w-1/2 p-4 w-full hover:shadow-xl ease-in-out duration-300 cursor-pointer" key={id}>
                                    <div className="block relative h-48 rounded overflow-hidden">
                                        <img alt={title} className="object-contain object-center w-full h-full block" src={image} />
                                    </div>
                                    <div className="mt-4 px-2">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                        <h2 className="title-font text-lg font-medium text-black">{title}</h2>
                                        <div className="price-review flex justify-between">
                                            <p className="mt-1 font-bold text-black">${price}</p>
                                            <p className="mt-1 font-bold"><span className='text-yellow-400'>&#9733;</span>{rating.rate}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductCard
