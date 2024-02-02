import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {BsBasketFill, BsFillHeartFill, BsTrash3Fill} from "react-icons/bs";
import {ADD_TO_FAVORITE} from "../../redux/ActonRed";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const {basket, favorite} =useSelector( s => s)
    const addToBasket = (product) => {
      dispatch({type: "ADD TO BASKET",payload: product})
    }
    const addToFavorite = () => {
        dispatch({type: ADD_TO_FAVORITE, payload: product})
    }
    console.log(favorite)
    const foundBasket = basket.some(el => el.id === product.id)
    const foundF = favorite.some(el => el.id === product.id)
    return (

            <div
                className="max-w-sm mx-3 bg-gray-500 my-3

                  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <NavLink to={'/product/:product-use'}>
                    <img className="rounded-t-lg " src={product.image} alt=""/>
                </NavLink>
                <div className="p-5 text-center">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{product.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-white">{product.description}</p>
                    <p className='text-white'>${product.price}</p>
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => addToFavorite(product)}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"><BsFillHeartFill  className={foundF ? "text-red-600" : ""}/></span>
                    </button>
                    {
                        product.id ? <BsTrash3Fill/> : <BsFillHeartFill/>
                    }
                </div>
                <div className='flex flex-col items-center'>
                    {
                        foundBasket ?
                            <button
                                className=" flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <NavLink to={'/basket'}>
                                   <span className=" flex items-center  relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> перейти на <BsBasketFill/>
                                   </span>
                                </NavLink>
                            </button>
                            :
                            <button onClick={() => addToBasket(product)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className=" flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Добвавить в <BsBasketFill/>
                        </span>
                            </button>
                    }

                </div>
            </div>
    );
};

export default ProductCard;