import React from 'react';
import {useSelector} from "react-redux";
import BasketRow from "./BasketRow";
import BasketTable from "./BasketTable";
import {Link} from "react-router-dom";

const Basket = () => {
    const {basket} = useSelector(s => s)

    return (
        <div className='container'>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
                {
                    basket.length ? <BasketTable/> :  <Link to={"/"}>
                        <div  className='mx-auto w-1/5 h-2/6 text-center my-[10%] bg-red-400 text-white cursor-pointer'>ADD PRODUCTS +</div></Link>
                }
            </div>

        </div>
    );
};

export default Basket;