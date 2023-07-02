import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
    {
        name: 'Home',
        path: '/Shop-v1/home'
        path: '/Shop-v1/home'
    },
    {
        name: 'Products',
        path: '/Shop-v1/products'
        path: '/Shop-v1/products'
    },
    {
        name: 'About Us',
        path: '/Shop-v1/about-us'
        path: '/Shop-v1/about-us'
    },
    {
        name: 'Contact Us',
        path: '/Shop-v1/contact-us'
        path: '/Shop-v1/contact-us'
    }
]
const Header = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={'/Shop-v1/home'} className="flex items-center">
                <Link to={'/Shop-v1/home'} className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flow Cart</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            navLinks.map((navLink) => {
                                return (
                                    <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white hover:text-blue-300" key={navLink.name}>
                                        <Link to={navLink.path}>
                                            {navLink.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white hover:text-blue-300 font-bold">
                            <Link to={'/cart'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header