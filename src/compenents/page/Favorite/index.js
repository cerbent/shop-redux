import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../productCard";
import {Link} from "react-router-dom";

const Favorite = () => {
    const {favorite} = useSelector(state => state)
    return (
        <div>
            <div className="container">
                <div>
                    {
                       favorite.length ?  favorite.map(el => <ProductCard product={el}/>) : <Link to={"/"}>
                           <div className='w-1/5 h-1/5 text-center bg-red-800 text-white mx-auto my-56 text-2xl hover: ring-fuchsia-500'>ADD LIKE +</div>
                       </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Favorite;