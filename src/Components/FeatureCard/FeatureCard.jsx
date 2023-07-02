import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({ cards = [] }) => {
    return (
        <section className="text-gray-400 body-font">
            <div className="container px-5 pt-16 pb-0 mx-auto flex flex-wrap">
                <div className="flex flex-col text-center w-full">
                    <h2 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">We have following categories for you.</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-black">Categories</h1>
                </div>
                <div className="flex flex-wrap m-4 w-full">
                    {
                        cards.map((card) => {
                            return (
                                <Link to={`/categories/${card}`} className="p-4 md:w-1/4" key={card}>
                                    <div className="flex rounded-lg h-full bg-gray-800 p-4 flex-col">
                                        <div className="flex items-center">
                                            <h2 className="text-white title-font font-medium capitalize text-xs">{card || 'Category'}</h2>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FeatureCard