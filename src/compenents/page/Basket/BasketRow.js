import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {BsFillTrashFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {AD_TO_BASKET, DECREASE_QUANTITY, DEL_BASKET, DELETE_FROM_BASKET} from "../../redux/ActonRed";
const BasketRow = ({el}) => {
    const dispatch = useDispatch()
    const {defCurren, allCurren} = useSelector(state => state)
    const addToBasket = (product) => {
        dispatch({type: AD_TO_BASKET,payload: product})
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row"
                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.title}</th>
            <td className="px-6 py-2">
                <img src={el.image} width={60} alt=""/>
            </td>
            <td className="px-6 py-1 flex my-9">
                <span onClick={() => dispatch({type:DECREASE_QUANTITY,payload: el.id})} className='mx-1'><AiOutlineMinus/></span>
                {el.quantity}
                <span onClick={() => addToBasket(el)}><AiOutlinePlus/></span>
            </td>

            <td className="px-6 py-4">
                ${el.price * el.quantity * allCurren[defCurren][0]}`
            </td>
            <td className="px-6 py-4 text-right">
               <span className='shadow-indigo-900'>

                   <button onClick={() => dispatch({type: DELETE_FROM_BASKET,payload: el.id})}>
                       <BsFillTrashFill/>
                   </button>
                   </span>
            </td>
        </tr>
    );
};

export default BasketRow;