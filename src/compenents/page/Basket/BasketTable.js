import React from 'react';
import {useSelector} from "react-redux";
import BasketRow from "./BasketRow";

const BasketTable = () => {
    const {basket} = useSelector(s => s)
    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th>
                        image
                    </th>
                    <th scope="col" className="px-6 py-3 mx-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketRow el={el}/>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default BasketTable;