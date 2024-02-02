import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../page/productCard";
import ProductUse from "../productUse";
import {GET_PRODUCT} from "../redux/ActonRed";

const Products = () => {
    const data = [
        {
            id:1,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 400,
            countInStock: 2,
            rating: 4,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
        },

        {
            id:2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 230,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
        },
        {
            id:3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 600,
            countInStock: 2,
            rating: 5,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 500,
            countInStock: 2,
            rating: 2,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:5,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 500,
            countInStock: 2,
            rating: 1,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:6,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 500,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
    ]
    const dispatch = useDispatch()
    const {product} = useSelector(s  => s)
    console.log(data)
    useEffect(() =>{
        dispatch({type:GET_PRODUCT, payload: data})
    },[])
    console.log(product)
    return (
        <div id='product'>
            <div className='container'>
                <div className='flex flex-wrap basis-1/4 mx-3 my-3 justify-between px-2 py-5'>
                    {
                        product.map(el => {
                            return <div className='flex columns-3'>
                                <ProductCard product={el}/>
                                <ProductUse product={el}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;