import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

    useEffect(() => {
        const total = cartProducts.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
        setTotal(total);
    }, [cartProducts]);

    const handleDeccrement = (id) => {
        const updateCart = cartProducts.map(cartProduct => {
            if (cartProduct.id === id) {
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity - 1
                }
            }
            return cartProduct;
        })
        localStorage.setItem('cart', JSON.stringify(updateCart));
        navigate('/cart');
    }
    const handleIncrement = (id) => {
        const updateCart = cartProducts.map(cartProduct => {
            if (cartProduct.id === id) {
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + 1
                }
            }
            return cartProduct;
        })
        localStorage.setItem('cart', JSON.stringify(updateCart));
        navigate('/cart');
    }
    const handleRemove = (id) => {
        const updateCart = cartProducts.filter(cartProduct => cartProduct.id !== id);
        localStorage.setItem('cart', JSON.stringify(updateCart));
        navigate('/cart');
    }

    if (!cartProducts.length) {
        return (
            <section className="bg-white dark:bg-gray-900 ">
                <div className="container flex items-center min-h-screen px-6 mx-auto">
                    <div className="flex flex-col items-center max-w-md mx-auto text-center">
                        <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Cart is Empty!</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Looks like you have not added any products to your cart. Browse through our products &amp; add it to your cart. <br/>Thank you!</p>

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                            <Link to={'/products'} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Back</span>
                            </Link>

                            <Link to={'/'} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                Take me home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <div className="container mx-auto mt-10">
            <div className="flex shadow-md my-10">
                <div className="w-3/4 bg-white px-10 py-10 relative">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                        <h2 className="font-semibold text-2xl">{cartProducts.length } Items</h2>
                    </div>
                    <div className="flex items-center px-6 py-5">
                        <div className="flex w-2/5">
                            <p className='font-medium text-sm uppercase text-gray-600 font-bold'>Product Details</p>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <p className='font-medium text-sm uppercase text-gray-600 font-bold'>Quantity</p>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <p className='font-medium text-sm uppercase text-gray-600 font-bold'>Price</p>
                        </div>
                        <div className="flex justify-center w-1/5">
                            <p className='font-medium text-sm uppercase text-gray-600 font-bold'>Total</p>
                        </div>
                    </div>
                    {
                        cartProducts.map(cartProduct => {
                            return (
                                <div className="flex items-center hover:bg-gray-100 px-6 py-5" key={cartProduct.id}>
                                    <div className="flex w-2/5">
                                        <div className="w-20">
                                            <img className="h-24" src={cartProduct.image} alt={cartProduct.title} />
                                        </div>
                                        <div className="flex flex-col justify-between ml-4 flex-grow">
                                            <span className="font-bold text-sm">{cartProduct.title}</span>
                                            <span className="text-red-500 text-xs">{cartProduct.category}</span>
                                            <div className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => handleRemove(cartProduct.id)}>Remove</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center w-1/5">
                                        <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleDeccrement(cartProduct.id)}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                        <div className="mx-2 border text-center w-8">{cartProduct.quantity}</div>

                                        <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleIncrement(cartProduct.id)}>
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </div>
                                    <span className="text-center w-1/5 font-semibold text-sm">${cartProduct.price}</span>
                                    <span className="text-center w-1/5 font-semibold text-sm">${(cartProduct.price * cartProduct.quantity).toFixed(2)}</span>
                                </div>
                            )
                        })
                    }
                    <Link to={'/products'} className="flex font-semibold text-indigo-600 text-sm mt-10 absolute bottom-0 left-0 px-10 py-10">
                        <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                        Continue Shopping
                    </Link>
                </div>

                <div id="summary" className="w-1/4 px-8 py-10">
                    <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Items {cartProducts.length}</span>
                        <span className="font-semibold text-sm">${(total).toFixed(2)}</span>
                    </div>
                    <div>
                        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select className="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div className="py-10">
                        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
                    </div>
                    <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>${(total + 10).toFixed(2)}</span>
                        </div>
                        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart